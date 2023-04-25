import { Container } from './styles';

import { Header } from '../../components/Header';
import { Foooter } from '../../components/Foooter';

import { FaGithub, FaLinkedin  } from "react-icons/fa";

import { Link } from 'react-router-dom';


export function Portfolio() {
  
  return (
    <Container>
      <Header/>
      <div className="page">
      
        <h1>Meus projetos</h1>

        <main>
          <div className="card">
                <Link to="/projeto1"> 
                  <img src="troll.gif" alt="projeto 01"/>
                </Link>
            <h2>Clone da Netflix
              <p>Um clone de uma das maiores stream do mundo....</p>
              <span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>

          </div>

          <div className="card">
              <Link to="/projeto2"> 
                <img src="190703.jpg" alt="projeto 01"/>
               </Link>
            <h2>PROJETO 02<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
              <Link to="/projeto3"> 
                 <img src="190703.jpg" alt="projeto 01"/>
              </Link>
            <h2>PROJETO 03<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
              <Link to="/projeto4"> 
                <img src="190703.jpg" alt="projeto 01"/>
              </Link>

            <h2>PROJETO 04<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
             <Link to="/projeto5"> 
                 <img src="190703.jpg" alt="projeto 01"/>
             </Link>

            <h2>PROJETO 05<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
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
        </main>

      </div>

      <Foooter />


    </Container>
  )
}

