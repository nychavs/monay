import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { Container, Content } from '../styles/Sidebar.js'
import '../styles/Sidebar.css'
import {RiAccountCircleLine} from 'react-icons/ri'
import {MdPayment} from 'react-icons/md'
import {IoIosContacts} from 'react-icons/io'
import {BiTransferAlt} from 'react-icons/bi'
import {GiReceiveMoney} from 'react-icons/gi'
import {AiOutlineBarcode } from 'react-icons/ai'
import SidebarItem from './SidebarItem'
import { 
  FaTimes, 
  FaHome, 
  FaRegFileAlt,
} from 'react-icons/fa'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  const navigate = useNavigate()
  function navigateTo(pagina){
    console.log(pagina)
    navigate(pagina)
  }
  const navigation = () =>{
    navigate('http://localhost:3000/#home')
  }

  function oi(){
    console.log("OI")
  }

  return (
    <div className='sidebar-container' sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <div className='sidebar-content'>
            <SidebarItem Icon={FaHome} Text="Home"/>
            <SidebarItem Icon={RiAccountCircleLine} Text="Meu Perfil" />
            <SidebarItem Icon={MdPayment} Text="Meus Cartões" />
            <SidebarItem Icon={BiTransferAlt} Text="Transações" />
            <SidebarItem Icon={AiOutlineBarcode} Text="Pagamentos"/>
            <SidebarItem Icon={GiReceiveMoney} Text="Empréstimos" />
            <SidebarItem Icon={FaRegFileAlt} Text="Extrato" />
            <SidebarItem Icon={IoIosContacts} Text="Meus Contatos" />
       </div>
    </div>
  )
}

export default Sidebar