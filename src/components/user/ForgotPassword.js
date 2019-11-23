import React, { useState, Fragment } from "react";
import { useTranslation } from "react-i18next";
import * as userService from "@rafael.audy/habit-geek-utils/services/userService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validityChecked, setValidityChecked] = useState(false);
  const { t } = useTranslation();

  const forgotPassword = event => {
    event.preventDefault();
    setValidityChecked(true);

    if (event.target.checkValidity()) {
      userService
        .forgotPassword(email)
        .then(() => setMessage(t("forgot-password-email-sent-message")))
        .catch(() => setMessage(t("forgot-password-email-not-sent")));
    }
  };

  return (
    <div className="mobile-size-container">
      <form
        className={`${validityChecked ? "was-validated" : ""}`}
        onSubmit={forgotPassword}
        noValidate
      >
        <h2>{t("forgot-password-title")}</h2>

        {message ? (
          <Fragment>
            <div>{message}</div>

            {t("forgot-password-try-again-label")}
            <button
              onClick={() => setMessage(undefined)}
              className="px-0 btn btn-link"
            >
              {t("forgot-password-try-again")}
            </button>
          </Fragment>
        ) : (
          <div className="mb-3">
            <label htmlFor="user-form-email">{t("user-form-email")}</label>
            <input
              id="user-form-email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            ></input>
            <div className="invalid-feedback">
              {t("user-form-email-validation")}
            </div>
            <hr className="mb-4" />
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              {t("forgot-password-forgot-password")}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
