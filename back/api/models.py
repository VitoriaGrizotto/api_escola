from django.db import models

class Professor(models.Model):
    ni = models.CharField(max_length=10, unique=True)
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    ocupacao = models.CharField(max_length=100)
    celular = models.CharField(max_length=15)

    def __str__(self):
        return self.nome

