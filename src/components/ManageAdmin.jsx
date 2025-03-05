import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Styles/ManageAdmin.module.css';

const ManageAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminId, setAdminId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  console.log(admins);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admins/');
      setAdmins(response.data);
    } catch (err) {
      console.error('Error fetching admins:', err);
    }
  };

  const handleAddOrUpdateAdmin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (adminId) {
        // Update existing admin
        await axios.put(`http://localhost:5000/api/admins/${adminId}`, { email, password });
        setSuccess('Admin updated successfully!');
      } else {
        // Create new admin
        await axios.post('http://localhost:5000/api/admins/signup', { email, password });
        setSuccess('Admin created successfully!');
      }
      resetForm();
      fetchAdmins();
    } catch (err) {
      console.error('Error adding/updating admin:', err);
      setError(err.response ? err.response.data.message : 'Error occurred');
    }
  };

  const handleEditClick = (admin) => {
    setEmail(admin.email);
    setPassword(''); // Reset password field for security
    setAdminId(admin._id);
  };

  const handleDeleteClick = async (adminId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admins/${adminId}`);
      setSuccess('Admin deleted successfully!');
      fetchAdmins();
    } catch (err) {
      console.error('Error deleting admin:', err);
      setError(err.response ? err.response.data.message : 'Error occurred');
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setAdminId(null);
  };

  return (
    <div className={styles.manageAdmin}>
      <h1>Manage Admins</h1>
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}

      <form onSubmit={handleAddOrUpdateAdmin} className={styles.formk}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputFieldk}
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
        <button type="submit" className={styles.submitButton}>
          {adminId ? 'Update Admin' : 'Add Admin'}
        </button>
        <button type="button" onClick={resetForm} className={styles.cancelButton}>Cancel</button>
      </form>

      <h2>Existing Admins</h2>
      <ul className={styles.adminList}>
        {admins.map((admin) => (
          <li key={admin._id} className={styles.adminItem}>
            <span>{admin.email}</span>
            <button onClick={() => handleEditClick(admin)} className={styles.editButton}>Edit</button>
            <button onClick={() => handleDeleteClick(admin._id)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAdmin;
