import { Container } from './styles';

import { Navbar } from '../../components/Header2';
import { Footer } from '../../components/Footer';

import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdAccessTime  } from "react-icons/md";
import { BsCheckCircleFill  } from "react-icons/bs";
import { BsCircleFill  } from "react-icons/bs";

import { Link } from 'react-router-dom';


export function Portfolio() {
  
  return (
    <Container>
      <Navbar />
      <div className="page">

          <h1 className='my-project'>Projetos</h1>
        <main>
        <div className="card-end">
              <span>
                Mais em breve...  
              </span>
              <p>
                Me siga no Github e Linkedin para ficar por dentro!  
              </p>
              <div className='icon-port'>
                <a href="https://github.com/leandrodemello" target="_blank">
                    <button><FaGithub /> <p> GitHub </p></button>
                  </a>
                <a href="https://www.linkedin.com/in/leandro-mello-47a24823b/" target="_blank">
                    <button><FaLinkedin/> <p>Linkedin</p></button>
                 </a>
            </div>

          </div>
        <div className="card">
              <Link to="/projeto2"> 
                 <img src="225237.jpg" alt="projeto 02"/>
              </Link>
            <h2>Portfólio Pessoal
              <p>Utilizei ReactJS para construir uma...</p>
              <span>
                <button>ReactJS</button>
                <button>JavaScript</button>
                <button>Vite</button> 
                <button>Figma</button>
              </span>
              <p className="temp">
              <span className='bolaAmarela'><BsCircleFill /></span> Trabalhando nisso  <MdAccessTime /> 02/06/2023
              </p>
            </h2>
          </div> 

          <div className="card">
              <Link to="/projeto3"> 
                 <img src="190428.jpg" alt="projeto 03"/>
              </Link>
            <h2>Food Explorer
              <p>Um menu interativo para um restaura...</p>
              <span>
                <button>ReactJS</button>
                <button>JavaScript</button>
                <button>SQLite</button> 
                <button>NodeJS</button>
              </span>
              <p className="temp">
              <span className='bolaVerde'><BsCheckCircleFill /></span> Finalizado  <MdAccessTime /> 18/05/2023
              </p>
            </h2>
          </div>        
        
          <div className="card">
              <Link to="/projeto4"> 
                <img src="204607.jpg" alt="projeto 04"/>
              </Link>

            <h2>Portfolio Explorer
              <p>Uma SPA com ReactJS que foi desenvol...</p>
              <span>
                <button>ReactJS</button>
                <button>JavaScript</button>
                <button>SQLite</button> 
                <button>NodeJS</button>
              </span>
              <p className="temp">
              <span className='bolaVerde'><BsCheckCircleFill /></span> Finalizado  <MdAccessTime /> 30/04/2023
              </p>
            </h2>
          </div>        
        
          <div className="card">
             <Link to="/projeto5"> 
                 <img src="190136.jpg" alt="projeto 05"/>
             </Link>

            <h2>Social Link 
              <p>Esse projeto permite a integração de...</p>

              <span>
                <button>JavaScript</button>
                <button>CSS</button>
                <button>HTML</button>
                <button>Figma</button>
              </span>
              <p className="temp">
              <span className='bolaVerde'><BsCheckCircleFill /></span> Finalizado  <MdAccessTime /> 21/11/2022
              </p>
            </h2>
          </div>        

        </main>
      </div>

      <Footer />

    </Container>
  )
}

