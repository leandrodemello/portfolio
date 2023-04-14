import { Container } from './styles';

import { Header } from '../../components/Header';

import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { BsFileEarmarkArrowDownFill} from "react-icons/bs";

//import { Link } from "react-router-dom";




export function About() {
  
  return (
    <Container>
      <Header/>
        
        <div className='texto'>
          <h1>Me chamo Leandro</h1>

          <p>Sou um desenvolvedor web Front-End apaixonado pelo que faço,
          e desde que comecei tenho estado em constante aprendizado, sempre me colocando a 
          disposição para aprender uma nova tecnologia ou ferramenta, porque acredito que na 
          programação não existe um limite, sempre há um próximo nível.</p>

          <div className='container'>
            <FaGithub className='icons'/>
            <FaLinkedin className='icons'/>
            <BsFileEarmarkArrowDownFill className='icons'/>

          </div>
        </div>
          
    </Container>
    
  );
}