# Generated by Django 4.0.1 on 2022-01-30 21:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('beneficiario', '0002_beneficiario_telefone'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='beneficiario',
            name='responsavel',
        ),
    ]
