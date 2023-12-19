from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from job_board.permissions import IsCompany, IsJobSeeker
from profiles.models import Company
from .models import Job, Applicant
from .serializers import ApplicantSerializer, JobSerializer


class JobViewSet(ModelViewSet):
    http_method_names = ["get", "post", "put", "delete"]
    serializer_class = JobSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ["title"]

    def get_queryset(self):
        return Job.objects.filter(is_closed=False)

    def get_permissions(self):
        if self.request.method in ["POST", "PUT", "DELETE"]:
            return [IsCompany()]
        return super().get_permissions()

    def get_serializer_context(self):
        return {"request": self.request}

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.id != instance.company_id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.id != instance.company_id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().destroy(request, *args, **kwargs)


class ApplicantViewSet(ModelViewSet):
    http_method_names = ["get", "post", "delete"]
    serializer_class = ApplicantSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.request.method in ["POST", "DELETE"]:
            return [IsJobSeeker()]
        return super().get_permissions()

    def get_queryset(self):
        user = self.request.user
        job_id = self.kwargs["job_pk"]
        company = Company.objects.filter(user_id=user.id).first()
        if user.role == "CO":
            if company:
                return Applicant.objects.filter(job_id=job_id, job__company=company)
            return Applicant.objects.none()
        return Applicant.objects.filter(job_id=job_id, applicant_id=user.id)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.id != instance.applicant_id:
            return Response(
                {"error": "You don't have permission to perform this action."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return super().destroy(request, *args, **kwargs)

    def get_serializer_context(self):
        return {"request": self.request, "job_id": self.kwargs["job_pk"]}
