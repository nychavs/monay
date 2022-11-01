import React from 'react'
import '../styles/Login.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Duvidas() {
  return (
    <div className='all-page'>
      <div id='duvidas' className="container"> 
        <h2>Nos envie sua pergunta que iremos respondê-la o mais rápido possível!</h2>
          <div className='form-container'>
            <form>
              <input type='text' name='email' id='email' placeholder='Seu endereço de email'/>
              <input type='text' name='nome' id='nome' placeholder='Como prefere ser chamado'/>
              <input type='text' name='duvida' id='duvida' placeholder='Sua duvida'/>
            </form>
          </div>
        <button>
          Enviar <ArrowForwardIcon/>
        </button>
      </div>
    </div>
  )
}

export default Duvidas