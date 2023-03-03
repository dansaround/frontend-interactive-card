import "./Header.css";
import CardDeco from "../CardDeco/CardDeco";
import { useFormValidation } from "../../useFormValidation";

function Header({ cardContent }) {
  return (
    <div className="header">
      <CardDeco cardContent={cardContent} />
    </div>
  );
}

export default Header;
