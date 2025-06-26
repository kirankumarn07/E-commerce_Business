import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                await axios.post('http://localhost:9999/api/auth/signup', formData);
                alert(`Welcome, ${formData.name}!`);
                navigate('/signin');
                setFormData({ name: '', email: '', password: '' });
            } catch (err) {
                console.error("Signup error:", err);
                alert(err.response?.data?.message || "Signup failed");
            }
        }
    };

    const handleCancel = () => {
        setFormData({ name: '', email: '', password: '' });
    };

    return (
        <form className='formSignup' onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
           
            <div style={{height:'230px',width:'200px', backgroundColor:'gray', borderRadius:'3px'}}>
                 <h2 style={{color:'white', margin:'20px 0'}}>Sign-Up</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label>Name:</label><br />
                    <input type='text' name='name' value={formData.name} onChange={handleChange} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label><br />
                    <input type='email' name='email' value={formData.email} onChange={handleChange} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label><br />
                    <input type='password' name='password' value={formData.password} onChange={handleChange} />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <div style={{ display: 'flex', gap: '30px', justifyContent: "center" }}>
                    <button type="submit">Register</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
                <div>
                    <Link to='/signin' style={{color:'blue', textDecoration:'underline'}}>Signin Here</Link>
                </div>
            </div>
        </form>
    );
};

export default Signup;
