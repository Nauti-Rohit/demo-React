import { LOGO_Url } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img className="header-logo" src={LOGO_Url} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home </li>
            <li>About </li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
