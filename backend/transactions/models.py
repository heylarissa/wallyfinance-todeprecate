from django.db import models
from user_auth.models import Users


class Transactions(models.Model):
    description = models.CharField(max_length=120)
    transaction_owner = models.ForeignKey(Users, on_delete=models.RESTRICT)
    is_expense = models.BooleanField()