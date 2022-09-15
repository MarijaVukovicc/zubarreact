import React from 'react';
import './styleKontakt.css';


function Kontakt() {
  return (
    <div>
      		<header>KONTAKTIRAJTE NAS</header>

            <form id="form" className="topBefore">
                    
                    <input id="name" type="text" placeholder="NAME"/>
                    <input id="email" type="text" placeholder="E-MAIL"/>
                    <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
            <input id="submit" type="submit" value="GO!"/>
            
            </form>
    </div>
  );
}

export default Kontakt;
