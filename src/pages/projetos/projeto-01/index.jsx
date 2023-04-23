import { Container } from './styles';

import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { Header } from '../../../components/Header';


export function Projeto1() {
  
  return (
     <Container>
      <Header />
      <div className="page-pt">
         <div className="project">
             <h1>Clone da Netflix</h1>
             <h2>Um clone de uma das maiores stream do mundo.</h2>
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


      </div>

    </Container>
  )
}