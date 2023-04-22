import { Container } from './styles';


export function Imput({ value, ...rest}){
   return(
     <Container> 
      
      <input {...rest}/>

     </Container>
   )
 }
 