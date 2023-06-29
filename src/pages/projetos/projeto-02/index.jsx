import { Container } from './styles';

import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { FiArrowLeft} from 'react-icons/fi';

import { Navbar } from '../../../components/Header2';

import { Link } from 'react-router-dom';

export function Projeto2() {
  
  return (
     <Container>
      <Navbar />
      <div className="page-pt">
         <div className="project">
             <h1>Portfólio Pessoal</h1>
             <p>Utilizei ReactJS para construir uma aplicação web sofisticada e dinâmica. 
              Com a ajuda do Styled Components, pude criar componentes estilizados de forma modular e 
              altamente personalizável, garantindo uma aparência consistente e agradável em todo o projeto.
              Para agilizar o desenvolvimento e melhorar a experiência de desenvolvedor, escolhi o Vite como 
              minha ferramenta de construção e empacotamento. 
              </p>
             <img src="portfolio.gif" alt="projeto 02"/>
             <span>Tech Stacks: Styled Components | ReactJS | Javascript | Vite | Figma</span>
            
            <div className='deploy'>
            <div className='icone-d'>
                <a href="https://github.com/leandrodemello/portfolio" target="_blank">
                    <FaGithub 
                     />
                  </a>
                  <p>repo</p>
            </div>

            <div className='icone-d'>
                <a href="https://leandromello.dev/" target="_blank">
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