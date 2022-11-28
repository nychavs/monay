import React, {useState, useEffect} from 'react'
import '../styles/Card.css'
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Card() {

  const date = new Date()
  let day = date.getDay()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  if (day <= 9){
    day = '0' + day
  }
  let year18 = year - 18
  let currentDate = `${year18}-${month}-${day}`


  const [input, setInput] = useState({})

  const apiPost = async () =>{   
    await fetch("http://127.0.0.1:8000/monay/usuario/?format=json",{
      method: "POST",
      body: JSON.stringify({
        cpfUsuario: input.cpfUsuario,
        senhaUsuario: input.senhaUsuario,
        statusUsuario: 1
      }),
      headers: {
        "Content-type":"application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      apiPost2(json.id)
      window.alert(
        "Cadastro efetuado com sucesso! Acesse a página de login para continuar")

    })
}
const apiPost2 = async (idUsuario) =>{   
  await fetch("http://127.0.0.1:8000/monay/cliente/?format=json",{
    method: "POST",
    body: JSON.stringify({
      nomeCliente: input.nomeCliente,
      email:input.senhaUsuario,
      dataNascimento: input.dataNascimento,
      usuario: idUsuario,
    }),
    headers: {
      "Content-type":"application/json; charset=UTF-8",
    },
  })
  .then((response) => response.json())
  .then((json) => {console.log(json)
    console.log('tudo postado')
  })
}
    const handleChange = (event) =>{
      event.persist()
      setInput((input)=>({
        ...input,
        [event.target.name]:event.target.value,
      }))
    }
    const handleSubmit=(event)=>{
      event.preventDefault()
      console.log('handle submit')
      if (handleValidation()){
        console.log('entrou no if')
        apiPost()
      }
      console.log(input)
    }
    
    const toastOptions = {
      position: "bottom-right",
      autoClose:8000,
          pauseOnHover:true,
          draggable:true,
          theme:"dark"
    }
    const [data, setData] = useState([])
    
    const apiGet = () =>{   
      fetch("http://127.0.0.1:8000/monay/usuario/?format=json")
      .then((response) => 
      response.json())
      .then((json) => {
      console.log(json)
      setData(json)
      })
    }
    
    useEffect(()=>{
      apiGet();
    }, [])

    const handleValidation = () =>{
      const {nomeCliente, email, emailConf, senhaUsuario, confSenha, cpfUsuario} = input;
      if (nomeCliente.length < 4){
          toast.error("Por favor, insira seu nome completo.", toastOptions);
          return false;
      }else if (cpfUsuario < 11){
          toast.error("Por favor, verifique seu CPF", toastOptions)
          return false;
      }else if (cpfUsuario.length == 11){
        for (let i=0; i < data.length; i++){
          let item = data[i]
          if (cpfUsuario === item.cpfUsuario){
            toast.error("CPF Ja cadastrado em nosso sistema! Clique em 'Login' no canto superior", toastOptions)
            i = data.length
          }
        }
        return false;
      }else if (email !== emailConf){
        console.log(email)
        console.log(emailConf)
        toast.error("Os emails não conferem!", toastOptions)
        return false;
      }
      else if (email === emailConf){
        for (let i=0; i <data.length; i++){
          let item = data[i]
          if (email === item.email){
            toast.error("Email já cadastrado em nosso sistema! Clique em 'Login' no canto superior", toastOptions)
            i = data.length
          }
        }
        return false;
      }
      else if (senhaUsuario < 6){
        toast.error("Sua senha deve possuir pelo menos 6 caracteres", toastOptions)
      }else if (senhaUsuario !== confSenha) {
        toast.error("As senhas não conferem!", toastOptions)
        return false;
      }
      return true;
    }

return (
    <>
    <section className='cadastro' id='cadastro'>
    <div className='everything'>
    <div className='card-insc-container'>
        <h1>Quero ser Monay!</h1>
        <p>Preencha seus dados para iniciar o processo de abertura de conta.</p>
        <div className='card-insc-textbox'>
          <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            id='nome' 
            name='nomeCliente' 
            placeholder='Nome Completo'
            onChange={handleChange}/><br/>
            <input 
            type='text' 
            id='CPF' 
            name='cpfUsuario' 
            placeholder='CPF'
            onChange={handleChange}/><br/>
            <input 
            type='date' 
            id='data' 
            name='dataNascimento' 
            max={currentDate}
            onChange={handleChange}/><br/>
            <input 
            type='email' 
            id='email' 
            name='email' 
            placeholder='Email'
            onChange={handleChange}/><br/>
            <input 
            type='email' 
            id='emailConf' 
            name='emailConf' 
            placeholder='Confirmar Email'
            onChange={handleChange}/><br/>
            {/* <input 
            type='text' 
            id='genero' 
            name='genero' 
            placeholder='Genero'/><br/> */}
            <input
            type='password' 
            id='senhaUsuario' 
            name='senhaUsuario' 
            placeholder='Senha (8 caracteres)'
            onChange={handleChange}/><br/>
            <input
            type='password' 
            id='confSenha' 
            name='confSenha' 
            placeholder='Confirmar Senha'
            onChange={handleChange}/><br/>
            <button 
            type="submit" 
            value="Submit" 
            onClick={handleChange}> 
            Prosseguir <ArrowForwardIcon/>
            </button>
          </form>
        </div>
    </div>
    </div>
    </section>  
    <ToastContainer />
    </>
  )
}

export default Card