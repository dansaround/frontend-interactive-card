import "./FormSide.css";
import { useState } from "react";

function FormSide({ updateCardContent }) {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDateMonth, setExpiryDateMonth] = useState("");
  const [expiryDateYear, setExpiryDateYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");

  //   FUNCIONES PARA CAMBIAR EL ESTADO DE LOS INPUTS

  const handleCardholderNameChange = (e) => {
    setCardholderName(e.target.value);
    updateCardContent(e);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
    updateCardContent(e);
    handleCardNumberValidation(e.target.value);
  };

  const handleExpiryDateMonthChange = (e) => {
    setExpiryDateMonth(e.target.value);
    updateCardContent(e);
  };

  const handleExpiryDateYearChange = (e) => {
    setExpiryDateYear(e.target.value);
    updateCardContent(e);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
    updateCardContent(e);
  };

  const handleCardNumberValidation = (cardNumberValue) => {
    if (cardNumberValue.length < 16) {
      setCardNumberError("error");
    } else {
      setCardNumberError("success");
    }
  };

  //   FUNCIONES PARA VALIDAR LOS INPUTS

  const validateCardholderName = () => {
    if (cardholderName.length < 3) {
      return "error";
    } else {
      return "success";
    }
  };

  const validateCardNumber = () => {
    if (cardNumber.length < 16) {
      return "error";
    } else {
      return "success";
    }
  };

  const validateExpiryDateMonth = () => {
    if (expiryDateMonth.length < 2) {
      return "error";
    } else {
      return "success";
    }
  };

  const validateExpiryDateYear = () => {
    if (expiryDateYear.length < 2) {
      return "error";
    } else {
      return "success";
    }
  };

  const validateCvc = () => {
    if (cvc.length < 3) {
      return "error";
    } else {
      return "success";
    }
  };

  //   FUNCION PARA EL BOTON SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cardholder Name: ", cardholderName);
    console.log("Card Number: ", cardNumber);
    console.log("Expiry Date Month: ", expiryDateMonth);
    console.log("Expiry Date Year: ", expiryDateYear);
    console.log("CVC: ", cvc);
    // AQUI SE PUEDE HACER LLAMADA A UNA API O ENVIAR LOS DATOS A OTRO COMPONENTE
  };

  return (
    <section className="form-side">
      <form onSubmit={handleSubmit}>
        <div className="cardholder-name-container">
          <label htmlFor="cardholder-name">Cardholder Name:</label>
          <input
            type="text"
            id="cardholder-name"
            name="cardholderName"
            value={cardholderName}
            placeholder="e.g. Jane Appleseed"
            onChange={handleCardholderNameChange}
            className={validateCardholderName()}
            required
          />
        </div>

        <div className="card-number-container">
          <label htmlFor="card-number">Card Number:</label>
          <input
            type="number"
            id="card-number"
            name="cardNumber"
            value={cardNumber}
            placeholder="e.g. 1234 5678 9012 3456"
            onChange={handleCardNumberChange}
            className={
              cardNumberError === "error"
                ? "cardNumberError"
                : cardNumberError === "success"
                ? "cardNumberSuccess"
                : ""
            }
            required
          />
        </div>

        <div className="exp-cvc-container">
          <div className="expiry-date-container">
            <label htmlFor="expiry-date">Exp. Date (MM/YY)</label>
            <input
              type="number"
              id="expiry-date-month"
              name="expiryDateMonth"
              value={expiryDateMonth}
              placeholder="MM"
              onChange={handleExpiryDateMonthChange}
              className={validateExpiryDateMonth()}
              required
            />
            <input
              type="number"
              id="expiry-date-year"
              name="expiryDateYear"
              value={expiryDateYear}
              placeholder="YY"
              onChange={handleExpiryDateYearChange}
              className={validateExpiryDateYear()}
              required
            />
          </div>
          <div className="cvc-container">
            <label htmlFor="cvc">CVC:</label>
            <input
              type="number"
              id="cvc"
              name="cvc"
              value={cvc}
              placeholder="e.g. 123"
              onChange={handleCvcChange}
              className={validateCvc()}
              required
            />
          </div>
        </div>
        <div className="button-area">
          <button type="submit">Confirm</button>
        </div>
      </form>
    </section>
  );
}
(";");

export default FormSide;
