from django.db import models
from django.contrib.auth.models import User

class Movement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    expired = models.DateField()
    agent = models.CharField(max_length=30, blank=True, default='')
    income = models.BooleanField(default=False)
    amount = models.IntegerField(default=0)
    category = models.CharField(max_length=30, blank=True, default='')
