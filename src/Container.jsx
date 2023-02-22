import { useState } from "react";
import Header from "./components/Header/Header";
import FormSide from "./components/FormSide/FormSide";

function Container() {
  const [cardContent, setCardContent] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDateMonth: "",
    expiryDateYear: "",
    cvc: "",
  });

  const updateCardContent = (e) => {
    setCardContent({
      ...cardContent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header cardContent={cardContent} />
      <FormSide updateCardContent={updateCardContent} />
    </>
  );
}

export default Container;
