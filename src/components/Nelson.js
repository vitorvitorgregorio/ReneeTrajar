
import background2 from '../img/background2.png'
import nelson from '../img/nelson.svg'
import Nelson2 from '../img/Nelson2.png'
import './Nelson.css'

function Nelson(){
    return (
        <div className="container-fluid nelson-back background">
            <div className="row">
                <div className="col-md-7 text-center text">
                    <h2 className="serviço"> “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em todos os detalhes, desde a  costura ao caimento. O Renee tem uma equipe de mestre!” </h2>
                    <h3 className="nelson">Nelson Garey</h3>
                    <h4 className="nome-nelson"> Advogado  |  Nelson Garey Advogados Associados </h4>
                </div>
                <div className="col-md-2 col-6">
                    <img src={Nelson2} alt="" className="img-fluid img-1"/>
                </div>
                <div className="col-md-3 col-6">
                    <img src={nelson} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Nelson