import React from 'react'
import '../styles/CardHeader.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'

function CardHeader() {
  // function setCPF() {
  //   var cpf = document.getElementById("cpf").value;
  //   document.getElementById("demo").innerHTML = cpf;
  //}
  return (
    <>
    <div className='cardHeader-container'>
        <h1>Venha se tornar um membro do Monay!</h1>
        <p>Com o banco Monay, a resposta vem em menos de 1 minuto.</p>
        <input id="cpf" placeholder='Digite seu cpf' color='black'/>
        {/* <button type='button' onClick={setCPF}>Continuar</button>
        <p id="demo"></p> */}
        <Link to='#cadastro'>Continuar <ArrowForwardIcon/> </Link>
    </div>
    </>
  )
}

export default CardHeader