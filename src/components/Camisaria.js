import './Camisaria.css'
import camisaria from '../img/camisaria.png'
function Camisaria () {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={camisaria} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 borda-camisaria mt-4">
                    <h2 className="title-camisaria"> CAMISARIA </h2>
                    <p className="p-camisaria"> -CONFECCIONADAS ARTESANALMENTE</p>
                    <div className="listaCamisaria">
                        <ul className="ul-camisaria">
                            <li>100% algodão</li>
                            <li>Monograma</li>
                            <li>Slim</li>
                        </ul>
                        <ul className="ul-camisaria">
                            <li>Nacionais e importadas</li>
                            <li>Tradicionais e Esportivas</li>
                            <li>Casamentos</li>
                        </ul>
                    </div>
                    <button className="btn btn-primary first_button"> Quero um orçamento </button>
                </div>
            </div>
        </div>
    )
}

export default Camisaria   