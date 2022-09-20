import React from 'react'
import UslugaKartica from './UslugaKartica';
import {BsSearch} from "react-icons/bs"
import { useState } from "react";

function Usluge({ usluge, dodajZain }) {

    const [searchTerm, setSearchTerm] = useState('');
    function handleInput(e) {
        setSearchTerm(e.target.value.toLowerCase());
        console.log(e.target.value);
    }

    return (
        <div>
            <input className='search' type="text" placeholder='Pretraga...' onChange={handleInput}></input>  <BsSearch />
            <div className='sveUsluge'>

                {searchTerm === '' ?
                    usluge.map((u) => (<UslugaKartica key={u.id} usluga={u} dodajZain={dodajZain} mod={1} ></UslugaKartica>))
                    :
                    usluge.filter((u) => (u.naziv.toLowerCase().includes(searchTerm)))
                        .map((u) => (<UslugaKartica key={u.id} usluga={u} dodajZain={dodajZain} mod={1} ></UslugaKartica>))
                }
            </div>
        </div>
    )
}

export default Usluge;