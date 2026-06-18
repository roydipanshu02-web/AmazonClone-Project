import "./Product.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product({ title, price, image }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p className="price">₹{price}</p>

      <button
        onClick={() => addToCart({ title, price, image })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;