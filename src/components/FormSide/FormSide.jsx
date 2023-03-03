import "./FormSide.css";
import { useState } from "react";

function FormSide(formData) {
  const [isFormCorrect, setIsFormCorrect] = useState(false);

  const {
    cardContent,
    isAValidCVV,
    handleInputChange,
    isAValidCardNumber,
    isAValidCardholderName,
    isAValidExpirationYear,
    isAValidExpirationMonth,
  } = formData;

  const handleShowError = (target, messageTarget) => {
    const selectedTarget = document.querySelector(target);
    const selectedMessageTarget = document.querySelector(messageTarget);

    selectedTarget.className = "error";
    selectedMessageTarget.className = "error-message";
  };

  //   FUNCION PARA EL BOTON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const validCardholder = isAValidCardholderName(cardContent.cardholderName);
    const validCardNumber = isAValidCardNumber(cardContent.cardNumber);
    const validCardYear = isAValidExpirationYear(cardContent.expiryDateYear);
    const validCardMonth = isAValidExpirationMonth(cardContent.expiryDateMonth);
    const validCVV = isAValidCVV(cardContent.cvv);

    if (!validCardholder) {
      handleShowError("#cardholder-name", "#cardholderName-input");
    }
    if (!validCardNumber) {
      handleShowError("#card-number", "#cardNumber-input");
    }
    if (!validCardMonth) {
      handleShowError("#expiry-date-month", "#expiryDateMonth-input");
    }
    if (!validCardYear) {
      handleShowError("#expiry-date-year", "#expiryDateYear-input");
    }
    if (!validCVV) {
      handleShowError("#cvv", "#cvv-input");
    }

    if (
      ![
        validCardholder,
        validCardNumber,
        validCardMonth,
        validCardYear,
        validCVV,
      ].includes(false)
    ) {
      setIsFormCorrect(true);
    }
  };

  return (
    <>
      {!isFormCorrect ? (
        <section className="form-side">
          <form onSubmit={handleSubmit}>
            <div className="container">
              <label className="labelcardholderName" htmlFor="cardholder-name">
                Cardholder Name:
                <div id="cardholderName-input">
                  <input
                    type="text"
                    id="cardholder-name"
                    name="cardholderName"
                    placeholder="e.g. Jane Appleseed"
                    onChange={handleInputChange}
                  />
                </div>
              </label>
            </div>

            <div className="container">
              <label className="labelcardNumber" htmlFor="card-number">
                Card Number:
                <div id="cardNumber-input">
                  <input
                    type="text"
                    id="card-number"
                    name="cardNumber"
                    placeholder="e.g. 1234 5678 9012 3456"
                    onChange={handleInputChange}
                    maxLength={19}
                  />
                </div>
              </label>
              <p className="info info--hidden" aria-live="polite"></p>
            </div>

            <div className="exp-cvv-container">
              <div className="expiry-date-container">
                <label
                  className="labelmm-labelyy"
                  htmlFor="expiry-date"
                ></label>
                Exp. Date (MM/YY):
                <div id="expiryDateMonth-input">
                  <input
                    type="number"
                    id="expiry-date-month"
                    name="expiryDateMonth"
                    placeholder="MM"
                    maxLength={2}
                    onChange={handleInputChange}
                  />
                </div>
                <div id="expiryDateYear-input">
                  <input
                    type="number"
                    id="expiry-date-year"
                    name="expiryDateYear"
                    placeholder="YY"
                    maxLength={2}
                    onChange={handleInputChange}
                  />
                </div>
                <p className="info info--hidden" aria-live="polite"></p>
              </div>
              <div className="cvv-container">
                <label className="labelcvv" htmlFor="cvv">
                  cvv:
                  <div id="cvv-input">
                    <input
                      type="number"
                      id="cvv"
                      name="cvv"
                      placeholder="e.g. 123"
                      onChange={handleInputChange}
                    />
                  </div>
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
      ) : (
        <div className="thank">
          <img src="src/assets/images/icon-complete.svg" alt="completed" />
          <h2>THANK YOU!</h2>
          <p>We've added your card details</p>
          <button
            onClick={() => {
              setIsFormCorrect(false);
            }}
            className="button--primary"
          >
            Continue
          </button>
        </div>
      )}
    </>
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

// const handlecvvChange = (e) => {
//   setcvv(e.target.value);
//   updateCardContent(e);
// };

// const handleCardNumberValidation = (cardNumberValue) => {
//   if (cardNumberValue.length < 16) {
//     setCardNumberError("error");
//   } else {
//     setCardNumberError("success");
//   }
// };
