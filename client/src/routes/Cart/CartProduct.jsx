import Cart from "../../components/Cart";
import Nav from "../../components/Nav";
import "./cart.css";

const CartProduct = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <Nav type="cart" />
        <Cart />
      </div>
    </div>
  );
};

export default CartProduct;
