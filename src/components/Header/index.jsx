import { Container, Profile, Navega } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile>
        <div className="nome">
          <span>Leandro Mello</span>
        </div>
      </Profile>

      <Navega>
         <nav>
            <ul>
               <li>Sobre</li>
               <li>Projetos</li>
               <li>Contato</li>
            </ul>
         </nav>

      </Navega>

    </Container>
  );
}