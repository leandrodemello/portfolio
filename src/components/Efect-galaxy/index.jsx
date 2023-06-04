import { Container } from "./styles";
 
export function EfectGalaxy () {
   return (
      <Container>
         <div className="bg">
            <video autoPlay loop>
            <source 
               src="../../bg-galaxia.mp4" 
               type="video/mp4"/>
               
            </video>
         </div>
      </Container>
   )
}
