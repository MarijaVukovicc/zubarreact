import React from 'react'

function UslugaKartica({ usluga, dodajZain, mod, izbaciZain}) {
  return (
    <div >

      <div className="card">

        <h1>{usluga.naziv}</h1>
        <p className="price">{usluga.cena}</p>
        {mod === 1 ?
          <p><button onClick={() => dodajZain(usluga.id)}>Zainteresovan/-a sam</button></p>
          :
          <p><button onClick={() => izbaciZain(usluga.id)}>Nisam vise zainteresovan/-a</button></p>
        }

      </div>

    </div>
  )
}

export default UslugaKartica;