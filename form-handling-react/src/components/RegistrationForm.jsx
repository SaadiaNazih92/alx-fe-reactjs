import { useState } from 'react';

const RegistrationForm = () => {
    // 1. Gestione degli stati del modulo usando useState
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Gestione del cambiamento degli input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // 2. Logica di validazione e invio
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validazione di base
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Simulazione API
        console.log('Form submitted successfully:', formData);
        setErrors({}); // Pulisci errori se successo
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                />
                {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
            </div>
            
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                />
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
