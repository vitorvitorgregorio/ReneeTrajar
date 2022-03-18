import './Form.css'
function Form() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h3 className="form-title">Telefones</h3>
                    <p className="form-p">+55 (11) 3088-0757</p>
                    <h3 className="form-title">E-mail</h3>
                    <p className="form-p"> renee@reneetrajar.com.br</p>
                    <div className="button-group">
                        <h3 className="form-title">Atendimento pesonalizado</h3>
                        <button className="outline-button mb-4"> Clique aqui! </button>
                    </div>
                </div>
                <div className="col-md-7">
                    <h2 className="contato"> Contato </h2>
                    <hr className="linha-form"/>
                    <form>
                        <input type="text"  placeholder="Nome" className="form-control mt-4" required/>
                        <input type="email" placeholder="E-mail" className="form-control mt-4" required/>
                        <textarea placeholder="Mensagem" className="form-control mt-4" required rows="4"/>
                        <div class="d-grid mt-3 mb-4">
                        <button className="btn btn-primary first_button mb-4" type="submit"> Enviar Mensagem </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form