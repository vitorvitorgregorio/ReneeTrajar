import './Footer.css'
import logo2 from '../img/logo2.svg'
import top from '../img/top.svg'
import React, {useState, useEffect} from 'react'
function Footer (){

    const voltarTopo = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <footer>
            <div className="container border-gold">
                <div className="row">
                    <div className="col-md-5 mt-4">
                        <img src={logo2} alt="" className="img-fluid mt-4"/>
                        <h4 className="mt-4 cnpj"> CNPJ:04.487.685/0001-01 </h4>
                    </div>
                    <div className="col-md-5 text-center mt-4">
                        <p className="mt-4"> Copyright: 2021 © Renee Trajar - Todos os direitos reservados. </p>
                        <p className="mt-4"> Feito com ❤️ por <a href="http://vitorgregorio.digital" target="_blank">Vitor Gregorio</a> </p>
                    </div>
                    <div className="col-md-2 text-end mt-4">
                        <button className="btn back-top" onClick={voltarTopo}> <img src={top} alt="" /> </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer