import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Login.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Login() {
  const [input, setInput] = useState({})

  const apiPost = async () =>{   
    await fetch("http://127.0.0.1:8000/monay/usuario/?format=json",{
      // await fetch("http://jsonplaceholder.typicode.com/posts",{
      method: "POST",
      body: JSON.stringify({
        cpfUsuario: input.cpfUsuario,
        senhaUsuario:input.senhaUsuario,
        statusUsuario: 1,
        // title:input.title,
        // body: input.body,
        // userId: 5
      }),
      headers: {
        "Content-type":"application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => {console.log(json)
    })
}

  // const [cpf, setCpf] = useState('')
  // const [password, setPassword] = useState('')
  // const navigate = useNavigate();

  const handleChange = (event) =>{
    event.persist()
    setInput((input)=>({
      ...input,
      [event.target.name]:event.target.value,
    }))
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    apiPost()
    console.log(input)
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
    </div>
  )
}

export default Login