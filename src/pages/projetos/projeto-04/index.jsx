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
             <h1>Focus Timer Pomodoro</h1>
             <p>Esse é o Focus Timer Pomodoro, um cronômetro feito para te ajudar nos estudos 
              usando a técnica Pomodoro. 
              Com esse projeto foi possível manipular o navegador utilizando a DOM, funções calbacks, 
              recursividade, Crean Code, ES6 Modules, injeção de dependências e muito mais...</p>
             <img src="focus-time.gif" alt="projeto 04"/>
             <span>Tech Stack: JavaScript | CSS | HTML</span>
            
            <div className='deploy'>
            <div className='icone-d'>
                <a href="https://github.com/leandrodemello/timer-pomodoro" target="_blank">
                    <FaGithub 
                     />
                  </a>
                  <p>repo</p>
            </div>

            <div className='icone-d'>
                <a href="https://timerpomodoro2023.netlify.app/" target="_blank">
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