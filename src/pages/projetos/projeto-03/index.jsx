import { Container } from './styles';

import { Header } from '../../../components/Header';

import { Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";



export function Projeto3() {
  
  return (
     <Container>
      <Header />

         <div className="project">
             <h1>Clone da Netflix 03</h1>
             <p>Um clone de uma das maiores stream do mundo.</p>
             <img src="troll.gif" alt="projeto 01"/>
         </div>
         <div className="tech">
             <span>Tech Stack:</span>
               <p>ReactJS | JavaScript | CSS | HTML</p>

         </div>

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

    </Container>
  )
}