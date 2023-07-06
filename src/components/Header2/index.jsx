import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

import { Container } from "./styles";

import { Link } from "react-router-dom";

export function Navbar(){
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <Container >
      <Link to="/">
      <img src="logoLeandro.png" alt="Logo-Leandro" />
      </Link>
      <header>

        <nav ref={navRef}>
          <Link to="/">Início</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/portfolio">Projetos</Link>
          <Link to="/contact">Contato</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
           <FaTimes />
           </button>
        </nav>
           <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
           </button>

      </header>

    </Container>
  );
}

