import { Container } from './styles';

import { Header } from '../../components/Header';
import { Form } from 'react-router-dom';
import { useState } from 'react';

import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { BsFileEarmarkArrowDownFill} from "react-icons/bs";

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
        <div className="container">
          <h1 className='title'>Contato</h1>

          <form className="form" onSubmit={() => {}}>
            <input
             className="input"
             type="text"
             placeholder="Nome"
             onChange={(e) => {setEmail(e.target.value)}}
             value={name}
            />

            <input
             className="input"
             type="text"
             placeholder="E-mail"
             onChange={(e) => {setName(e.target.value)}}
             value={email}
            />

            <textarea
             className="textarea"
             type="text"
             placeholder="Mensagem..."
             onChange={(e) => {setMessage(e.target.value)}}
             value={message}
            />

            <input className='button' type="submit" value="Enviar" />
          </form>
        </div>
        
        <div className='icones'>
            <div className='item'>
                <a href="https://github.com/leandrodemello" target="_blank">
                    <FaGithub 
                     />
                  </a>
            </div>

            <div className='item'>
                <a href="https://www.linkedin.com/in/leandro-mello-47a24823b/" target="_blank">
                    <FaLinkedin
                    />
                 </a>
            </div>

            <div className='item'>
                <a href="http://www.google.com" target="_blank">
                    <BsFileEarmarkArrowDownFill
                    />
                </a>
            </div>
          
        </div>




    </Container>
  )
};