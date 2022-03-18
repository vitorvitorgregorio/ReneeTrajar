
import logo1 from "../img/logo1.svg";
import logo2 from "../img/logo2.svg"
import menu from '../img/menu.svg'
import React, {useState, useEffect} from 'react'
import './Nav.css'
import Textonav from "./Textonav"

function Nav() {
    const [navbar, setNavbar] = useState(false)
    
    
    const trocarCor = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
            
        }
        else {
            setNavbar(false)
            
        }
    }
    window.addEventListener('scroll', trocarCor)

    return (
        <header>
                    <nav className={navbar ? 'navbar active navbar-expand-lg fixed-top' : 'navbar navbar-expand-lg fixed-top'}>
                        <div className="container-fluid menu">
                            <a href="#" className="navbar-brand"> <img src={logo1} alt="" className="logo"/> </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <button className="btn btn-outline-secondary">
                                    <i className="bi bi-list"></i>
                                </button>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">EMPRESA</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">CAMISARIA</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">ALFAIATARIA</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">DEPOIMENTOS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">CONTATO</a>
                                    </li>
                                    <ul className="contact">
                                    <li className="title"> TELEFONES </li>
                                    <li className="informacao"> +55 (11) 3088-0757 </li>
                                    <li className="title"> E-MAIL </li>
                                    <li className="informacao"> renee@reneetrajar.com.br </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </nav>
                <div className="fixe">
                <h2>Elegante é ter um </h2>
                <h3> ALFAIATE </h3>
                <h4> Para chamar de seu.</h4>
                <p>COMPRE HOJE, PAGUE EM ATÉ 3X <br/>  COM 12% DE DESCONTO E TENHA <br/>
                10 MESES PARA CONFECCIONAR!</p>
                </div>
                <button className="outline-button-dark"> FAÇA JÁ UM ORÇAMENTO ! </button>
        </header>
    )
}

export default Nav