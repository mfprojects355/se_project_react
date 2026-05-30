import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";

const userName = "Mohammad Farid";

function Header({ weatherData, onAddClothesClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="WTWR logo" />
        </Link>
        <p className="header__datetime ui-text-1">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        <button
          type="button"
          className="header__add-button ui-text-1"
          onClick={onAddClothesClick}
        >
          + Add clothes
        </button>
        <Link to="/profile" className="header__profile-link">
          <p className="header__username ui-text-1">{userName}</p>
          <img className="header__avatar" src={avatar} alt={userName} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
