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

  //   CREA UNA FUNCION PARA VALIDAR TODOS LOS INPUTS

  const validateInputs = () => {
    let cardholderNameInput = document.getElementById("cardholder-name");
    let cardNumberInput = document.getElementById("card-number");
    let expiryDateMonthInput = document.getElementById("expiry-date-month");
    let expiryDateYearInput = document.getElementById("expiry-date-year");
    let cvcInput = document.getElementById("cvc");

    let cardholderNameInfo = cardholderNameInput.nextElementSibling;
    let cardNumberInfo = cardNumberInput.nextElementSibling;
    let expiryDateMonthInfo = expiryDateMonthInput.nextElementSibling;
    let expiryDateYearInfo = expiryDateYearInput.nextElementSibling;
    let cvcInfo = cvcInput.nextElementSibling;

    //   VALIDACION PARA EL INPUT DEL NOMBRE DEL TITULAR

    if (cardholderNameInput.value === "") {
      cardholderNameInput.classList.add("error");
      cardholderNameInfo.classList.remove("info--hidden");
      cardholderNameInfo.textContent = "Please fill out this field";
    } else {
      cardholderNameInput.classList.remove("error");
      cardholderNameInfo.classList.add("info--hidden");
      cardholderNameInfo.textContent = "";
    }

    //   VALIDACION PARA EL INPUT DEL NUMERO DE TARJETA

    if (cardNumberInput.value === "") {
      cardNumberInput.classList.add("error");
      cardNumberInfo.classList.remove("info--hidden");
      cardNumberInfo.textContent = "Please fill out this field";
    } else if (cardNumberError === "error") {
      cardNumberInput.classList.add("error");
      cardNumberInfo.classList.remove("info--hidden");
      cardNumberInfo.textContent = "Please enter a valid card number";
    } else {
      cardNumberInput.classList.remove("error");
      cardNumberInfo.classList.add("info--hidden");
      cardNumberInfo.textContent = "";
    }

    //   VALIDACION PARA EL INPUT DEL MES DE EXPIRACION

    if (expiryDateMonthInput.value === "") {
      expiryDateMonthInput.classList.add("error");
      expiryDateMonthInfo.classList.remove("info--hidden");
      expiryDateMonthInfo.textContent = "Please fill out this field";
    } else {
      expiryDateMonthInput.classList.remove("error");
      expiryDateMonthInfo.classList.add("info--hidden");
      expiryDateMonthInfo.textContent = "";
    }

    //   VALIDACION PARA EL INPUT DEL AÑO DE EXPIRACION

    if (expiryDateYearInput.value === "") {
      expiryDateYearInput.classList.add("error");
      expiryDateYearInfo.classList.remove("info--hidden");
      expiryDateYearInfo.textContent = "Please fill out this field";
    } else {
      expiryDateYearInput.classList.remove("error");
      expiryDateYearInfo.classList.add("info--hidden");
      expiryDateYearInfo.textContent = "";
    }

    //   VALIDACION PARA EL INPUT DEL CVC

    if (cvcInput.value === "") {
      cvcInput.classList.add("error");
      cvcInfo.classList.remove("info--hidden");
      cvcInfo.textContent = "Please fill out this field";
    } else {
      cvcInput.classList.remove("error");
      cvcInfo.classList.add("info--hidden");
      cvcInfo.textContent = "";
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
      <form
        onSubmit={() => {
          handleSubmit(), validateInputs();
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
              onChange={handleCardholderNameChange}
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
              onChange={handleCardNumberChange}
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
                onChange={handleExpiryDateMonthChange}
                required
              />
              <input
                type="number"
                id="expiry-date-year"
                name="expiryDateYear"
                placeholder="YY"
                onChange={handleExpiryDateYearChange}
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
                onChange={handleCvcChange}
                required
              />
            </label>
            <p className="info info--hidden" aria-live="polite"></p>
          </div>
        </div>
        <div className="button-area">
          <button type="submit" className="button-primary">
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
}
export default FormSide;
