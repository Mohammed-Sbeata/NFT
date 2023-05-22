import { useState } from "react"
import axios from "axios";

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    }
    const [formData, setFormData] = useState(initialState)
    const [error, setError] = useState(null);

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
         const response = await axios.post('/api/login',formData)
            
        } catch (err) {
            setError(err);
    }
    }

    if(error)  return `Error: ${error.message}`

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

            </div>
        </div>
    )
}
export default Login