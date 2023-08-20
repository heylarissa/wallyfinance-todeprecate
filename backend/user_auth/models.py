from django.db import models
from django.contrib.auth.models import AbstractUser

class Users(AbstractUser):
    cpf = models.CharField(max_length=12)
    address = models.CharField(max_length=64)