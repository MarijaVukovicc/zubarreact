import React from 'react'
import UslugaKartica from './UslugaKartica';

function Zainteresovan({zainteresovan, brojZain, izbaciZain}) {
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
            
            .map((z)=>(<UslugaKartica key={z.id} usluga={z} mod={0} izbaciZain={izbaciZain}></UslugaKartica>))}
            
        </>
        }
       
        
    </div>
  )
}

export default Zainteresovan;