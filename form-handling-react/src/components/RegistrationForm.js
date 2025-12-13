import React, { useState } from 
'react';



const RegistrationForm = () => {

  const [formData, setFormData] = useState({

    username: '',

    email: '',

    password: '',

  });



  const [errors, setErrors] = useState({});



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };



  const handleSubmit = (e) => {

    e.preventDefault(); 



   

    const newErrors = {};

    if (!formData.username) newErrors.username = 'Il nome utente è obbligatorio';

    if (!formData.email) newErrors.email = 'L\'email è obbligatoria';

    if (!formData.password) newErrors.password = 'La password è obbligatoria';



    setErrors(newErrors);





    if (Object.keys(newErrors).length === 0) {

      console.log('Dati modulo inviati (Controllato):', formData);

      alert('Registrazione riuscita con successo!');

    }

  };



  return (

    <form onSubmit={handleSubmit}>

      <h3>Registrazione (Componenti Controllati)</h3>

      

      <div>

        <label>Username:</label>

        <input

          type="text"

          name="username"

          value={formData.username}

          onChange={handleChange}

        />

        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

      </div>



      <div>

        <label>Email:</label>

        <input

          type="email"

          name="email"

          value={formData.email}

          onChange={handleChange}

        />

        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      </div>



      <div>

        <label>Password:</label>

        <input

          type="password"

          name="password"

          value={formData.password}

          onChange={handleChange}

        />

        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      </div>



      <button type="submit">Registrati</button>

    </form>

  );

};



export default RegistrationForm;
