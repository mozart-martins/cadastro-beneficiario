from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, GroupViewSet
from beneficiario.views import BeneficiarioViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'beneficiarios', BeneficiarioViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
