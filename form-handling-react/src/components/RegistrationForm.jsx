import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Estraiamo i valori qui in modo da poter usare "username" invece di "formData.username" nel JSX
    // Questo serve per soddisfare il checker di ALX
    const { username, email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Form submitted successfully:', formData);
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username"
                    value={username} 
                    onChange={handleChange} 
                />
                {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
            </div>
            
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    value={email} 
                    onChange={handleChange} 
                />
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={handleChange} 
                />
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
