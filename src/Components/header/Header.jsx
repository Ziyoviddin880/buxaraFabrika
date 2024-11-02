import "./header.scss";
import BurgerMenu from "../../icons/BurgerMenu";
import CancelIcon from "../../icons/CancelIcon";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      <div className="leftSide">
        <img
          width={200}
          src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png"
          alt="Logo"
        />

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/collection">Collection</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="rightSide">
        <select>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <div
          onClick={() => {
            setMobile(true);
          }}
        >
          <BurgerMenu />
        </div>
      </div>
      {mobile && (
        <div className="mobile-menu">
          <div onClick={() => setMobile(false)} className="cancel-icon">
            <CancelIcon />
          </div>
          <ul>
            <li>
              <NavLink
                onClick={() => {
                  setMobile(false);
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setMobile(false);
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setMobile(false);
                }}
                to="/collection"
              >
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setMobile(false);
                }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
