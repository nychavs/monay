import React from 'react'
import '../styles/Footer.css'
import { useState } from 'react';   
import {HashLink as Link} from "react-router-hash-link";

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

  window.addEventListener("scroll", setFixed)
  return (
    <div className={fix ? 'footer-content fixed': 'footer-content'}>
      <Link to=''>Atendimento</Link>
      <Link to=''>Informações</Link>
      <Link to=''>Fale conosco</Link>
      <div className='rightside'>
        <Link to=''>Baixe o app</Link>
      </div>
    </div>
  )
}

export default Footer