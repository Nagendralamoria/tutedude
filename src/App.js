import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router, Link } from "react-router-dom";
import Referandearn from './Pages/Referandearn';
import Friendsrefered from './Pages/Friendsrefered';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';  
import Navbar from './Components/Navbar';
function App() {
  return (
        <>
         <Referandearn/>
          <Friendsrefered/> 
         
          </>
       
       
  );
}

export default App;
