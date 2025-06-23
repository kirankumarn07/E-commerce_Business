import React, { useState } from 'react'
import { Form, Navigate, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: " ",
        email: " ",
        password: " "
    })
    const navigate=useNavigate();
    const [errors, setErrors] = useState({})
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "name is required"
        }
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert(`Welcome, ${formData.name}!`)
            navigate('/signin')
            console.log('Form Submit:', formData);
            setFormData({
                name: '',
                email: '',
                password: ''
            })
        }
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            password: ''
        })
    }
    return (
        <form className='' onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2>Sign-Up</h2>
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
            <div style={{ display: 'flex', gap: '30px' }}>
                <button onSubmit={handleSubmit}>Register</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default Signup
