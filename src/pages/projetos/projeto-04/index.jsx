import { Container } from './styles';

import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { FiArrowLeft} from 'react-icons/fi';

import { Header } from '../../../components/Header';

import { Link } from 'react-router-dom';

export function Projeto4() {
  
  return (
     <Container>
      <Header />
      <div className="page-pt">
         <div className="project">
             <h1>Portfolio Explorer</h1>
             <p>Uma SPA que desenvolvi para documentar 
              meu progresso como Desenvolvedor Web, ao longo de meus estudos no programa 
              'Explorer' da Rocketseat. Usei o conceito do Linktree como minha inspiração 
              para construir este site.</p>
             <img src="exp-celde.gif" alt="projeto 04"/>
             <span>Tech Stacks: ReactJS | JavaScript | Styled-Components </span>
            
            <div className='deploy'>
            <div className='icone-d'>
                <a href="https://github.com/leandrodemello/explorer-projects" target="_blank">
                    <FaGithub 
                     />
                  </a>
                  <p>repo</p>
            </div>

            <div className='icone-d'>
                <a href="https://desafios-explorer.netlify.app/" target="_blank">
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