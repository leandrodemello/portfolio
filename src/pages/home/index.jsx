import { Container } from './styles';

export function Home() {
  
  return (
    <Container>

      <div>
        <img src="foto-profile.png" alt="foto-de-perfil" width={100} height={100} />
        <h1>Desenvolvendo produtos incríveis <br></br>através do Design e do Código</h1>
        <p>Desenvolvedor Web Front-End </p>
        <button>Me conhecer</button>
      </div>
    </Container>
  )
}