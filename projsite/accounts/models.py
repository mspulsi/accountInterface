from django.db import models

# Create your models here.
class Account(models.Model):
    email = models.EmailField(max_length=75)
    password = models.CharField(max_length=20, default="open")
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    phone = models.CharField(max_length=15)
    street = models.CharField(max_length=150)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=20)
    zipcode = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.first_name}, {self.last_name}, {self.email}"