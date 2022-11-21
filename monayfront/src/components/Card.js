import React from 'react'
import '../styles/Card.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CardHeader from './CardHeader';

function Card() {
  const date = new Date()
  let day = date.getDay()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  console.log(day)
  if (day <= 9){
    day = '0' + day
  }
  let year18 = year - 18
  let currentDate = `${year18}-${month}-${day}`
  console.log(currentDate)

  return (
    <>
    <section className='cadastro' id='cadastro'>
    <div className='everything'>
    <div className='card-insc-container'>
        <h1>Quero ser Monay!</h1>
        <p>Preencha seus dados para iniciar o processo de abertura de conta.</p>
        <div className='card-insc-textbox'>
          <form>
            <input type='text' id='nome' name='nome' placeholder='Nome Completo'/><br/>
            <input type='text' id='CPF' name='CPF' placeholder='CPF'/><br/>
            <input type='date' id='data' name='data' min={currentDate}/><br/>
            <input type='email' id='email' name='email' placeholder='Email'/><br/>
            <input type='emailConf' id='emailConf' name='emailConf' placeholder='Confirmar Email'/><br/>
          </form>
        </div>
        <button> Prosseguir <ArrowForwardIcon/></button>
    </div>
    </div>
    </section>  
    </>
  )
}

export default Card