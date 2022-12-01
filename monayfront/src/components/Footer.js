import React from 'react'
import '../styles/Footer.css'
import { useState } from 'react';   

function Footer() {
  const[fix, setFix] = useState(false);

  function setFixed(){
    if (window.scrollY >= 800){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }

  let controller = 0

  function abreFecha(opc){
    if (controller === 0){
      document.getElementById(opc).style.height='1vh'
      controller = 1 
    }
    else {
      document.getElementById(opc).style.height='0vh'
      controller = 0
    }
  }

  window.addEventListener("scroll", setFixed)
  return (
    <div className={fix ? 'footer-content fixed': 'footer-content'}>
      <p id='pergunta' onClick={()=>abreFecha('opc1')}>Atendimento</p>
      <p id='pergunta' onClick={()=>abreFecha('opc2')}>Informações</p>
      <p id='pergunta' onClick={()=>abreFecha('opc3')}>Reclame aqui</p>
      <p id='pergunta' onClick={()=>abreFecha('opc3')}>Alguma coisa</p>
      {/* <div id='opc1'>
        <p id='a'>Central de Relacionamento
        0800 275 6398</p>
        <p id='a'>SAC
        0800 722 6398</p>
        <p id='a'>
        Ouvidoria
        0800 688 6398
        </p>
      </div> */}
    </div>
  )
}

export default Footer