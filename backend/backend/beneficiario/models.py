from django.db import models
from django.contrib.auth.models import User

class Beneficiario(models.Model):
    ESTADO_CIVIL = (
        ("C", "Casado"),
        ("S", "Solteiro"),
        ("D", "Divorciado"),
        ("A", "Amasiado")
    )

    # Responsável pelo cadastro
    responsavel = models.ForeignKey(User, on_delete=models.CASCADE) 
    nome = models.CharField(max_length=300)
    nascimento = models.DateTimeField()
    estado_civil = models.CharField(max_length=1, choices=ESTADO_CIVIL)
    cpf = models.IntegerField()
    identidade = models.IntegerField()
    orgao_emissor = models.CharField(max_length=50)
    data_expedicao = models.DateTimeField()
    endereco = models.TextField()


    def __str__(self):
        return self.nome


