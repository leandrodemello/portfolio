import { Container } from "./styles";
 
export function EfectGalaxy () {
   return (
      <Container>
         <div>
            <video autoPlay muted loop>
            <source 
               src="../../bg-galaxia.mp4" 
               type="video/mp4"/>
               
            </video>
         </div>
      </Container>
   )
}
