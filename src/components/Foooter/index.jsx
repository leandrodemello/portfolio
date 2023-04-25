import { Container } from "./styles";
import { FaReact } from 'react-icons/fa'
 
export function Foooter () {
   return (
      <Container>
         <footer>
            <p>Esse portfólio foi feito com</p> <span><FaReact/></span>
         </footer>
      </Container>
   )
}