import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Login() {
  return (
    <div className='all-page'>
      <div className='container'>
        <h1>Bem Vindo de Volta!</h1>
        <p>Insira seus dados para acessar a conta: </p>
        <div className='form-container'>
        <form>
          <input type='text' id='CPF' name='CPF' placeholder='Insira seu CPF'/>
          <input type='text' id='senha' name='senha' placeholder='Insira sua senha' />
        </form>
        </div>
        <Link to={'/homeUser'}>
        <button> Prosseguir <ArrowForwardIcon/></button>
        </Link>
      </div>
    </div>
  )
}

export default Login