from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializer import UsuarioSerializer, ClienteSerializer 
from .serializer import EmprestimoSerializer, ContatoSerializer, EnderecoSerializer
from .serializer import PgtoEmprestimoSerializer, ContaSerializer
from .serializer import FavoritoSerializer, ExtratoSerializer, TransacaoSerializer
from .serializer import CartaoSerializer, FaturaSerializer
from .models import Cliente, Usuario, Contato, Endereco
from .models import PgtoEmprestimo, Emprestimo, Conta, Favorito
from .models import Extrato, Transacao, Cartao, Fatura
from rest_framework.response import Response
from datetime import datetime
from rest_framework import viewsets, status
from django_filters.rest_framework import DjangoFilterBackend
from .filters import EnderecoFiltro, ContatoFiltro
from decimal import Decimal


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class PgtoEmprestimoViewSet(viewsets.ModelViewSet):
    queryset = PgtoEmprestimo.objects.all()
    serializer_class = PgtoEmprestimoSerializer

class EmprestimoViewSet(viewsets.ModelViewSet):
    queryset = Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer     

class EnderecoViewSet(viewsets.ModelViewSet):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = EnderecoFiltro
    # def retrieve(self, request, *args, **kwargs):
    #     cep = self.get_object()

class ContatoViewSet(viewsets.ModelViewSet):
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ContatoFiltro

class ContaViewSet(viewsets.ModelViewSet):
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer

class FavoritoViewSet(viewsets.ModelViewSet):
    queryset = Favorito.objects.all()
    serializer_class = FavoritoSerializer
    # se não é uma conta não tem como add como fav

class ExtratoViewSet(viewsets.ModelViewSet):
    queryset = Extrato.objects.all()
    serializer_class = ExtratoSerializer

class TransacaoViewSet(viewsets.ModelViewSet):
    queryset = Transacao.objects.all()
    serializer_class = TransacaoSerializer
    def create(self, request, *args, **kwargs):
        contaRemetente = Conta.objects.get(pk = self.request.data['remetente'])
        contaDestinatario = Conta.objects.get(pk = self.request.data['destinatario'])
        
        # extratoDestinatario = Extrato.objects.get(pk = self.request.data['destinatario'])
        # extratoRemetente = Extrato.objects.get(pk = self.request.data['remetente'])
        
        valorTransacao = request.data['valorTransacao']

        if Decimal(valorTransacao) > Decimal(contaRemetente.saldoConta):
            return Response({
                'erro':'o cliente não possui esse valor na conta'
            })

        contaRemetente.saldoConta -= Decimal(valorTransacao)
        contaDestinatario.saldoConta += Decimal(valorTransacao)

        # extratoRemetente.valorExtrato -= Decimal(valorTransacao)
        # extratoDestinatario.valorExtrato += Decimal(valorTransacao)
        # extratoDestinatario.todasOperacoes += str(valorTransacao + ';') 
        # extratoRemetente.todasOperacoes += str(valorTransacao + ';')

        atualizarRemetente = {'agencia':contaRemetente.agencia, 'numeroConta':contaRemetente.numeroConta, 'tipoConta':contaRemetente.tipoConta, 'cliente': contaRemetente.cliente.pk, 'saldoConta': contaRemetente.saldoConta}
        atualizarDestinatario = {'agencia':contaDestinatario.agencia, 'numeroConta':contaDestinatario.numeroConta, 'tipoConta':contaDestinatario.tipoConta, 'cliente': contaDestinatario.cliente.pk, 'saldoConta': contaDestinatario.saldoConta}
       
        # atualizarExtratoDestinatario = {'contaExtrato':extratoDestinatario.contaExtrato.pk, 'valorExtrato':extratoDestinatario.valorExtrato, 'dataExtrato':extratoDestinatario.dataExtrato}
        # atualizarExtratoRemetente = {'contaExtrato':extratoRemetente.contaExtrato.pk, 'valorExtrato':extratoRemetente.valorExtrato, 'dataExtrato':extratoRemetente.dataExtrato}
        
        serializerRemetente = ContaSerializer(contaRemetente, data = atualizarRemetente)
        serializerDestinatario = ContaSerializer(contaDestinatario, data = atualizarDestinatario)
       
        # serializerExtratoDestinatario = ExtratoSerializer(extratoDestinatario, data=atualizarExtratoDestinatario)
        # serializerExtratoRemetente = ExtratoSerializer(extratoDestinatario, data=atualizarExtratoRemetente)
        
        #if serializerRemetente.is_valid() and serializerDestinatario.is_valid() and serializerExtratoDestinatario.is_valid() and serializerExtratoRemetente.is_valid():
        if serializerRemetente.is_valid() and serializerDestinatario.is_valid():
            serializerRemetente.save()
            serializerDestinatario.save()
            # serializerExtratoDestinatario.save()
            # serializerExtratoRemetente.save()
            return super().create(request, *args, **kwargs)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class CartaoViewSet(viewsets.ModelViewSet):
    queryset = Cartao.objects.all() 
    serializer_class = CartaoSerializer

class FaturaViewSet(viewsets.ModelViewSet):
    queryset = Fatura.objects.all()
    serializer_class = FaturaSerializer