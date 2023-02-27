import "./FormSide.css";
import { useState } from "react";

function FormSide({ cardContent, setCardContent }) {
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber")
      e.target.value = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    if (name === "expiryDateMonth" || name === "expiryDateYear")
      e.target.value = value
        .toString()
        .replace(/[^0-9]/g, "")
        .substring(0, 2);
    if (name === "expiryDateMonth" && value > 12) e.target.value = "12";
    if (name === "cvc")
      e.target.value = value.replace(/[^0-9]/g, "").substring(0, 3);

    setCardContent({ ...cardContent, [name]: e.target.value });
  };

  const handleError = (target, message = "Error", type = "add") => {
    const buttonPrimary = document.querySelector(".button--primary");
    buttonPrimary.classList.add("shake");
    buttonPrimary.addEventListener("animationend", () => {
      buttonPrimary.classList.remove("shake");
    });

    document.querySelector(`.label${target}`).nextElementSibling.innerHTML =
      message;
    document
      .querySelector(`.label${target}`)
      .nextElementSibling.classList[type === "add" ? "add" : "remove"](
        "info--hidden"
      );
    document.querySelector(`.label${target}`).classList[type]("input--error");
  };

  //   FUNCION PARA EL BOTON SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let i in cardContent) {
      if (!cardContent[i]) {
        handleError(i, "Can`t be blank");
      } else handleError(i, "", "remove");
    }

    if (cardContent.cardNumber) {
      if (cardContent.cardNumber.length < 19) {
        handleError("cardNumber", "Number is too short");
      } else if (cardContent.cardNumber.match(/[^0-9\s]/g)) {
        handleError("cardNumber", "Wrong format, numbers only");
      } else handleError("cardNumber", "", "remove");
    }

    if (cardContent.cvc) {
      if (cardContent.cvc.length < 3) {
        handleError("cvc", "CVC is too short");
      } else handleError("cvc", "", "remove");
    }

    if (!cardContent.expiryDateMonth)
      handleError("expiryDateMonth", "Can`t be blank");
    if (!cardContent.expiryDateYear)
      handleError("expiryDateYear", "Can`t be blank");
  };

  return (
    <section className="form-side">
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <div className="container">
          <label htmlFor="cardholder-name">
            Cardholder Name:
            <input
              type="text"
              id="cardholder-name"
              name="cardholderName"
              placeholder="e.g. Jane Appleseed"
              onChange={handleInput}
              required
            />
          </label>
          <p className="info--hidden" aria-live="polite"></p>
        </div>

        <div className="container">
          <label htmlFor="card-number">
            Card Number:
            <input
              type="number"
              id="card-number"
              name="cardNumber"
              placeholder="e.g. 1234 5678 9012 3456"
              onChange={handleInput}
              required
            />
          </label>
          <p className="info info--hidden" aria-live="polite"></p>
        </div>

        <div className="exp-cvc-container">
          <div className="expiry-date-container">
            <label htmlFor="expiry-date">
              Exp. Date (MM/YY)
              <input
                type="number"
                id="expiry-date-month"
                name="expiryDateMonth"
                placeholder="MM"
                onChange={handleInput}
                required
              />
              <input
                type="number"
                id="expiry-date-year"
                name="expiryDateYear"
                placeholder="YY"
                onChange={handleInput}
                required
              />
            </label>
            <p className="info info--hidden" aria-live="polite"></p>
          </div>
          <div className="cvc-container">
            <label htmlFor="cvc">
              CVC:
              <input
                type="number"
                id="cvc"
                name="cvc"
                placeholder="e.g. 123"
                onChange={handleInput}
                required
              />
            </label>
            <p className="info info--hidden" aria-live="polite"></p>
          </div>
        </div>
        <div className="button--area">
          <button type="submit" className="button--primary">
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
}
export default FormSide;

// //   FUNCIONES PARA CAMBIAR EL ESTADO DE LOS INPUTS

// const handleCardholderNameChange = (e) => {
//   setCardholderName(e.target.value);
//   updateCardContent(e);
// };

// const handleCardNumberChange = (e) => {
//   setCardNumber(e.target.value);
//   updateCardContent(e);
//   handleCardNumberValidation(e.target.value);
// };

// const handleExpiryDateMonthChange = (e) => {
//   setExpiryDateMonth(e.target.value);
//   updateCardContent(e);
// };

// const handleExpiryDateYearChange = (e) => {
//   setExpiryDateYear(e.target.value);
//   updateCardContent(e);
// };

// const handleCvcChange = (e) => {
//   setCvc(e.target.value);
//   updateCardContent(e);
// };

// const handleCardNumberValidation = (cardNumberValue) => {
//   if (cardNumberValue.length < 16) {
//     setCardNumberError("error");
//   } else {
//     setCardNumberError("success");
//   }
// };
