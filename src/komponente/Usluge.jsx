import React from 'react'
import UslugaKartica from './UslugaKartica';

function Usluge({usluge, dodajZain}){


    return(
        <div className='sveUsluge'>
            {usluge.map((u)=>(<UslugaKartica key={u.id} usluga = {u} dodajZain={dodajZain}></UslugaKartica>))}
        </div>
    )

}

export default Usluge;