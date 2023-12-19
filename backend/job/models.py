from django.db import models
from profiles.models import Company, JobSeeker


class Job(models.Model):
    FULL_TIME = "F"
    PART_TIME = "P"
    INTERN_SHIP = "I"
    CONTRACT = "C"
    REMOTE = "R"

    JOB_TYPE_CHOICES = [
        (FULL_TIME, "Full time"),
        (PART_TIME, "Part time"),
        (INTERN_SHIP, "Intern ship"),
        (CONTRACT, "Contract"),
        (REMOTE, "Remote"),
    ]

    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="jobs")
    title = models.CharField(max_length=300)
    description = models.TextField()
    people_to_hire = models.PositiveIntegerField(default=1)
    salary = models.PositiveIntegerField()
    job_type = models.CharField(max_length=1, choices=JOB_TYPE_CHOICES)
    is_closed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Applicant(models.Model):
    applicant = models.ForeignKey(JobSeeker, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="applicants")
    cover_letter = models.TextField()

    class Meta:
        unique_together = [["job", "applicant"]]
