from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Applicant, Job


class JobSerializer(ModelSerializer):
    company = serializers.CharField(source="company.user")

    class Meta:
        model = Job
        fields = "__all__"
        read_only_fields = ["company"]

    def create(self, validated_data):
        company_id = self.context["request"].user.id
        return Job.objects.create(company_id=company_id, **validated_data)


class ApplicantSerializer(ModelSerializer):
    user = serializers.CharField(source="applicant.user")

    class Meta:
        model = Applicant
        fields = "__all__"
        read_only_fields = ["applicant", "job"]

    def create(self, validated_data):
        user_id = self.context["request"].user.id
        job_id = self.context["job_id"]
        return Applicant.objects.create(
            applicant_id=user_id, job_id=job_id, **validated_data
        )
