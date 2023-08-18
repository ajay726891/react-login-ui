// apiService.js
const baseUrl = 'https://your-api-domain/api/';

export const registerUser = async (userData) => {
    const response = await fetch(baseUrl + 'auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
};

export const loginUser = async (credentials) => {
    const response = await fetch(baseUrl + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();
    return data;
};
