import "./header.scss";
import BurgerMenu from "../../icons/BurgerMenu";
import CancelIcon from "../../icons/CancelIcon";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("lang");

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };
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
            <NavLink to="/">{t("home")}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t("about")}</NavLink>
          </li>
          <li>
            <NavLink to="/collection">{t("collection")}</NavLink>
          </li>
          <li>
            <NavLink to="/contact">{t("contact")}</NavLink>
          </li>
        </ul>
      </div>
      <div className="rightSide">
        <select onChange={changeLang} select={lang}>
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
