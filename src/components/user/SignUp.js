import React, { useState } from "react";
import { navigate } from "@reach/router";
import { useTranslation } from "react-i18next";
import * as userService from "@rafael.audy/habit-geek-utils/services/userService";
import UserForm from "./UserForm";

const SignUp = ({ jwt, saveSession }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validityChecked, setValidityChecked] = useState(false);
  const { t } = useTranslation();

  if (jwt) {
    navigate("/habit-geek/profile");
  }

  const signUp = event => {
    event.preventDefault();
    setValidityChecked(true);

    if (event.target.checkValidity()) {
      userService
        .signUp(email, password)
        .then(saveSession)
        .catch(() => {});
    }
  };

  return (
    <div className="mobile-size-container">
      <form
        className={`${validityChecked ? "was-validated" : ""}`}
        onSubmit={signUp}
        noValidate
      >
        <h2>{t("sign-up-title")}</h2>

        <UserForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        ></UserForm>

        <hr className="mb-4" />
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          {t("sign-up-sign-up")}
        </button>
      </form>
      <div>
        {t("sign-up-go-to-login-label")}
        <button
          onClick={() => navigate("/habit-geek/login")}
          className="px-0 btn btn-link"
        >
          {t("sign-up-go-to-login")}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
