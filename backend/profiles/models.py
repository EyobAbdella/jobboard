from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from autoslug import AutoSlugField


class JobSeeker(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        primary_key=True,
        editable=False,
    )
    slug = AutoSlugField(unique=True, populate_from="user")
    image = models.ImageField(upload_to="profile/job_seeker", null=True)
    location = models.CharField(max_length=255, null=True)
    description = models.TextField()


class JobExperience(models.Model):
    job_seeker = models.ForeignKey(
        JobSeeker, on_delete=models.CASCADE, related_name="job_experience"
    )
    job_title = models.CharField(max_length=150)
    company_name = models.CharField(max_length=150)
    years_of_experience = models.PositiveIntegerField()


class Education(models.Model):
    job_seeker = models.ForeignKey(
        JobSeeker, on_delete=models.CASCADE, related_name="education"
    )
    level = models.CharField(max_length=255)
    field = models.CharField(max_length=255)


class Skill(models.Model):
    job_seeker = models.ForeignKey(
        JobSeeker, on_delete=models.CASCADE, related_name="skill"
    )
    title = models.CharField(max_length=255)
    years_of_experience = models.PositiveIntegerField()


class Company(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        primary_key=True,
        editable=False,
    )
    slug = AutoSlugField(populate_from="name")
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    number_of_employees = models.CharField(max_length=20)
    image = models.ImageField(upload_to="profile/company", null=True, blank=True)
    location = models.CharField(max_length=255)
    category = models.CharField(max_length=300)
    website = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name


class Review(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="reviews"
    )
    reviewer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    review = models.TextField()
    rating = models.PositiveSmallIntegerField(validators=[MaxValueValidator(5)])
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ["reviewer", "user"]
