import React from 'react'

function UslugaKartica({usluga}) {
  return (
    <div >
       
        <div className="card">
           
            <h1>{usluga.naziv}</h1>
            <p className="price">{usluga.cena}</p>
            
            <p><button>Zainteresovan/-a sam</button></p>
            </div>
        
    </div>
  )
}

export default UslugaKartica;