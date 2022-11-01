import React, {useState} from 'react';
import Logo from '../assets/nay.png';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import {HashLink as Link} from "react-router-hash-link";
import LogoWhite from '../assets/nay (1).png';
import useLocalStorage from 'use-local-storage';


function Navbar(){
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    // const useForceUpdate = () => 
    // { let [value, setState] = useState(true); 
    //     return () => setState(!value); }

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
        // useForceUpdate()
    }   
    
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    
    const [fix, setFix] = useState(false);
    function setFixed(){
        if (window.scrollY >= 800){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)

    // console.log(window.location.pathname)
    // const [wind, setWind] = useState(false)
    // const windverify = () =>{
    //     if ('/homeuser' == window.location.pathname)
    //     setWind(true)
    // }

    return(
        <div className={ fix ? 'navbar fixed' : 'navbar'}  data-theme={theme}>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={theme === 'dark' ? Logo : LogoWhite} alt='logo' />
                <div className="hiddenLinks">
                    <Link to="/#home">Página Inicial</Link>
                    <Link to='/#services'>Serviços</Link>
                    <Link to="/sobre">Sobre nós</Link>
                    <Link to="/#doubts">Dúvidas</Link>
                    <Link to="/#cadastro">Quero Meu Cartão</Link>
                    <Link to="/login">Login</Link>
            </div>
            <div className='rightSide'>
                <Link to="/#home">Página Inicial</Link>
                <Link to='/#services'>Serviços</Link>
                <Link to="/sobre">Sobre nós</Link>
                <Link to="/#doubts">Dúvidas</Link>
                <Link to="/#cadastro">Quero Meu Cartão</Link>
                <Link to="/homeuser">Login</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
                <div className='theme-toggle'>
                    <p> Dark mode </p>
                    <i onClick={switchTheme} class="fas fa-toggle-on"></i>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Navbar