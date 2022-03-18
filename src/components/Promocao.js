import './Promocao.css'
import terno from '../img/terno.png'
function Promocao(){
    return(
        <div className="container-fluid background2">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7 mt-2">
                        <h2 className="condicao mt-4"> CONDIÇÃO IMPERDIVEL </h2>
                        <h3 className="compre"> Compre hoje e granta: </h3>
                        <ul className="descontos">
                            <li>- 12% de desconto e pagamento em até 3x sem juros;</li>
                            <li>- Até 10 meses para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;</li>
                            <li>- Condição muito especial por tempo limitado;</li>
                            <li>- Poder presentear alguém com uma roupa de alta costura, exclusiva.</li>
                        </ul>
                        <button className="gold-button mb-4"> Garanta essa condição especial! </button>
                    </div>
                    <div className="col-md-5">
                        <img src={terno} alt="" className="img-fluid img-terno"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Promocao