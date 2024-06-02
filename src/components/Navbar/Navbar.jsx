import data from "./data";
import Logo from "../../assets/logo.svg";
import ProfileImage from "../../assets/profile.jpeg";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__left">
          <a href="index.html">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className="nav__menu">
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <CiSearch className="nav__icon" />
        </div>
        <div className="nav__right">
          <div className="nav__contact">
            <div className="nav__contact-profile">
              <img src={ProfileImage} alt="Profile" />
            </div>
            <div className="nav__contact-info">
              <small>
                <a href="index.html">Talk to real person</a>
              </small>
              <p>(877) 807-4909</p>
            </div>
          </div>
          <button className="btn primary">Quick Quote</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
