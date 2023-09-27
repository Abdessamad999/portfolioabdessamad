import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menup from './components/Menup';
import Menud from './components/Menude';
import Projet from './components/Projet';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Header/>} />
    //   <Route path='/' element={<Menup/>} />
      
    // </Routes>
    // </BrowserRouter>
    <div><Header/><Menup/><Menud/> <Projet/> <Contact /><Footer/> </div>
   
  );
}

export default App;
