// login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        try {
            const res = await fetch('/api/signin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.status === 400 || !data) {
                throw new Error("Invalid credentials");
            } else {
                window.alert("Login successful");
                navigate("/");
            }
        } catch (error) {
            console.error(error.message);
            window.alert(error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="box">
                <div className="container">
                    <div className="box-2">
                        <h1 className="header">Welcome Back</h1>
                        <div className="form-fil">
                            <input name="fname" className="fname" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <input type="password" name="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <button className="sign" onClick={loginUser}>Login</button>
                        <Link to="/signup"><button className="sign">Sign up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
