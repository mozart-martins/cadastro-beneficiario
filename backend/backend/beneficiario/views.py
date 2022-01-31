from beneficiario.models import Beneficiario
from rest_framework import viewsets, permissions, authentication
from .serializers import BeneficiarioSerializer




class BeneficiarioViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite beneficiários ser vistos ou editados
    """
    queryset = Beneficiario.objects.all()
    serializer_class = BeneficiarioSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication]