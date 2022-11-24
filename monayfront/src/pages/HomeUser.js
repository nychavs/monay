import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import { FaBars } from 'react-icons/fa'
import '../styles/HomeUser.css'

function HomeUser(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar  = () => setSidebar(!sidebar)
 
    return (
        <>
        <div className='homeuser-container'>
        <div className="homeUser-svg">
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar}/>}
        </div>
        <div className='homeuser-content'>
            <div id='home'>Home</div>
            <div id='perfil'>Meu Perfil</div>
            <div id='cartoes'>Meus Cartões</div>
            <div id='transacoes'>Transações</div>
            <div id='pagamentos'>Pagamentos</div>
            <div id='emprestimos'>Empréstimos</div>
            <div id='extrato'>Extrato</div>
            <div id='contatos'>Meus Contatos</div>
        </div>
        </div>
        </>
    )

}
export default HomeUser;