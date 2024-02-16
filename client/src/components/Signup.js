// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: ""
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const PostData = async () => {
    try {
      const { name, email, phone, password, cpassword } = user;
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, password, cpassword })
      });
      const data = await res.json();

      if (res.status === 422 || !data) {
        throw new Error("Invalid credentials");
      } else {
        window.alert("Registration success");
        navigate('/login');
      }
    } catch (error) {
      console.error(error.message);
      window.alert(error.message);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="box">
        <div className="container">
          <div className="box-2">
            <h1 className="header">Welcome Back</h1>
            <div className="form-fil">
              <input name="name" className="fname" placeholder="Name" value={user.name} onChange={handleInputs} />
              <input name="email" className="fname" placeholder="Email" value={user.email} onChange={handleInputs} />
              <input name="phone" className="fname" placeholder="Phone number" value={user.phone} onChange={handleInputs} />
              <input name="password" type="password" className="fname" placeholder="Password" value={user.password} onChange={handleInputs} />
              <input name="cpassword" type="password" className="fname" placeholder="Confirm Password" value={user.cpassword} onChange={handleInputs} />
            </div>
            <button className="sign" onClick={PostData}>Signup</button>
            <Link to='/login'><button className="sign">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
