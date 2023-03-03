import "./CardDeco.css";
// CardDeco is the main component
function CardDeco({ cardContent }) {
  return (
    <div className="cardDeco">
      <div className="card-back">
        <div className="card-back-content">
          <span>{cardContent.cvv || "CVV"}</span>
        </div>
      </div>
      <div className="card-front">
        <div className="card-logo">
          <img src="src/assets/images/card-logo.svg" alt="" />
        </div>
        <div className="card-content">
          <h2>{cardContent.cardNumber || "0000 0000 0000 0000"} </h2>
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
