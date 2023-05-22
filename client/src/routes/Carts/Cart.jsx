import "./cart.css"

function Cart() {
    const moo = "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>

            <div className="cart-item">
                <img src={moo} alt="Product 1"/>
                    <div className="item-details">
                        <h4>Product 1</h4>
                        <p>Description of Product 1</p>
                        <p className="price">$19.99</p>
                    </div>
            </div>
        </div>
    )
}
export default Cart;
