
import React from 'react';
import { BrowserRouter , Route,Routes } from "react-router-dom";
import  Home  from './components/Home';
import  APropos  from './components/APropos';
import NotFound from './components/NotFound';
export default function App() {
  return (
   
      <BrowserRouter>
      <div >
          <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/apropos" element={<APropos />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </div>  
      </BrowserRouter>
  
  );
}






