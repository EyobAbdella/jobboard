from rest_framework_nested import routers
from . import views


router = routers.DefaultRouter()
router.register("companies", views.CompanyViewSet, basename="company-pro")
router.register("job-seekers", views.JobSeekerViewSet, basename="job-seeker")
router.register("experiences", views.JobExperienceViewSet, basename="experience")
router.register("skills", views.SkillViewSet, basename="skill")
router.register("educations", views.EducationViewSet, basename="education")

company_review = routers.NestedDefaultRouter(router, "companies", lookup="company")
company_review.register("reviews", views.CompanyReviewViewSet, basename="reviews")

job_seeker_review = routers.NestedDefaultRouter(
    router, "job-seekers", lookup="jobseeker"
)
job_seeker_review.register("reviews", views.JobSeekerReviewViewSet, basename="reviews")

urlpatterns = router.urls + job_seeker_review.urls + company_review.urls
