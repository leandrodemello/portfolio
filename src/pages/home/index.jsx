import { Container } from './styles';

import { Link } from 'react-router-dom';

export function Home() {
  
  return (
    <Container>

      <div className="home">
        <img src="logo-header.png" alt="logo"/>
        <h1>Desenvolvendo produtos incríveis <br />através do Design e do Código.</h1>
        <p>Sou um Desenvolvedor Web Front-End com <br /> conhecimentos de UI/UX Design.</p>

        <button>
          <Link to="/about">
            Me conhecer
          </Link>
        </button>
      </div>

    </Container>
  )
}
