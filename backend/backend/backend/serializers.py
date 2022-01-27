from django.contrib.auth.models import User, Group
from beneficiario.models import Beneficiario
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


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


    