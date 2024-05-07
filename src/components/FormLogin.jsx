import React from "react";
import "./styles/FormLogin.scss";
import { NavLink } from "react-router-dom";

export const FormLogin = () => {
  return (
    <div className="formLogin_container">
      <div className="formLogin_body">
        <h1>Login</h1>
        <form>
          <div className="m-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailInput"
              placeholder="Usuário"
            />
            <i class="bi bi-person"></i>
          </div>
          <div className="m-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
            <i class="bi bi-lock"></i>
          </div>
          <div className="m-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Lembrar credenciais
            </label>
            <NavLink>Esqueceu a senha?</NavLink>
          </div>
          <button type="submit" className="btn btn-secondary">
            ENTRAR
          </button>
        </form>
      </div>
      <p className="newUser">
        Ainda não possui? <NavLink>Adquira agora!</NavLink>
      </p>
    </div>
  );
};
