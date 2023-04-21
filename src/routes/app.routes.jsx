import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Portfolio } from "../pages/portfolio";
import { Contact } from "../pages/contact";

export function AppRoutes(){
   return(
      <Routes>
         <Route path="/" element={ <Home />} />
         <Route path="/about" element={ <About />} />
         <Route path="/portfolio" element={ <Portfolio />} />
         <Route path="/contact" element={ <Contact />} />
      </Routes>
   )
}