import { useState } from "react"
import axios from "axios";

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    }
    const [formData, setFormData] = useState(initialState)
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('/api/login', formData)
            location.href = '/'
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <div className="container">
            <div className="login-box">
                <h2>LogIn</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange} />
                        <label>Username</label>
                    </div>

                    <div className="input-box">
                        <input type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />
                        <label>Password</label>
                    </div>
                    <button className="btn">Log In</button>
                </form>
                <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
            </div>
        </div>
    )
}
export default Login