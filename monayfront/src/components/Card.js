import React, {useState} from 'react'
import '../styles/Card.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CardHeader from './CardHeader';

function Card() {
  const date = new Date()
  let day = date.getDay()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  console.log(day)
  if (day <= 9){
    day = '0' + day
  }
  let year18 = year - 18
  let currentDate = `${year18}-${month}-${day}`
  console.log(currentDate)

  const [input, setInput] = useState({})

  const apiPost = async () =>{   
    await fetch("http://127.0.0.1:8000/monay/usuario/?format=json",{
      // await fetch("http://jsonplaceholder.typicode.com/posts",{
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
    .then((json) => {console.log(json)
    })
}
const apiPost2 = async () =>{   
  await fetch("http://127.0.0.1:8000/monay/cliente/?format=json",{
    // await fetch("http://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify({
      nomeCliente: input.nomeCliente,
      email:input.senhaUsuario,
      dataNascimento: input.dataNascimento,
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
      apiPost2()
      console.log(input)
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
            min={currentDate}
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
            placeholder='Confirmar Email'/><br/>
            {/* <input 
            type='text' 
            id='genero' 
            name='genero' 
            placeholder='Genero'/><br/> */}
            <input
            type='text' 
            id='senhaUsuario' 
            name='senhaUsuario' 
            placeholder='senha'
            onChange={handleChange}/><br/>
            <button 
            type="submit" 
            value="Submit" 
            onClick={handleChange}> 
            Prosseguir <ArrowForwardIcon/></button>
          </form>
        </div>
    </div>
    </div>
    </section>  
    </>
  )
}

export default Card