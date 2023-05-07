import { Container } from "./styles";
import { FaReact } from 'react-icons/fa'
 
export function Footer () {
   return (
      <Container>
         <footer>
            <p>Esse portfólio foi feito com</p> 

            <span>
               <a href="https://react.dev/" title="ReactJS" target="_blank">
                 <FaReact/>
               </a>
            </span>

            
         </footer>
      </Container>
   )
}