import React, { useState, useContext } from "react";
import axios from 'axios';
export default function Register() {
    
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let item = { name: Name, email: Email, password: pass, amount: 1000 };
        axios.post('https://bank-server-1-vb0b.onrender.com/create',item)
        alert("Submitted Sucessfully");
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center', padding: '70px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <label>name:</label><input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
              <label>Email:</label><input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <label>Password:</label><input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}