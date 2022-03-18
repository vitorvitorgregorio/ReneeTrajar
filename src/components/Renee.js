import renee from "../img/renee.png"
import "../styles/Global.css"
import "./Renee.css"
import aspas from "../img/aspas.png"

function Renee (){
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 mt-4 text-center">
                    <h2 className="text-center show-sm titulo"> Renee Trajar </h2>
                    <img src={renee} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <h2 className="text-lg-start show-lg titulo"> Renee Trajar </h2>
                    <hr className="linha"/>
                    <p className="experiencia">Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados. </p>

                    <p className="experiencia">Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.</p>
                    <h3 className="objetivo"> “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação <img src={aspas} alt="" className="img-fluid aspas"/> ao usar nossos produtos, aliado a um relacionamento franco e honesto, <br/> valorizando o ser humano.” </h3>
                    <h4 className="text-end nome">Renee Trajar</h4>
                    <button className="btn btn-primary first_button"> Agende uma visita ! </button>
                </div>
            </div>
        </div>
    )
}
export default Renee