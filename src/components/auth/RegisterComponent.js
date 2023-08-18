// RegisterComponent.js
import React, { useState } from 'react';
import { registerUser} from '../../services/apiServices';


const RegisterComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const userData = {
            username: username,
            password: password,
        };

        const response = await registerUser(userData);
        // Handle response (e.g., show success/error message)
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegisterComponent;
