import Cart from "../../components/Cart"
import Nav from "../../components/Nav"
import "./index.css"


const CartProduct = () => {
    return (
        <div className="cart-page">
            <div className="container">
                <Nav />
                <Cart />
            </div>
        </div>
    )
}

export default CartProduct