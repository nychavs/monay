import React from 'react'
// import { Container, Content } from '../styles/Sidebar.js'
import '../styles/Sidebar.css'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from './SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <div className='sidebar-container' sidebar={active}>
    {/* <Container sidebar={active}> */}
      <FaTimes onClick={closeSidebar} />  
      <div className='sidebar-content'>
      {/* <Content> */}
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaIdCardAlt} Text="Meu Perfil" />
        <SidebarItem Icon={FaChartBar} Text="Transações" />
        <SidebarItem Icon={FaUserAlt} Text="Pagamentos" />
        <SidebarItem Icon={FaEnvelope} Text="Extrato" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Meus Contatos" />
        <SidebarItem Icon={FaRegFileAlt} Text="Empréstimos" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      {/* </Content> */}
      </div>
    {/* </Container> */}
    </div>
  )
}

export default Sidebar