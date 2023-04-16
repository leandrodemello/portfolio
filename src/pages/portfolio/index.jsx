import { Container } from './styles';

import { Header } from '../../components/Header';

export function Portfolio() {
  
  return (
    <Container>
      <Header/>
      <div className="page">
      
      
        <h1>Projetos</h1>

        <main>
          <div className="card">
              <a href="http://www.google.com"target="_blank"><img src="troll.gif" alt="projeto 01"/></a>
            <h2>Realidade Americana
              <p>Projeto criado para edição de vídeos e audio para...</p>
              <span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>

          </div>

          <div className="card">
            <a href="http://www.google.com"target="_blank"><img src="190703.jpg" alt="projeto 01"/></a>
            <h2>PROJETO 02<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <a href="http://www.google.com"target="_blank"><img src="190703.jpg" alt="projeto 01"/></a>
            <h2>PROJETO 03<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <a href="http://www.google.com"target="_blank"><img src="190703.jpg" alt="projeto 01"/></a>
            <h2>PROJETO 04<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <a href="http://www.google.com"target="_blank"><img src="190703.jpg" alt="projeto 01"/></a>
            <h2>PROJETO 05<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <a href="http://www.google.com"><img src="190703.jpg" alt="projeto 01"/></a>
            <h2>PROJETO 06<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>
        </main>

      </div>

    </Container>
  )
}