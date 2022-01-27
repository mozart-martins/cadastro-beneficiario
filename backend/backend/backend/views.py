from django.contrib.auth.models import User, Group
from beneficiario.models import Beneficiario
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer, GroupSerializer, BeneficiarioSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]



class BeneficiarioViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite beneficiários ser vistos ou editados
    """
    queryset = Beneficiario.objects.all()
    serializer_class = BeneficiarioSerializer
    permission_class = [permissions.IsAuthenticated]