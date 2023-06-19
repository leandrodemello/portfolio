import { Container, Profile, Navega } from "./styles";

import { Link } from "react-router-dom";

export function Header(){

  return (
    <Container>
      <Profile>

        <div className="nome">
         <Link to="/">
            <img src="logoLeandro.png" alt="Logo-Leandro"/>
         </Link>
        </div>
        
      </Profile>

      <Navega>
         
         <nav>
            <ul>
                <li>
                  <Link to="/">
                    Início
                  </Link>
                </li>               
                <li>
                  <Link to="/about">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    Contato
                 </Link>
                </li>
            </ul>
         </nav>

      </Navega>

    </Container>
  );
}

