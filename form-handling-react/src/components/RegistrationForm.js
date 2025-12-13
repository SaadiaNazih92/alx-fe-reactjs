import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username required';
    if (!formData.email) newErrors.email = 'Email required';
    if (!formData.password) newErrors.password = 'Password required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      {errors.username && <div>{errors.username}</div>}
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <div>{errors.email}</div>}
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      {errors.password && <div>{errors.password}</div>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
