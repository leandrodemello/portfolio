import { Container } from './styles';

import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { FiArrowLeft} from 'react-icons/fi';

import { Header } from '../../../components/Header';

import { Link } from 'react-router-dom';



export function Projeto1() {
  
  return (
     <Container>
      <Header />
      <div className="page-pt">
         <div className="project">
             <h1>Clone da Netflix</h1>
             <p>Um clone de uma das maiores stream do mundo.</p>
             <img src="troll.gif" alt="projeto 01"/>
             <span>Tech Stack: ReactJS | JavaScript | CSS | HTML</span>
            
            <div className='deploy'>
            <div className='icone-d'>
                <a href="https://github.com/leandrodemello" target="_blank">
                    <FaGithub 
                     />
                  </a>
                  <p>repo</p>
            </div>

            <div className='icone-d'>
                <a href="https://www.linkedin.com/in/leandro-mello-47a24823b/" target="_blank">
                    <BsGlobe2
                    />
                 </a>
                 <p>live</p>
            </div>
           </div>
        </div>

        <div className="return">
          <Link to="/portfolio">

            <p><FiArrowLeft />Voltar </p>

          </Link>
        </div>


      </div>



    </Container>
  )
}