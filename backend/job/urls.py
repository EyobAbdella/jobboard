from rest_framework_nested import routers
from . import views


router = routers.DefaultRouter()

router.register("jobs", views.JobViewSet, basename="job")

job_router = routers.NestedDefaultRouter(router, "jobs", lookup="job")
job_router.register("applicants", views.ApplicantViewSet, basename="applicant")

urlpatterns = router.urls + job_router.urls
