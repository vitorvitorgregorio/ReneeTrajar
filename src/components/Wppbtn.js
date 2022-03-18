import React from 'react'
import './Wppbtn.css'
import whats from '../img/whats.svg'

function Wppbtn(){
    return(
        <div className="whats">
            <a href="/" target="_blank"><img src={whats} alt="whatsapp"/></a>
        </div>
    )
}
export default Wppbtn