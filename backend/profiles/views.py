from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from job_board.permissions import IsCompany, IsJobSeeker
from .models import Company, Education, JobExperience, JobSeeker, Review, Skill
from .serializers import (
    CompanySerializer,
    EducationSerializer,
    JobExperienceSerializer,
    JobSeekerSerializer,
    ReviewSerializer,
    SkillSerializer,
)


class CompanyViewSet(ModelViewSet):
    http_method_names = ["get", "post", "delete", "put"]
    serializer_class = CompanySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_permissions(self):
        if self.request.method in ["DELETE", "PUT"]:
            return [IsCompany()]
        if self.request.method == 'POST' and self.request.user.jobseeker:
            return []
        return super().get_permissions()

    def get_queryset(self):
        queryset = Company.objects.all().select_related("user")
        company_name = self.request.query_params.get("company_name", None)
        location = self.request.query_params.get("location", None)
        if company_name is not None:
            queryset = queryset.filter(name__icontains=company_name)
        if location is not None:
            queryset = queryset.filter(location__icontains=location)
        return queryset

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.id != instance.user_id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.id != instance.user_id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().destroy(request, *args, **kwargs)


class JobSeekerViewSet(ModelViewSet):
    http_method_names = ["get", "post", "put", "delete"]
    serializer_class = JobSeekerSerializer
    filter_backends = [DjangoFilterBackend]

    def get_queryset(self):
        queryset = (
            JobSeeker.objects.all()
            .select_related("user")
            .prefetch_related("job_experience", "education", "skill")
        )
        skill_title = self.request.query_params.get("skill", None)
        education_title = self.request.query_params.get("education", None)
        if skill_title is not None:
            queryset = queryset.filter(skill__title__icontains=skill_title).distinct()
        elif education_title is not None:
            queryset = queryset.filter(
                education__field__icontains=education_title
            ).distinct()
        return queryset

    def get_permissions(self):
        if self.request.method in ["PUT", "DELETE"]:
            return [IsJobSeeker()]
        return super().get_permissions()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.id != instance.user_id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.id != instance.user_id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().destroy(request, *args, **kwargs)

    def get_serializer_context(self):
        return {"request": self.request}


class JobExperienceViewSet(ModelViewSet):
    serializer_class = JobExperienceSerializer
    permission_classes = [IsJobSeeker]

    def get_queryset(self):
        return JobExperience.objects.filter(
            job_seeker_id=self.request.user.id
        ).select_related("job_seeker__user")

    def get_serializer_context(self):
        return {"request": self.request}


class SkillViewSet(ModelViewSet):
    serializer_class = SkillSerializer
    permission_classes = [IsJobSeeker]

    def get_queryset(self):
        return Skill.objects.filter(job_seeker_id=self.request.user.id).select_related(
            "job_seeker__user"
        )

    def get_serializer_context(self):
        return {"request": self.request}


class EducationViewSet(ModelViewSet):
    serializer_class = EducationSerializer
    permission_classes = [IsJobSeeker]

    def get_queryset(self):
        return Education.objects.filter(
            job_seeker_id=self.request.user.id
        ).select_related("job_seeker__user")

    def get_serializer_context(self):
        return {"request": self.request}


class JobSeekerReviewViewSet(ModelViewSet):
    http_method_names = ["get", "post", "delete"]
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_permissions(self):
        if self.request.method in ["POST", "DELETE"]:
            return [IsCompany()]
        return super().get_permissions()

    def get_queryset(self):
        return Review.objects.filter(
            user_id=self.kwargs["jobseeker_pk"]
        ).select_related("user", "reviewer")

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.reviewer_id != request.user.id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().destroy(request, *args, **kwargs)

    def get_serializer_context(self):
        return {"request": self.request, "user_id": self.kwargs["jobseeker_pk"]}


class CompanyReviewViewSet(ModelViewSet):
    http_method_names = ["get", "post", "delete"]
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_permissions(self):
        if self.request.method in ["POST", "DELETE"]:
            return [IsJobSeeker()]
        return super().get_permissions()

    def get_queryset(self):
        return Review.objects.filter(user_id=self.kwargs["company_pk"]).select_related(
            "user", "reviewer"
        )

    def get_serializer_context(self):
        return {"request": self.request, "user_id": self.kwargs["company_pk"]}

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.reviewer_id != request.user.id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().destroy(request, *args, **kwargs)
