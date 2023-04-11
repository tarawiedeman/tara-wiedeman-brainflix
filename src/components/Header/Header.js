import "./Header.scss";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";
import LogoImage from "../../assets/images/BrainFlix-logo.svg";
import UploadIcon from "../../assets/images/upload.svg"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={LogoImage} alt="logoimage" />

      <div className="header__container">
        <input className="header__search" placeholder="Search"></input>

        <img className="avatar" src={AvatarImage} alt="avatarimage" />
      </div>

      <button className="header__button"><img src={UploadIcon} width="25rem"/>UPLOAD</button>
    </header>
  );
}

export default Header;
