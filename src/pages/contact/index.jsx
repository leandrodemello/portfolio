import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { Container } from './styles';
import { Imput } from '../../components/Imput';
import { Textarea } from '../../components/Textarea';

import { Navbar } from '../../components/Header2';

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate();

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_name: name,
      message,
      email
    }

    emailjs.send("service_pemksdk", "template_ds828xv", templateParams, "PzHoeLG1yXqd_QHAo")
    .then(() => {
      alert("E-mail enviado com sucesso!");
      navigate("/");
      
    }, (err) => {
       console.log("Erro", err)
    })
    
  }
  
  return (
    <Container>
      <Navbar />
        <div className="container">
          <h1 className='title'>Contato</h1>

          <form className="form" onSubmit={sendEmail}>

            <Imput
             className="input"
             placeholder="Nome"
             onChange={(e) => setName(e.target.value)}
             value={name}
            />

            <Imput
             className="input"
             type="email"
             placeholder="E-mail"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
            />

            <Textarea
             className="textarea"
             type="text"
             placeholder="Mensagem..."
             onChange={(e) => setMessage(e.target.value)}
             value={message}
            />

            <input className='button' type="submit" value="Enviar" />
          </form>

          <div className='icones'>
            <div className='item'>
                <a href="https://github.com/leandrodemello" title="GitHub" target="_blank" rel="noreferrer">
                    <FaGithub 
                     />
                  </a>
            </div>

            <div className='item'>
                <a href="https://www.linkedin.com/in/leandro-mello-47a24823b/" title="Linkedin" target="_blank" rel="noreferrer">
                    <FaLinkedin
                    />
                 </a>
            </div>
          
          </div>

        </div>

    </Container>
  )

};
