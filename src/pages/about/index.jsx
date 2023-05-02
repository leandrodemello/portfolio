import { Container } from './styles';

import { Header } from '../../components/Header';

import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { BsFileEarmarkArrowDownFill} from "react-icons/bs";


export function About() {
  
  return (
    <Container>

      <Header/>
        
        <div className="about">
          <h1>Me chamo Leandro Mello</h1>
            <p>Sou um Desenvolvedor Web Front-End apaixonado pelo que faço,
            e desde que comecei tenho estado em constante aprendizado, sempre me colocando a 
            disposição para aprender uma nova tecnologia ou ferramenta, porque acredito que na 
            programação não existe um limite, sempre há um próximo nível.</p>

          <div className='container'>
            <div className='item'>
                <a href="https://github.com/leandrodemello" title="GitHub" target="_blank">
                    <FaGithub 
                     />
                  </a>
            </div>
            

            <div className='item'>
                <a href="https://www.linkedin.com/in/leandro-mello-47a24823b/" title="Linkedin" target="_blank">
                    <FaLinkedin
                    />
                 </a>
            </div>

            <div className='item'>
                <a href="http://www.google.com" title="Curriculo" target="_blank">
                    <BsFileEarmarkArrowDownFill
                    />
                </a>
            </div>
          
          </div>

        </div>
          
    </Container>
    
  );
}