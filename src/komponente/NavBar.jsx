import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <div className="topnav">
          <Link to="/">Pocetna</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/usluge">Usluge</Link>
          <Link to="/zainteresovan">Dodate usluge</Link>

        </div>
    </div>
  )
}

export default NavBar;