import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Login.css'
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Login() {
  const [input, setInput] = useState({})
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
  const handleChange = (event) =>{
    event.persist()
    setInput((input)=>({
      ...input,
      [event.target.name]:event.target.value,
    }))
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    if (validate()){
      window.alert("Login efetuado com sucesso!")
    }
    console.log(input)
  }

  useEffect(()=>{
    apiGet();
}, [])

const toastOptions = {
  position: "bottom-right",
  autoClose:8000,
      pauseOnHover:true,
      draggable:true,
      theme:"dark"
    }


  const validate = () =>{
    const {cpfUsuario, senhaUsuario} = input
    console.log("entrou no validate")
    // data.forEach(item => {
    for (let i=0; i < data.length; i++){  
    console.log(data[i]) 
    let item = data[i] 
      if (item.cpfUsuario !== cpfUsuario){
        if (item = data.length) {
          toast.error("CPF não encontrado", toastOptions)
        }
        return false;
      } else if (item.senhaUsuario !== senhaUsuario){
        toast.error("Senha incorreta", toastOptions)
        return false;
      }
      return true
    };
    }

  return (
    <div className='all-page'>
      <div className='container'>
        <h1>Bem Vindo de Volta!</h1>
        <p>Insira seus dados para acessar a conta: </p>
        <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input 
          type='text' 
          id='cpfUsuario' 
          // name='title' 
          name='cpfUsuario' 
          placeholder='Insira seu CPF'
          onChange={handleChange}/>
          <input 
          type='text' 
          id='senhaUsuario' 
          // name='body' 
          name='senhaUsuario' 
          placeholder='Insira sua senha'
          onChange={handleChange}/>
        <button type="submit" value="Submit" onClick={handleChange}> Prosseguir <ArrowForwardIcon/></button>
          {/* <input type="submit" value="Submit" onChange={handleChange} /> */}
        </form>
        </div>
        {/* <Link to={'/homeUser'}> */}
        {/* </Link> */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login