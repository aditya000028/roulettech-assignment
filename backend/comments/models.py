from django.db import models

# Create your models here.
class Comment(models.Model):
  firstName = models.CharField(max_length=128, blank=False)
  lastName = models.CharField(max_length=128, blank=False)
  timestamp = models.DateTimeField(blank=False)
  subject = models.CharField(max_length=128, blank=False)
  comment = models.TextField(max_length=256, blank=False)