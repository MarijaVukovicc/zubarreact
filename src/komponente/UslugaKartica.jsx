import React from 'react'

function UslugaKartica({usluga, dodajZain}) {
  return (
    <div >
       
        <div className="card">
           
            <h1>{usluga.naziv}</h1>
            <p className="price">{usluga.cena}</p>
            
            <p><button onClick={()=>dodajZain(usluga.id)}>Zainteresovan/-a sam</button></p>
            </div>
        
    </div>
  )
}

export default UslugaKartica;