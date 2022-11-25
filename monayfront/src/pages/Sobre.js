import React from 'react'
import '../styles/Sobre.css'
import '../scripts';
import Doubts from '../components/Doubts';
import Card from '../components/Card';
import foto from '../assets/3.png'
function Sobre() {
  return (
    <div className='sobre-container'>
      <div className='sobre-header' 
      style={{ backgroundImage: `url(${foto})`}}>
        <p>Somos o next. Um banco 100% digital e 
          gratuito, que nasceu com a missão de oferecer 
          para todos os brasileiros a oportunidade de 
          ter uma conta e um cartão sem custos, taxas ou 
          anuidade. Acreditamos que desta maneira mais 
          pessoas terão acesso a uma vida financeira 
          organizada e a oportunidade de realizar seus sonhos.</p>
      </div>
      <div id='posts-container'>
        <Doubts></Doubts>
        <Card></Card>
      </div>
    </div>
  )
}

export default Sobre