function Cart() {
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>

            <div className="cart-item">
                <img src="product1.jpg" alt="Product 1"/>
                    <div className="item-details">
                        <h4>Product 1</h4>
                        <p>Description of Product 1</p>
                        <p className="price">$19.99</p>
                    </div>
            </div>

            <div className="cart-item">
                <img src="product2.jpg" alt="Product 2" />
                    <div className="item-details">
                        <h4>Product 2</h4>
                        <p>Description of Product 2</p>
                        <p className="price">$24.99</p>
                    </div>
            </div>

            <div className="cart-actions">
                <button>Checkout</button>
            </div>
        </div>
    )
}
export default Cart;
