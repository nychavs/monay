import React from 'react'
import '../styles/Doubts.css'
import {HashLink as Link} from "react-router-hash-link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Doubts() {

  let controlador = 0

  function abreFecha(resposta){
    if (controlador === 0){
      if (resposta==='resposta3'){
        document.getElementById(resposta).style.height ="25vh"
      }
      else if(resposta==='resposta2'){
        document.getElementById(resposta).style.height ="25vh"
      }
      else if (resposta==='resposta1'){
        document.getElementById(resposta).style.height ="30vh"
      }
      controlador = 1
      } 
    else{
      document.getElementById(resposta).style.height ="0"
      controlador = 0
    }
  }
  
  return (
    <>
    <section className='doubts' id='doubts'>
    <div className='doubts-container'>
        <h2>Dúvidas</h2>
        <h1>Ficou com alguma dúvida?</h1>
        <p>Se a sua dúvida não estiver nas perguntas frequentes, fala com a gente!</p>
       
        <div className="perguntas">
          <div id="pergunta" onClick={()=>abreFecha("resposta1")}> 
            <p>Como faço para ter o cartão de crédito no monay? </p>
          </div>

          <div id="resposta1">
            <p>A gente pode te dar algumas dicas, que são:</p>
              <ul>
                <li> Não tenha restrições em seu nome; </li>
                <li> As dívidas existentes devem estar de acordo com sua renda mensal; </li>
                <li> Movimente a sua conta Monay. </li>
              </ul>
            <p>Todos esses fatores são usados para analisar o seu perfil e atribuição de limites. <br></br>
              Nas análises consideramos informações do mercado financeiro, de consumo e regras de 
              concessão de crédito.<br></br>
            </p>
          </div>

          <div id='pergunta' onClick={()=>abreFecha("resposta2")}>
            <p>Como cancelar o cartão em casos de perda ou roubo?</p>
          </div>

          <div id='resposta2'>
            <p>Infelizmente acontece! Mas para cancelar seu cartão
            você pode cancelar no nosso aplicativo, em "cancelar cartão" 
            e já pedir um novo cartão no app do next! Para isso:</p>
            <ul>
             <li>
              Vá em menu - "Cartão"
             </li>
             <li>
             "2ª via e cancelamento"
             </li>             
             <li>
             "Escolher o motivo Perda ou Roubo" e seguir o passo a passo das telas.
             </li>             
             </ul> 
             <p>Em caso de maiores dúvidas ou dificuldades na hora de realizar o
               cancelamento ou um novo pedido, pode nos mandar via email! </p>
          </div>
    
          <div id='pergunta' onClick={()=>abreFecha("resposta3")}>
            <p>Meu cartão ainda não chegou, o que eu faço?</p>
          </div>
          <div id='resposta3'>
            <p>
            Depois da aprovação da conta, seu cartão chegará em 
            até 15 dias no endereço informado na abertura da conta. 
            Você pode acompanhar o andamento da entrega diretamente 
            no app next em menu "Cartões".<br></br><br></br>
            Ao clicar sobre o código de rastreio você consegue 
            verificar o andamento da entrega com um detalhamento maior.<br></br><br></br>
            Caso já tenha passado do prazo e o seu cartão não chegou, 
            lembre-se de checar o status do rastreio, verifique o seu endereço de entrega e se 
            necessário, entre em contato pelo chat.
            </p>
          </div>
        </div>

        <Link to='/duvidas'>
            Falar conosco <ArrowForwardIcon/>
        </Link>
    </div>
    </section>
    </>
  )
}

export default Doubts