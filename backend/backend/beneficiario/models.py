from django.db import models
from django.contrib.auth.models import User

class Beneficiario(models.Model):
    ESTADO_CIVIL = (
        ("C", "Casado"),
        ("S", "Solteiro"),
        ("D", "Divorciado"),
        ("A", "Amasiado")
    )

    nome = models.CharField(max_length=300)
    telefone = models.CharField(max_length=20)
    nascimento = models.DateField()
    estado_civil = models.CharField(max_length=1, choices=ESTADO_CIVIL)
    cpf = models.IntegerField()
    endereco = models.TextField()
    identidade = models.IntegerField()
    orgao_emissor = models.CharField(max_length=50)
    data_expedicao = models.DateField()


    def __str__(self):
        return self.nome


