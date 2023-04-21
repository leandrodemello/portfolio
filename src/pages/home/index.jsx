import { Container } from './styles';

import { Link } from 'react-router-dom';

export function Home() {
  
  return (
    <Container>

      <div className="home">
        <img src="foto-profile.png" alt="foto-de-perfil" width={100} height={100} />
        <h1>Desenvolvendo produtos incríveis <br></br>através do Design e do Código</h1>
        <p>Desenvolvedor Web Front-End </p>
        <button>
          
          <Link to="/about">
            Me conhecer
          </Link>

        </button>
      </div>

    </Container>
  )
}