import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
// import Signup from './Signup';
const Signin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }))
    };
    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = "email is required"
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "email is not valid"
        }
        if (!formData.password) {
            newErrors.password = "password is required"
        } else if (formData.password.length < 6) {
            newErrors.password = "password should be atleast 6 charcters"
        }
        return newErrors;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            try {
             const response= await axios.post('http://localhost:9999/api/auth/signin', formData)
                alert(`Welcome, ${formData.email}!`)
                console.log('Form Submit:', formData);
                const userData = response.data; // assuming the backend returns user info or token
                localStorage.setItem("user", JSON.stringify(userData));
                console.log("User Data:", response.data);

                setFormData({
                    email: '',
                    password: ''
                })
                navigate('/')

            } catch (error) {
                console.error("Login error:", error);
                alert(error.response?.data?.message || "Login failed");
            }

        }
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setFormData({
            email: "",
            password: ''
        })
    }
    return (
        <form className='formSignin' style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ height: "180px", width: "200px", backgroundColor: "gray", borderRadius: "3px" }}>
                <h2 style={{ color: 'white', margin: '20px 0' }}>Signin page</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label><br />
                    <input type='text' name='email' value={formData.email} onChange={handleChange} /><br />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label><br />
                    <input type='text' name='password' value={formData.password} onChange={handleChange} />
                </div>
                <div style={{ display: "flex", gap: "28px", justifyContent: "center" }}>
                    <button type='submit' onClick={handleSubmit}>Login</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
                <div>
                   <Link to='/signup' style={{color:'white', textDecoration:'underline'}}>SignUp Here</Link>
                </div>
            </div>
        </form>
    )
}

export default Signin
