import reactLogo from "../assets/react.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-box">
          <img src={reactLogo} className="icon-small" alt="logo" />
          <a>kikugaw's blog</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
