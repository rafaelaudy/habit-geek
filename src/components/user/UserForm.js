import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const UserForm = ({ email, password, setEmail, setPassword }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
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
      </div>
      <div className="mb-3">
        <label htmlFor="user-form-password">{t("user-form-password")}</label>
        <input
          id="user-form-password"
          className="form-control"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        ></input>
        <div className="invalid-feedback">
          {t("user-form-password-validation")}
        </div>
      </div>
    </Fragment>
  );
};

export default UserForm;
