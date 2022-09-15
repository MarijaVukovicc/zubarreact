import React from 'react'
import UslugaKartica from './UslugaKartica';

function Usluge({usluge}){


    return(
        <div className='sveUsluge'>
            {usluge.map((u)=>(<UslugaKartica key={u.id} usluga = {u}></UslugaKartica>))}

        </div>
    )

}

export default Usluge;