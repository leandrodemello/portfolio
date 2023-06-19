import { Container } from './styles';

import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { FiArrowLeft} from 'react-icons/fi';

import { Navbar } from '../../../components/Header2';

import { Link } from 'react-router-dom';

export function Projeto3() {
  
  return (
     <Container>
      <Navbar />
      <div className="page-pt">
         <div className="project">
             <h1>Food Explorer</h1>
             <p>
             O último projeto desenvolvido no curso explorer da Rocketseat, um site fictício de um restaurante onde o usuário pode montar seu pedido com vários produtos, 
             realizar o pagamento e acompanhar o status do pedido que é atualizado por um usuário administrador, 
             que além de atualizar o pedido também pode cadastrar um novo prato, atualizar e excluir qualquer prato.</p>
             <img src="food-exp.gif" alt="projeto 03"/>
             <span>Tech Stacks: ReactJS | Styled-Components | JavaScript | SQLite | NodeJS   </span>
            
            <div className='deploy'>
            <div className='icone-d'>
                <a href="https://github.com/leandrodemello/food-explorer-front" target="_blank">
                    <FaGithub 
                     />
                  </a>
                  <p>repo</p>
            </div>

            <div className='icone-d'>
                <a href="https://foodexplorermcz.netlify.app/" target="_blank">
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