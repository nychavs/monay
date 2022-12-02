import React, {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import { FaBars } from 'react-icons/fa'
import '../styles/HomeUser.css'

function HomeUser(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar  = () => setSidebar(!sidebar)
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [input, setInput] = useState({})
    const idUsuario = JSON.parse(localStorage.getItem('idUsuario'))
  //  const date = new Date()

  // FAZER O BGL DE TRANSFERIR COM CONTA E NAO ID
     const apiGet = () =>{   
        fetch("http://127.0.0.1:8000/monay/conta/" + idUsuario + "/?format=json")
        .then((response) => 
        response.json())
        .then((json) => {
        console.log(json)
        setData(json)
        console.log(data)
        })
      }
      const apiGetDestinatario = () =>{   
        fetch("http://127.0.0.1:8000/monay/conta/?format=json")
        .then((response) => 
        response.json())
        .then((json) => {
        console.log(json)
        setData2(json)
        console.log(data2)
        })
      }
      const apiPost = async () =>{   
        await fetch("http://127.0.0.1:8000/monay/transacao/?format=json",{
          method: "POST",
          body: JSON.stringify({
            valorTransacao: input.valorTransacao,
            dataTransacao: '2004-02-15',
            destinatario: input.destinatario,
            remetente: idUsuario
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
        // if (validate()){
          console.log('handle submit')
          const id = 1
          validate()
          // apiPost(id)
          console.log(input)
        // }
      }
      useEffect(()=>{
        apiGet();
        apiGetDestinatario();
      }, [])
      
      const validate = () =>{
        console.log(data2.length)
        console.log(data2)
        for (let i=0; i < data2.length; i++){
          console.log("teste")
          console.log(data2[i].numeroConta)
          if (input.destinatario === (data2[i].numeroConta)){
            console.log(data2[i].id)
          }
          // alert(data2[input.destinatario].id)
        } 
      }
   
    return (
        <>
        <div className='homeuser-container'>
        <div className="homeUser-svg">
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar}/>}
        </div>
        <div className='homeuser-operations'>
            <section id='conta'>
                <div>
                    <p>Como é bom te ter aqui!</p>
                    <p>Seu saldo:<li>{data.saldoConta}</li></p>
                    <p>professor, use os IDs de 0 a 4 para fazer as transferencias, não consegui terminar a conversão de conta para id ainda, pode ver isso em monayfront--src--pages--homeUser, linha 77</p>
                    <p>seu id: {idUsuario}, transfira para outro ID</p>
                </div>
            </section>
        <section id='transferencia'>
            <div className='transferencia'>
            <h1>Transferencias</h1>
                <form onSubmit={handleSubmit} id='transferencia-forms'>
                <input
                type='text'
                id='conta'
                name='destinatario'
                placeholder='Conta/id de quem receberá'
                onChange={handleChange}
                ></input>
                <input
                type='number'
                id='valor'
                name='valorTransacao'
                placeholder='Digite o valor'
                onChange={handleChange}
                ></input>
                <button 
                type="submit" 
                value="Submit" 
                onClick={handleChange}> 
                Concluido
                </button>
            </form>
            </div>
        </section>
        </div>
        </div>
        </>
    )

}
export default HomeUser;