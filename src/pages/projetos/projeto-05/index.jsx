import { Container } from './styles';

import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { FiArrowLeft} from 'react-icons/fi';

import { Navbar } from '../../../components/Header2';

import { Link } from 'react-router-dom';

export function Projeto5() {
  
  return (
     <Container>
      <Navbar />
      <div className="page-pt">
         <div className="project">
             <h1>Social Link</h1>
             <p>Esse projeto foi desenvolvido durante a Maratona Explorer 2.0 da Rocketseat, 
              ele permite a integração de todas as redes sociais em um único local. <br></br>
              Modo noturno, com o recurso o monitor ou tablet exibe cores quentes, que não agridem os olhos. </p>
             <img src="link.gif" alt="projeto-5"/>
             <span>Tech Stacks: JavaScript | CSS | HTML | Figma </span>
            
            <div className='deploy'>
            <div className='icone-d'>
                <a href="https://github.com/leandrodemello/link-unico-leandro" target="_blank">
                    <FaGithub 
                     />
                  </a>
                  <p>repo</p>
            </div>

            <div className='icone-d'>
                <a href="https://leandrodemello.github.io/link-unico-leandro/" target="_blank">
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