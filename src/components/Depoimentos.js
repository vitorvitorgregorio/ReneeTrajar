import './Depoimentos.css'
import dp1 from '../img/dp1.png'
import dp2 from '../img/dp2.png'
import dp3 from '../img/dp3.png'
import dp4 from '../img/dp4.png'
function Depoimentos () {
    return (
        <section id="testimonial-slider" class="background-depoimentos py-5">
            <div className="container">
                <h2 className="text-center depoimento">Depoimentos</h2>
                <div id="carouselExampleDark" class="carousel  slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button gold" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="col-sm-10 mx-auto">
                        <div class="carousel-inner text-center text-white py-5">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="user-photo">
                                    <img src={dp4} className="img-fluid "  alt="testimonial slider"/>
                                </div>
                                <div class="slider-caption mt-3">
                                    <p class="fs-5 depoimento-p">“Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já tem uma história de décadas com o querido Renee. O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.”</p>
                                    <h3 className="depoimento-h3">William H. M. Garey</h3>
                                    <h4 className="depoimento-h4">Advogado  |   Nelson Garey Advogados Associados</h4>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="10000">
                                <div class="user-photo">
                                    <img src={dp1} class="img-fluid" alt="testimonial slider"/>
                                </div>
                                <div class="slider-caption mt-3">
                                    <p class="fs-5 depoimento-p">“Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta. Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.”</p>
                                    <h3 className="depoimento-h3">Domingos Orestes Chiomento</h3>
                                    <h4 className="depoimento-h4" >DOC Contabilidade Empresarial</h4>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="10000">
                                <div class="user-photo shadow">
                                    <img src={dp2} class="img-fluid" alt="testimonial slider"/>
                                </div>
                                <div class="slider-caption mt-3">
                                    <p class="fs-5 depoimento-p">“Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.”</p>
                                    <h3 className="depoimento-h3">José Mauro Marques</h3>
                                    <h4 className="depoimento-h4">Advogado</h4>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="10000">
                                <div class="user-photo shadow">
                                    <img src={dp3} class="img-fluid" alt="testimonial slider"/>
                                </div>
                                <div class="slider-caption mt-3">
                                    <p class="fs-5 depoimento-p">“Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”</p>
                                    <h3 className="depoimento-h3">Custódio Pereira</h3>
                                    <h4 className="depoimento-h4">Membro do CONSOCIAL - Conselho Superior
                                    de Responsabilidade Social da FIESP-SP</h4>
                                </div>
                            </div>
                    </div>
                </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next ms-4" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
                </div>
            </div>
</section>
    )
}

export default Depoimentos