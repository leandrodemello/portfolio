/* eslint-disable import/prefer-default-export */
import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Portfolio } from "../pages/portfolio";
import { Contact } from "../pages/contact";
import { Projeto1 } from "../pages/projetos/projeto-01"
import { Projeto2 } from "../pages/projetos/projeto-02"
import { Projeto3 } from "../pages/projetos/projeto-03"
import { Projeto4 } from "../pages/projetos/projeto-04"
import { Projeto5 } from "../pages/projetos/projeto-05"

export function AppRoutes(){
   return(
      <Routes>
         <Route path="/" element={ <Home />} />
         <Route path="/about" element={ <About />} />
         <Route path="/portfolio" element={ <Portfolio />} />
         <Route path="/contact" element={ <Contact />} />
         <Route path="/projeto1" element={ <Projeto1 />} />
         <Route path="/projeto2" element={ <Projeto2 />} />
         <Route path="/projeto3" element={ <Projeto3 />} />
         <Route path="/projeto4" element={ <Projeto4 />} />
         <Route path="/projeto5" element={ <Projeto5 />} />
      </Routes>
   )
}