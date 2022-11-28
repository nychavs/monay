import React from 'react'
// import { Container, Content } from '../styles/Sidebar.js'
import '../styles/Sidebar.css'
import { NavLink } from 'react-router-dom';
import {RiAccountCircleLine} from 'react-icons/ri'
import {MdPayment} from 'react-icons/md'
import {IoIosContacts} from 'react-icons/io'
import {IoExitOutline} from 'react-icons/io5'
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

  return (
    <div className='sidebar-container' sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <div className='sidebar-content'>
            <SidebarItem Icon={FaHome} Text="Home"/>
            <SidebarItem Icon={RiAccountCircleLine} Text="Meu Perfil" />
        <NavLink to='/#teste'>
            <SidebarItem Icon={MdPayment} Text="Meus Cartões" />
        </NavLink>
            <SidebarItem Icon={BiTransferAlt} Text="Transações" />
            <SidebarItem Icon={AiOutlineBarcode} Text="Pagamentos"/>
            <SidebarItem Icon={GiReceiveMoney} Text="Empréstimos" />
            <SidebarItem Icon={FaRegFileAlt} Text="Extrato" />
            <SidebarItem Icon={IoIosContacts} Text="Meus Contatos" />
            <NavLink to='/#teste3'>
              <SidebarItem Icon={IoExitOutline} Text="Sair" />
            </NavLink>
       </div>
    </div>
  )
}

export default Sidebar