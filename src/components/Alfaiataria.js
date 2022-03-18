import './Alfaiataria.css'
import alfaiataria from '../img/alfaiataria.png'
function Alfaiataria () {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 order-md-2">
                    <img src={alfaiataria} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 borda-alfaiataria order-md-1 mt-4">
                    <h2 className="title-camisaria"> ALFAIATARIA </h2>
                    <p className="p-camisaria"> -Totalmente feito a mão sob medida</p>
                    <div className="listaCamisaria">
                        <ul className="ul-camisaria">
                            <li>Fio super 120 e 130</li>
                            <li>Lã fria Autraliano</li>
                            <li>Botões Importados</li>
                        </ul>
                        <ul className="ul-camisaria">
                            <li>Ternos e Calças</li>
                            <li>Paletós e Smokings</li>
                            <li>Sociais e Exportivos</li>
                        </ul>
                    </div>
                    <button className="btn btn-primary first_button"> Quero um orçamento </button>
                </div>
            </div>
        </div>
    )
}

export default Alfaiataria