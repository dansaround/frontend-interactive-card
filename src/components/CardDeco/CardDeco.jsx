import "./CardDeco.css";
// CardDeco is the main component
function CardDeco({ cardContent }) {
  // Get card number from props
  const cardNumber = cardContent.cardNumber || "0000000000000000";
  // Format card number
  const formattedCardNumber = cardNumber.replace(/(.{4})/g, "$1 ");

  return (
    <div className="cardDeco">
      <div className="card-back">
        <div className="card-back-content">
          <span>{cardContent.cvc || "CVV"}</span>
        </div>
      </div>
      <div className="card-front">
        <div className="card-logo">
          <img src="src/assets/images/card-logo.svg" alt="" />
        </div>
        <div className="card-content">
          <h2>{formattedCardNumber} </h2>
          <p>{cardContent.cardholderName || "Name LastName"}</p>
          <span>
            {cardContent.expiryDateMonth || "00"}/
            {cardContent.expiryDateYear || "00"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardDeco;
