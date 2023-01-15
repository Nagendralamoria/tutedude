import logo from './logo.svg';
import './App.css';
import React from 'react';
import Referandearn from './Pages/Referandearn';
import Friendsrefered from './Pages/Friendsrefered';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
        <>
         {/* <Referandearn/>
          <Friendsrefered/> */}
      
      <Routes>
        <Route path="/" element={<Referandearn/>} />
        <Route path="/friendsrefer" element={<Friendsrefered/>} />
      </Routes>

         
          </>
       
       
  );
}

export default App;
