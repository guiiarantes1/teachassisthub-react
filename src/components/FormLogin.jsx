import React, { useState } from "react";
import "./styles/FormLogin.scss";
import { NavLink } from "react-router-dom";

export const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };
  return (
    <div className="formLogin_container">
      <div className="formLogin_body">
        <h1>Login</h1>
        <form>
          <div className="m-3">
          <i className="bi bi-person"></i>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailInput"
              placeholder="Usuário"
            />
      
          </div>
          <div className="m-3">
          <i className="bi bi-lock"></i>
           
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
             <i
              className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          <div className="m-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Lembrar credenciais
            </label>
            <NavLink>Esqueceu a senha?</NavLink>
          </div>
          <NavLink id="submitButton" to={"/menu"} type="submit" className="btn btn-secondary">
            ENTRAR
          </NavLink>
        </form>
      </div>
      <p className="newUser">
        Ainda não possui? <NavLink>Adquira agora!</NavLink>
      </p>
    </div>
  );
};
