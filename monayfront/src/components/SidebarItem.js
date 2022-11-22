import React from 'react'
// import { Container } from '../styles/SidebarItem'
import '../styles/SidebarItem.css'

const SidebarItem = ({ Icon, Text }) => {
  return (
    <div className='sidebarItem-Container'>
      <Icon />
      {Text}
    </div>
  )
}
// 1f7db3

export default SidebarItem