import { Container } from './styles';

import { Header } from '../../components/Header';

import { BsGithub } from 'react-icons/bs';

import { FaUpload } from 'react-icons/fa';
 
export function Portfolio() {
  
  return (
    <Container>
      <Header/>
      <div className="page">
      
      
        <h1>Projetos</h1>

        <main>
          <div className="card">
            <img src="190703.jpg" alt="projeto 01"/>
            <h2>PROJETO 01
              <a href="http://www.google.com">
                  <button><BsGithub/></button>
              </a>
              <a href="http://www.google.com">
                  <button><BsGithub/></button>
              </a>
              <span>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>ReactJs</button>
              </span>
            </h2>

          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" />
            <h2>PROJETO 02<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <img src="https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" />
            <h2>PROJETO 03<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <img src="https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" />
            <h2>PROJETO 04<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <img src="https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" />
            <h2>PROJETO 05<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>        
        
          <div className="card">
            <img src="https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" />
            <h2>PROJETO 06<span><button>HTML</button><button>CSS</button><button>JavaScript</button><button>ReactJs</button></span></h2>
          </div>
        </main>

      </div>

    </Container>
  )
}