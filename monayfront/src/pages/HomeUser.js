import React, {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import { FaBars } from 'react-icons/fa'
import '../styles/HomeUser.css'

function HomeUser(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar  = () => setSidebar(!sidebar)
    const [data, setData] = useState([])
    const [input, setInput] = useState({})
    const idUsuario = JSON.parse(localStorage.getItem('idUsuario'))
  //  const date = new Date()

    const apiGet = () =>{   
        fetch("http://127.0.0.1:8000/monay/conta/" + idUsuario + "/?format=json")
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

      const apiPost = async () =>{   
        await fetch("http://127.0.0.1:8000/monay/transacao/?format=json",{
          method: "POST",
          body: JSON.stringify({
            valorTransacao: input.valorTransacao,
            dataTransacao: '01/02/2004',
            destinatario: input.destinatario,
            remetente: '111111'
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
        const id = 1
        apiPost(id)
        console.log(input)
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
                    <h1>Minha conta</h1>
                    <p>meu saldo: </p>
                    {/* <p>Meu saldo: {data.map((item) => (
                    <li>{item.saldoConta}</li>
                ))}</p> */}
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
                placeholder='Conta de quem receberá'
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
        <section id='pagamentos'>
            <div className='pagamentos'>
            <h1>Pagamentos</h1>
            </div>
        </section>
        </div>
        </div>
        </>
    )

}
export default HomeUser;