import { Container } from './styles';

import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';


export function Portfolio() {
  
  return (
    <Container>
      <Header/>
      <div className="page">
      
        <h1>Meus projetos</h1>

        <main>
          <div className="card">
                <Link to="/projeto1"> 
                  <img src="troll.gif" alt="projeto 01"/>
                </Link>
            <h2>Clone da Netflix
              <p>Um clone de uma das maiores stream do mundo....</p>
              <span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>

          </div>

          <div className="card">
              <Link to="/projeto2"> 
                <img src="190703.jpg" alt="projeto 01"/>
               </Link>
            <h2>PROJETO 02<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
              <Link to="/projeto3"> 
                 <img src="190703.jpg" alt="projeto 01"/>
              </Link>
            <h2>PROJETO 03<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
              <Link to="/projeto4"> 
                <img src="190703.jpg" alt="projeto 01"/>
              </Link>

            <h2>PROJETO 04<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
             <Link to="/projeto5"> 
                 <img src="190703.jpg" alt="projeto 01"/>
             </Link>

            <h2>PROJETO 05<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <img src="190703.jpg" alt="projeto 01"/>
            <h2>PROJETO 06<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>
        </main>

      </div>

    </Container>
  )
}
