import React, { useState } from "react";
import { navigate } from "@reach/router";
import { useTranslation } from "react-i18next";
import * as userService from "@rafael.audy/habit-geek-utils/services/userService";
import UserForm from "./UserForm";

const Login = ({ saveSession }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validityChecked, setValidityChecked] = useState(false);
  const { t } = useTranslation();

  const login = event => {
    event.preventDefault();
    setValidityChecked(true);

    if (event.target.checkValidity()) {
      userService
        .login(email, password)
        .then(saveSession)
        .catch();
    }
  };

  return (
    <div className="mobile-size-container">
      <form
        className={`${validityChecked ? "was-validated" : ""}`}
        onSubmit={login}
        noValidate
      >
        <h2>{t("login-title")}</h2>

        <UserForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        ></UserForm>

        <hr className="mb-4" />
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          {t("login-login")}
        </button>
      </form>
      <div>
        {t("login-sign-up-label")}
        <button
          onClick={() => navigate("/habit-geek/signup")}
          className="px-0 btn btn-link"
        >
          {t("login-sign-up")}
        </button>
      </div>
      <div>
        {t("login-forgot-password-label")}
        <button
          onClick={() => navigate("/habit-geek/forgotpassword")}
          className="px-0 btn btn-link"
        >
          {t("login-forgot-password")}
        </button>
      </div>
    </div>
  );
};

export default Login;
