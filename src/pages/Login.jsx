import React from "react";
import "./styles/Login.scss";
import { FormLogin } from "../components/FormLogin";

export const Login = () => {
  return (
    <div className="login_container">
        <div className="login_body">
            <h2>Seja bem vindo de volta!</h2>
            <h3>Insira suas credenciais</h3>
            <img src="/images/loginBG.png" alt="" />
        </div>
      <div className="inputForm">
        <FormLogin />
      </div>
    </div>
  );
};
