# Generated by Django 4.1.1 on 2022-11-29 13:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('monay', '0007_emprestimo_contacliente'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='extrato',
            name='tipoExtrato',
        ),
    ]