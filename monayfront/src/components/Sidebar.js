import React from 'react'
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

//   const navigate = useNavigate()
//   const navigateTo = (pagina) => {
//     navigate(pagina)
//   }
//   const navigation = () =>{
//     navigate('http://localhost:3000/#home')
//   }

  return (
    <div className='sidebar-container' sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <div className='sidebar-content'>
        <Link to={'/'}>
            <SidebarItem Icon={FaHome} Text="Home" />
        </Link>
        <Link to={''}>
            <SidebarItem Icon={RiAccountCircleLine} Text="Meu Perfil" />
        </Link>
        <Link to={''}>
            <SidebarItem Icon={MdPayment} Text="Meus Cartões" />
        </Link>
        <Link to={''}>
            <SidebarItem Icon={BiTransferAlt} Text="Transações" />
        </Link>
        <Link to={''}>
            <SidebarItem Icon={AiOutlineBarcode} Text="Pagamentos"/>
        </Link>
        <Link to={''}>
            <SidebarItem Icon={GiReceiveMoney} Text="Empréstimos" />
        </Link>
        <Link to={''}>
            <SidebarItem Icon={FaRegFileAlt} Text="Extrato" />
        </Link>
        <Link to={''}>
            <SidebarItem Icon={IoIosContacts} Text="Meus Contatos" />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar