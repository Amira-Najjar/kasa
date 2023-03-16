import React from 'react';
import { Route,Routes } from "react-router-dom";
import  Home  from '../Pages/Home/Home';
import  APropos  from '../Pages/APropos/APropos';
import FicheLogement from '../Pages/FicheLogement/FicheLogement'
import NotFound from '../Pages/NotFound/NotFound';
 function RouteApp() {
  return (
   
          <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/apropos" element={<APropos />} />
              <Route path="/ficheLogement/:id" element={<FicheLogement id={""} />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
     
  
  );
}
export default RouteApp





