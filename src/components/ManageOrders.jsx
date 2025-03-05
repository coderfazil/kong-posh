import { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API calls
import styles from "./Styles/ManageOrders.module.css"; // Adjust path as needed

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders"); // Adjust URL as necessary
        setOrders(response.data);
      } catch (err) {
        setError("Error fetching orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${orderId}`); // Delete order by ID
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId)); // Update state
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles["manage-orders-container"]}>
      <h2>Manage Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className={styles["orders-table"]}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Payment Method</th>
              <th>Total Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.email}</td>
                <td>{order.paymentMethod}</td>
                <td>Rs {order.totalAmount.toLocaleString('en-IN')}</td>
                <td>
                  <button  onClick={() => handleDelete(order._id)} className={styles["delete-button-kong"]}>Delete</button>
                  {/* Add edit functionality if needed */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageOrders;
