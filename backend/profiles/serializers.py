from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Company, Education, JobExperience, JobSeeker, Review, Skill


class CompanySerializer(ModelSerializer):
    user = serializers.CharField(read_only=True)
    user_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Company
        fields = "__all__"

    def validate(self, attrs):
        user_id = self.context["request"].user.id
        if Company.objects.filter(user_id=user_id).exists():
            raise serializers.ValidationError("You've already registered.")
        if JobSeeker.objects.filter(user_id=user_id).exists():
            raise serializers.ValidationError(
                "Oops! It looks like you've already registered as a job seeker."
            )
        return super().validate(attrs)

    def create(self, validated_data):
        user = self.context["request"].user
        user_id = user.id
        User = self.Meta.model.user.field.related_model
        user.role = User.COMPANY
        user.save()
        return Company.objects.create(user_id=user_id, **validated_data)


class JobExperienceSerializer(ModelSerializer):
    job_seeker = serializers.CharField(source="job_seeker.user", read_only=True)

    class Meta:
        model = JobExperience
        fields = "__all__"

    def create(self, validated_data):
        user_id = self.context["request"].user.id
        return JobExperience.objects.create(job_seeker_id=user_id, **validated_data)


class SkillSerializer(ModelSerializer):
    job_seeker = serializers.CharField(source="job_seeker.user", read_only=True)

    class Meta:
        model = Skill
        fields = "__all__"

    def create(self, validated_data):
        user_id = self.context["request"].user.id
        return Skill.objects.create(job_seeker_id=user_id, **validated_data)


class EducationSerializer(ModelSerializer):
    job_seeker = serializers.CharField(source="job_seeker.user", read_only=True)

    class Meta:
        model = Education
        fields = "__all__"

    def create(self, validated_data):
        user_id = self.context["request"].user.id
        return Education.objects.create(job_seeker_id=user_id, **validated_data)


class JobSeekerSerializer(ModelSerializer):
    job_experience = JobExperienceSerializer(many=True, read_only=True)
    education = EducationSerializer(many=True, read_only=True)
    skill = SkillSerializer(many=True, read_only=True)
    user = serializers.CharField(read_only=True)
    user_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = JobSeeker
        fields = "__all__"

    def validate(self, attrs):
        user_id = self.context["request"].user.id
        if Company.objects.filter(user_id=user_id).exists():
            raise serializers.ValidationError(
                "Oops! It looks like you've already registered as a company."
            )
        if JobSeeker.objects.filter(user_id=user_id).exists():
            raise serializers.ValidationError("You've already registered.")
        return super().validate(attrs)

    def create(self, validated_data):
        user = self.context["request"].user
        user_id = user.id
        User = self.Meta.model.user.field.related_model
        user.role = User.JOB_SEEKER
        user.save()
        return JobSeeker.objects.create(user_id=user_id, **validated_data)


class ReviewSerializer(ModelSerializer):
    reviewer = serializers.CharField(read_only=True)

    class Meta:
        model = Review
        fields = "__all__"
        read_only_fields = ["user"]

    def create(self, validated_data):
        reviewer_id = self.context["request"].user.id
        user_id = self.context["user_id"]

        if (
            not JobSeeker.objects.filter(user_id=user_id).exists()
            and not Company.objects.filter(user_id=user_id).exists()
        ):
            raise serializers.ValidationError("User doesn't exists.")
        if reviewer_id == user_id:
            raise serializers.ValidationError("You can't review your self.")

        if Review.objects.filter(reviewer_id=reviewer_id, user_id=user_id).exists():
            raise serializers.ValidationError("You have already reviewed this user.")

        return Review.objects.create(
            reviewer_id=reviewer_id,
            user_id=user_id,
            **validated_data,
        )
