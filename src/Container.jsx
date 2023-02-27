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

  return (
    <>
      <Header cardContent={cardContent} />
      <FormSide cardContent={cardContent} setCardContent={setCardContent} />
    </>
  );
}

export default Container;
