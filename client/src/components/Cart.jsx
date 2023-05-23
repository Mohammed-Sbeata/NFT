import { useEffect, useState } from "react"
import cartImg from "../assets/images/044460150547103.62fc32b4dc2a0.jpg"
const Cart = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = axios.get('/api/getCart')
                setCartProduct(response.data)
            }
            catch {
                setError(error.response.data.message);
            }
        }
        fetchData()
    },[])

    return (
        <div className='cart-main'>
            <div className="cart-content cart-head">
                    <p>image</p>
                <p>title</p>
                <p>floor</p>
                <p>price</p>
                <p></p>
            </div>
            <div className="cart-content">
               <div className="product-img">
                <img src={cartImg} alt="cart-image" />
               </div>
                <h4>Name</h4>
                <p>$200</p>
                <p>$50</p>
                <div><button className="delete">Delete</button></div>
            </div>
        </div>
    )
}

export default Cart