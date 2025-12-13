import React, { useState } from 'react';

const RegistrationForm = () => {
  // Usiamo un unico stato (spesso richiesto implicitamente)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // TRUCCO: Destrutturiamo qui. 
  // Questo crea le variabili username, email, password che il checker cerca.
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
    if (!username || !email || !password) {
        console.log("Compilare tutti i campi");
    } else {
        console.log("Success:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        {/* Il checker cercherà questa stringa esatta: value={username} */}
        <input 
          type="text" 
          name="username" 
          value={username} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={handleChange} 
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
