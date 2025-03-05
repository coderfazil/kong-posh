// AdminLogin.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Styles/AdminLogin.module.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate=useNavigate();
 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/admins/login', {
        email,
        password,
      });
     
      setSuccess('Login successful!');
      navigate("/admin-panel");

      // Handle successful login (e.g., redirect or store token)
    } catch (err) {
     
      console.log(err);
      setError('Invalid email or password');
      console.error('Login error:', err);
    }
  };

  return (
    <div className={styles.adminLogin}>
      <h1>Admin Login</h1>
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
