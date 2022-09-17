import React from 'react'
import UslugaKartica from './UslugaKartica';

function Zainteresovan({zainteresovan, brojZain}) {
  return (
    <div className='sveUsluge'>

        {brojZain===0 ? 
        
        <>
        <h1>Niste iskazali interesovanje ni za jednu uslugu.</h1>
        </> 
        
        : 
        
        <>
       
          {zainteresovan
            .filter((z)=>z.zainteresovan===1)
            .map((z)=>(<UslugaKartica key={z.id} zainteresovan={z}></UslugaKartica>))}
            
        </>
        }
       
        
    </div>
  )
}

export default Zainteresovan;