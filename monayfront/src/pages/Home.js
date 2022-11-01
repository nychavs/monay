import React, {useEffect} from 'react'
import BannerImage from '../assets/cortada2.png';
import { Link, useLocation  } from 'react-router-dom';
import '../styles/Home.css';
import Cat from '../assets/cat.jpg';
import Doubts from '../components/Doubts'
import Card from '../components/Card'
import CardHeader from '../components/CardHeader.js';
// import navbar from '../components/Navbar';

function Home() {
// let colorTheme = localStorage.getItem('dark');
// console.log(colorTheme);
const { pathname, hash, key } = useLocation();

useEffect(() => {
  // if not a hash link, scroll to top
  if (hash === '') {
    window.scrollTo(0, 0);
  }
  // else scroll to id
  else {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }
}, [pathname, hash, key]); // do this on route change

  return (
    <>
    <section className='home' id='home'>
    <div className='home' style={{ backgroundImage: `url(${BannerImage}`}}>
      <div className="banner_info">
        <div className='cardHeaderPosition' >
          <CardHeader></CardHeader>
          </div>
        <div className='headerContainer'>
          <h1>Conta grátis, 100% digital e <br></br>com serviços ilimitados</h1>
        </div>
      </div>
    </div>
    </section>

    <div className='advantagesContainer' > 
      <div className='advantagesTitle '>
        <h1>Vantagens que você terá ao usar o Monay!</h1>
      </div>

    <div className='advantages-cards-Container'>
      <div className='card-container'>
        <div className='card-image'>
          <img src={Cat} alt="gatinho" />
        </div>
        <div className='card-texts'>
          <p className='title'>Opções de crédito para você.</p>
          <p>Descomplicamos o seu crédito com um jeito de simular e contratar taxas que você pode pagar.</p>
        </div>
      </div>
        
      <div className='card-container'>
        <div className='card-image'>
          <img src={Cat} alt="gatinho" />
        </div>
        <div className='card-texts'>
        <p className='title'>CDB e Fundos de Investimento</p>
        <p>Opções seguras de investimentos que rendem mais que a poupança.</p>
        </div>
      </div>

      <div className='card-container'>
        <div className='card-image'>
          <img src={Cat} alt="gatinho" />
        </div>
        <div className='card-texts'>
          <p className='title'>Indique amigos</p>
          <p>Indique seus amigos para o next e aproveitem juntos todas as vantagens de um banco 100% digital e gratuito</p>
        </div>
      </div>
    </div>
      <div className='button'>
        <Link to="#cadastro">Quero ser Monay também!</Link>
      </div>
    </div>
    
    <section className='services' id='services'>
    <div className='services-container'>
      <h1>Serviços do Monay exclusivos pra você!</h1>

      <div className='card-colums'>
      <div className='card-service-image'>
        <img src={Cat} alt="gatinho" />
        <img src={Cat} alt="gatinho" />
      </div>
      <div className='card-all-cards'>
      <div className='card-service-container'>
        <h2>Cartões Monay</h2>
        <p>Cartões sem anuidade, pagamentos digitais e mimos exclusivos.</p>
      </div>
      
      <div className='card-service-container'>
        <h2>Investimentos</h2>
        <p>Investimentos que combinam com todos os tipos de perfil.</p>
      </div>
      
      <div className='card-service-container'>
        <h2>Seguros</h2>
        <p>Seguros para proteger o que conquistou e cuidar do seu bem-estar.</p>
      </div>
      
      <div className='card-service-container'>
        <h2>Pix</h2>
        <p>Um novo jeito de fazer pagamentos e transferências.</p>
      </div>
      </div>
      </div>
        </div>
        </section>
        <Doubts></Doubts>
        <Card></Card>
     </>
  )
}

export default Home