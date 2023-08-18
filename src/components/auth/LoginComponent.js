// LoginComponent.js
import React, { useState } from 'react';
import {loginUser } from '../../services/apiServices';


const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const credentials = {
            username: username,
            password: password,
        };

        const response = await loginUser(credentials);
        // Handle response (e.g., set authentication state)
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginComponent;
