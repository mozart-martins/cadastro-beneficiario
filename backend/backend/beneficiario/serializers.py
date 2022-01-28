from .models import Beneficiario
from rest_framework import serializers

class BeneficiarioSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Beneficiario
        fields = ['responsavel', 
            'nome', 
            'nascimento', 
            'estado_civil', 
            'cpf', 
            'identidade', 
            'orgao_emissor', 
            'data_expedicao', 
            'endereco']
