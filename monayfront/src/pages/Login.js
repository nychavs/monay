import React, {useState, useEffect} from 'react'
import '../styles/Login.css'
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [input, setInput] = useState({})
  const [data, setData] = useState([])
  let teste = 0
  let navigate = useNavigate()

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
    localStorage.setItem('idUsuario', teste)
    console.log(teste + ' id localstorage')
      window.alert("Login efetuado com sucesso!")
      navigate('/homeuser')
      // window.location.reload();
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
    var logado = false
    for (let i=0; i < data.length; i++){
      if (input.cpfUsuario !== (data[i].cpfUsuario)){
        if (i === (data.length - 1)){
          toast.error("CPF não encontrado!", toastOptions)
        }
      }else if (input.senhaUsuario !== (data[i].senhaUsuario)){
        toast.error("Senha incorreta!", toastOptions)
      }else if (input.cpfUsuario === (data[i].cpfUsuario)){
        if (input.senhaUsuario === (data[i].senhaUsuario)){
          teste = data[i].id
          logado = true
        }
      }
    }return logado;
  }
    
  return (
    <div className='all-page'>
      <div className='container'>
        <h1>Bem Vindo de Volta!</h1>
        <p id='normal-content'>Insira seus dados para acessar a conta: </p>
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
          type='password' 
          id='senhaUsuario' 
          // name='body' 
          name='senhaUsuario' 
          placeholder='Insira sua senha'
          onChange={handleChange}/>
        <button type="submit" value="Submit" onClick={handleChange}> Prosseguir <ArrowForwardIcon/></button>
          {/* <input type="submit" value="Submit" onChange={handleChange} /> */}
        </form>
        </div>
        <div className='cadastrar'>
        <p>Não possui cadastro ainda?</p>
        <p>Não tem problema!</p>
        <NavLink to='/#cadastro'>Clique aqui para se cadastrar!</NavLink>
        </div>
        {/* <Link to={'/homeUser'}> */}
        {/* </Link> */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login