import React, {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import { FaBars } from 'react-icons/fa'
import '../styles/HomeUser.css'
import Doubts from '../components/Doubts'

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
        <div className='homeuser-operations'>
        <section id='transferencia'>
            <div className='transferencia'>
            <h1>Trasnferencias</h1>
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