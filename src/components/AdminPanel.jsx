// AdminPanel.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles/AdminPanel.module.css';



const AdminPanel = () => {
  

  return (
    <div className={styles.adminPanel}>
      <h1>Admin Dashboard</h1>
      <nav className={styles.navLinkskong}>
        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/users">Manage Users</Link>
        <Link to="/admin/manage-admins">Manage Admins</Link>
        <Link to="/admin/orders">Manage Orders</Link>
        
      </nav>
    </div>
  );
};

export default AdminPanel;
