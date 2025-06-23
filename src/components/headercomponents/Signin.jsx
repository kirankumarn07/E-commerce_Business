import React, { useState } from 'react'

const Signin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    return (
        <form className='formSignin' style={{maxWidth:'400px',margin:'0 auto'}}>
            <h2>Signin page</h2>
            <div>
                <div style={{marginBottom:'10px'}}>
                    <label>Email:</label><br />
                    <input type='text' name='email' value={formData.email} /><br />
                </div>
                <div style={{marginBottom:'10px'}}>
                    <label>Password:</label><br/>
                    <input type='text' name='password' value={formData.password} />
                </div>
                <div style={{display:"flex",gap:"28px", justifyContent:"center"}}>
                    <button>Login</button>
                    <button>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default Signin
