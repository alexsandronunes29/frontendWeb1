import React, { Fragment } from "react";




function Register() {
  
    return (
     <Fragment>
    
        <section>
          <div>
            <h2>Cadastrar</h2>

            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Nome</label>
                <input type="text" className="form-input" placeholder="Insira seu nome" />
                <label className="form-label">Sobrenome</label>
                <input type="text" className="form-input" placeholder="Insira seu sobrenome" />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-input" placeholder="Insira o seu e-mail" />
                <label className="form-label">Confirmar E-mail</label>
                <input type="text" className="form-input" placeholder="Repita o seu e-mail" />
                
              </div>
              <div className="form-group">
                <label className="form-label">Celular(opcional)</label>
                <input type="phone" className="form-input" placeholder="Insira o número com o DDD" />
              </div>
             
             
            </form>
          </div>
        </section>
        <section className="block">
          <div className="wrapper">
           
         
            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Crie uma nova senha</label>
                
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira uma nova senha" />
              </div>
              <div className="form-group form-icon">
                
                <i className="icon icon-locker" />
                <label className="form-label">Repita a senha criada</label>
                 <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira a nova senha criada" />
              </div>
              <label className="form-checkbox">
                <input type="checkbox" />
                Concordo com os termos de uso
              </label>
              <button type="button" className="btn-default btn-light">
                Finalizar cadastro
              </button>
              <button type="button" className="btn-radius">
                Já possui uma conta guiaSmart
              </button>
            </form>
          </div>
        </section>
      </Fragment>
    );
  
}
export default Register;