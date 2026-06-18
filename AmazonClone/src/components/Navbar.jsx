import "./Navbar.css";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>amazon</h2>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>

      <div className={open ? "nav-links active" : "nav-links"}>
        <Link to="/">Home</Link>

        <Link to="/cart">
          <FaShoppingCart />
          ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;