import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SaveHabit = ({
  id,
  name: defaultName = "",
  type: defaultType = "",
  frequency: defaultFrequency = "",
  saveHabit,
  deleteHabit,
  onGoBack
}) => {
  const [name, setName] = useState(defaultName);
  const [type, setType] = useState(defaultType);
  const [frequency, setFrequency] = useState(defaultFrequency);
  const [validityChecked, setValidityChecked] = useState(false);
  const { t } = useTranslation();

  const saveAndClose = event => {
    event.preventDefault();
    setValidityChecked(true);

    if (event.target.checkValidity()) {
      saveHabit(id, name, type, frequency);
      onGoBack();
    }
  };

  const deleteHabitAndClose = () => {
    deleteHabit(id);
    onGoBack();
  };

  const typeOptions = t("save-habit-type-options", {
    returnObjects: true
  });

  return (
    <form
      onSubmit={saveAndClose}
      className={`mobile-size-container ${
        validityChecked ? "was-validated" : ""
      }`}
      noValidate
    >
      <h2>{t("save-habit-title")}</h2>
      <div className="mb-3">
        <label htmlFor="new-habit-name">{t("save-habit-name")}</label>
        <input
          id="new-habit-name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        ></input>
        <div className="invalid-feedback">
          {t("save-habit-name-validation")}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="new-habit-type">{t("save-habit-type")}</label>
        <select
          id="new-habit-type"
          className="form-control"
          value={type}
          onChange={e => setType(e.target.value)}
          onBlur={e => setType(e.target.value)}
          required
        >
          <option value=""></option>
          {typeOptions.map(({ key, label }) => (
            <option key={`save-habit-type-option-${key}`} value={label}>
              {label}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">
          {t("save-habit-type-validation")}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="new-habit-frequency">{t("save-habit-frequency")}</label>
        <select
          id="new-habit-frequency"
          className="form-control"
          value={frequency}
          onChange={e => setFrequency(e.target.value)}
          onBlur={e => setFrequency(e.target.value)}
          required
        >
          <option value=""></option>
          <option value="1">1x</option>
          <option value="2">2x</option>
          <option value="3">3x</option>
          <option value="4">4x</option>
          <option value="5">5x</option>
          <option value="6">6x</option>
          <option value="7">7x</option>
        </select>
        <div className="invalid-feedback">
          {t("save-habit-frequency-validation")}
        </div>
      </div>
      <hr className="mb-4" />
      <button className="btn btn-primary btn-lg btn-block">
        {t("save-habit-save")}
      </button>
      {id ? (
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={deleteHabitAndClose}
        >
          {t("save-habit-delete")}
        </button>
      ) : null}
      <button
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={onGoBack}
      >
        {t("save-habit-cancel")}
      </button>
    </form>
  );
};

export default SaveHabit;
