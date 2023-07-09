import { Link } from 'react-router-dom';
import { Container } from './styles';


export function Home() {
  
  return (
    <Container>

      <div className="home">
        <img src="logo-header.png" alt="logo"/>
        <h1>Desenvolvendo produtos incríveis <br/> através do Design e do Código.</h1>
        <p> Desenvolvedor Web Front-End com conhecimentos de UI/UX Design, <br /> trazendo o melhor dos dois mundos.</p>

        <button>
          <Link to="/about">
            Me conhecer
          </Link>
        </button>
      </div>

    </Container>
  )
}
