import agulha from '../img/agulha.svg'
import medalha from '../img/medalha.svg'
import maquina from '../img/maquina.svg'

function Qualidade(){
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-md-4">
                    <img src={maquina} alt="" />
                    <h2>QUALIDADE</h2>
                    <p>Camisaria e Alfaiataria 100% artesanal.</p>
                </div>
                <div className="col-md-4">
                    <img src={medalha} alt="" />
                    <h2>CONFIANÇA</h2>
                    <p>Atendimento personalizado no escritório ou residência.</p>
                </div>
                <div className="col-md-4">
                    <img src={agulha} alt="" />
                    <h2 >EXPERIÊNCIA</h2>
                    <p>Tradição e modernidade proporcionando elegância.</p>
                </div>
            </div>
        </div>
    )
}
export default Qualidade