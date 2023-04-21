import { Container } from './styles';

import { Header } from '../../components/Header';
import { Form } from 'react-router-dom';

export function Contact() {
  
  return (
    <Container>
      <Header/>
        <h1>Contato</h1>
        <main>
          <input type="text" placeholder='Nome' required/>
          <input type="email" placeholder='Email' required/>
          <input type="text" placeholder='Digite aqui' minLength={100} required/>
          <button>Enviar</button>
        </main>
    </Container>
  )
};