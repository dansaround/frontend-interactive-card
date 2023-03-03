import { useState } from "react";

export const useFormValidation = () => {
  const [cardContent, setCardContent] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDateMonth: "",
    expiryDateYear: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
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
    if (name === "cvv")
      e.target.value = value.replace(/[^0-9]/g, "").substring(0, 3);

    setCardContent({ ...cardContent, [name]: e.target.value });
  };

  const isAValidCardNumber = (value) => {
    let isCorrect = true;

    !value.length && (isCorrect = false);
    value.length < 19 && (isCorrect = false);

    return isCorrect;
  };

  const isAValidCardholderName = (value) => {
    let isCorrect = true;

    !value.length && (isCorrect = false);
    !/^[a-zA-Z]+$/.test(value) && (isCorrect = false);

    return isCorrect;
  };

  const isAValidExpirationYear = (value) => {
    let isCorrect = true;

    !value.length && (isCorrect = false);
    !/^[0-9]+$/.test(value) && (isCorrect = false);
    value.length < 2 && (isCorrect = false);

    return isCorrect;
  };

  const isAValidExpirationMonth = (value) => {
    let isCorrect = true;

    !value.length && (isCorrect = false);
    !/^[0-9]+$/.test(value) && (isCorrect = false);
    value.length < 2 && (isCorrect = false);

    return isCorrect;
  };

  const isAValidCVV = (value) => {
    let isCorrect = true;

    !value.length && (isCorrect = false);
    !/^[0-9]+$/.test(value) && (isCorrect = false);
    value.length < 3 && (isCorrect = false);

    return isCorrect;
  };

  return {
    cardContent,
    isAValidCVV,
    setCardContent,
    handleInputChange,
    isAValidCardNumber,
    isAValidExpirationYear,
    isAValidCardholderName,
    isAValidExpirationMonth,
  };
};
