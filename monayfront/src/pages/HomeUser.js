import React, {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import { FaBars } from 'react-icons/fa'
import '../styles/HomeUser.css'
import Doubts from '../components/Doubts'

function HomeUser(props){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar  = () => setSidebar(!sidebar)
    return (
        <>
        <div className='homeuser-container'>
        <div className="homeUser-svg">
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar}/>}
        </div>
        </div>
        </>
    )

}
export default HomeUser;