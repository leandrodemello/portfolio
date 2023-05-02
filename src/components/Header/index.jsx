import { Container, Profile, Navega } from "./styles";

import { Link } from "react-router-dom";

export function Header(){
  return (
    <Container>
      <Profile>
        <div className="nome">
        <img src="logo.png" alt="logo"/>


        </div>
      </Profile>

      <Navega>
         <nav>
            <ul>

               <li>
                  <Link to="/">
                    Home
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

