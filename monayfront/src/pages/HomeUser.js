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
            <h2>a</h2>
        </div>
        </div>
        </>
    )

}
export default HomeUser;