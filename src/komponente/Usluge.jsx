import React from 'react'
import UslugaKartica from './UslugaKartica';

function Usluge({ usluge, dodajZain, izbaciZain }) {



    return (
        <div className='sveUsluge'>
            {usluge.map((u) => (<UslugaKartica key={u.id} usluga={u} dodajZain={dodajZain} mod={1} ></UslugaKartica>))}
        </div>
    )

}

export default Usluge;