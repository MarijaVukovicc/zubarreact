import './App.css';
import Footer from './komponente/Footer';
import NavBar from './komponente/NavBar';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kontakt from './komponente/Kontakt';
import Usluge from './komponente/Usluge';
import { useState } from "react";

function App() {
  const [brojZaineresovan, setBrZain] = useState(0);
 
  const [usluge] = useState([
  
  {
    id:1,
    naziv:"Ciscenje korena",
    cena: 1000,
    zainteresovan:0

  },
  {
    id:2,
    naziv:"Popravka zuba",
    cena: 2000,
    zainteresovan:0
  },
  {
    id:3,
    naziv:"Snimak zuba",
    cena: 2500,
    zainteresovan:0

  }, 
  {
    id:4,
    naziv:"Vadjenje zuba",
    cena: 3000,
    zainteresovan:0

  }, 
  {
    id:5,
    naziv:"Ortopan",
    cena: 800,
    zainteresovan:0

  }, 
  {
    id:6,
    naziv:"Anestezija",
    cena: 500,
    zainteresovan:0

  }, 
  {
    id:7,
    naziv:"Beljenje zuba",
    cena: 15000,
    zainteresovan:0

  }, 
  {
    id:8,
    naziv:"Nadogradnja",
    cena: 4000,
    zainteresovan:0

  }, 
  {
    id:9,
    naziv:"Stavljanje mosta",
    cena: 800,
    zainteresovan:0

  }, 
  {
    id:10,
    naziv:"Pregled",
    cena: 800,
    zainteresovan:0
  }, 
]);


  return (

    
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>} />
            <Route path="/kontakt" element={<Kontakt></Kontakt>} />
            <Route path="/usluge" element={<Usluge usluge={usluge}></Usluge>} />
            
        </Routes>
      
        <Footer></Footer>
     </BrowserRouter>
    </div>
  
  );
}

export default App;