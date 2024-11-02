import { NavLink } from "react-router-dom";
import "./footer.scss";
import { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const getEmail = (e) => {
    e.preventDefault();
    if (email) {
      setEmail("");
      toast.success("Success");
    }
  };

  return (
    <footer>
      <div className="footerItem">
        <div className="title">
          <NavLink to="/">
            <img
              width={200}
              src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png"
              alt="Logo"
            />
          </NavLink>
        </div>
        <p className="footerText">
          'Bukhara Natural Product' has been a company for many years that
          produces cotton fabrics for use all over the world.
        </p>
      </div>
      <div className="footerItem">
        <div className="title">Menu</div>
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
      <div className="footerItem">
        <div className="title">Contact</div>
        <p>Bukhara, st. Alpomysh 80.</p>
        <p>Bnpuz@bk.ru.</p>
        <p>bnp_fabrik</p>
        <p>info@bnpfabric.com</p>
        <p>+998 93 960 78 00</p>
      </div>
      <div className="footerItem">
        <div className="title">Subscribe to our email</div>
        <div className="forEmail">
          <form onSubmit={getEmail}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
