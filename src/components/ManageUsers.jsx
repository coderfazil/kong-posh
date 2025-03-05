import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Styles/ManageUsers.module.css';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const [message, setMessage] = useState('');

    // Fetch users from the backend
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
           
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Handle adding a new user
    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users', {
                email,
                password,
                name
            });
            setUsers([...users, response.data]);
            setMessage('User added successfully!');
            clearForm();
            setTimeout(() => {
              setMessage("");
            }, 3000);
        } catch (error) {
            console.error('Error adding user:', error);
            setMessage('Failed to add user.');
            setTimeout(() => {
              setMessage("");
            }, 3000);
        }
    };

    // Handle deleting a user
    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            setUsers(users.filter(user => user._id !== id));
            setMessage('User deleted successfully!');
            setTimeout(() => {
              setMessage("");
            }, 3000);

        } catch (error) {
            console.error('Error deleting user:', error);
            setMessage('Failed to delete user.');
            setTimeout(() => {
              setMessage("");
            }, 3000);
        }
    };

    // Clear the form fields
    const clearForm = () => {
        setEmail('');
        setPassword('');
       
    };

    return (
        <div className={styles.manageUsers}>
            <h1>Manage Users</h1>
            {message && <p className={styles.message}>{message}</p>}
            <form onSubmit={handleAddUser} className={styles.formKong}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
               
                <button className={styles["delete-user-kong"]} type="submit">Add User</button>
            </form>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                       
                        <span>{user.email}</span>
                        <button className={styles["delete-user-kong"]}onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageUsers;
