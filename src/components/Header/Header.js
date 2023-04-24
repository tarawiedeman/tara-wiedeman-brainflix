import "./Header.scss";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";
import LogoImage from "../../assets/images/BrainFlix-logo.svg";
import UploadIcon from "../../assets/images/upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={LogoImage} alt="logoimage" />
      </Link>

      <div className="header__container">
        <input className="header__search" placeholder="Search"></input>

        <img className="avatar" src={AvatarImage} alt="avatarimage" />
      </div>

      <Link to="/upload">
        <button className="header__button">
          <img className="icon" src={UploadIcon} alt="uploadicon" />
          UPLOAD{" "}
        </button>{" "}
      </Link>
    </header>
  );
}

export default Header;
