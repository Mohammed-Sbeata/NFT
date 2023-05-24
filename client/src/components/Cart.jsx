import { useEffect, useState } from "react"
import cartImg from "../assets/images/044460150547103.62fc32b4dc2a0.jpg"
import axios from "axios";
const Cart = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/getCart')
                setCartProduct(response.data.data)
            } catch {
                setError("Error fetching cart data.");
            }
        }
        fetchData()
    }, [])


    const deleteCart = async (id) => {
        try {
            await axios.delete(`/api/deleteCart/${id}`)
            setCartProduct(prevCart => prevCart.filter((cart) => cart.id !== id))
        }
        catch (error) {
            setError("Error deleting cart product.");
        }
    }

    return (
        <div className='cart-main'>
            <div className="cart-content cart-head">
                <p>image</p>
                <p>title</p>
                <p>floor</p>
                <p>price</p>
                <p></p>
            </div>
            {cartProduct.map(((cart, id) => (

                <><div className="cart-content" key={id} id={id}>
                    <div className="product-img">
                        <img src={cart.image} alt="cart-image" />
                    </div>
                    <h4>{cart.title}</h4>
                    <p>${cart.price}</p>
                    <p>$50</p>
                    <div><button className="delete" onClick={() => deleteCart(cart.id)}>Delete</button></div>
                </div></>
            )))}
        </div>
    )
}

export default Cart