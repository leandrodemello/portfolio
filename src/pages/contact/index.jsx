import { Container } from './styles';

import { Header } from '../../components/Header';
import { Form } from 'react-router-dom';
import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(){
    alert("")
  }
  
  return (
    <Container>
      <Header/>
        <h1 className='title'>Contato</h1>
        <div className="container">

          <form className="form" onSubmit={() => {}}>
            <input
             className="input"
             type="text"
             placeholder="Digite seu nome"
             onChange={(e) => {setEmail(e.target.value)}}
             value={name}
            />

            <input
             className="input"
             type="email"
             placeholder="Digite seu email"
             onChange={(e) => {setName(e.target.value)}}
             value={email}
            />

            <textarea
             className="textarea"
             type="text"
             placeholder="Digite sua mensagem..."
             onChange={(e) => {setMessage(e.target.value)}}
             value={message}
            />
          </form>
        </div>

        <input className='button' type="submit" value="Enviar" />
    </Container>
  )
};