import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Styles/ManageProducts.module.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [heading, setHeading] = useState('');
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [details, setDetails] = useState('');
    const [dashedPrice, setDashedPrice] = useState('');
    const [price, setPrice] = useState('');
   
    const [message, setMessage] = useState('');

    // Fetch products from the backend
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle adding a new product
    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/products', {
                heading,
                category,
                id,
                imageUrl,
                details,
                dashedPrice,
                price,
            });
            setProducts([...products, response.data]);
            setMessage('Product added successfully!');
            clearForm();
            setTimeout(() => {
              setMessage("");
            }, 3000);
        } catch (error) {
            console.error('Error adding product:', error);
            setMessage('Failed to add product.');
            setTimeout(() => {
              setMessage("");
            }, 3000);
        }
    };

    // Handle deleting a product
    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            setProducts(products.filter(product => product._id !== id));
            setMessage('Product deleted successfully!');
            setTimeout(() => {
              setMessage("");
            }, 3000);
        } catch (error) {
            console.error('Error deleting product:', error);
            setMessage('Failed to delete product.');
            setTimeout(() => {
              setMessage("");
            }, 3000);
        }
    };

    // Clear the form
    const clearForm = () => {
        setHeading('');
        setCategory('');
        setId('');
        setImageUrl('');
        setDetails('');
        setDashedPrice('');
        setPrice('');
    };

    return (
        <div className={styles.manageProducts}>
            <h1>Manage Products</h1>
            {message && <p className={styles.message}>{message}</p>}
            <form onSubmit={handleAddProduct} className={styles.form}>
                <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} required />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="number" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} required />
                <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                <input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} required />
                <input type="text" placeholder="Price" value={dashedPrice} onChange={(e) => setDashedPrice(e.target.value)} required />
                <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <button type="submit">Add Product</button>
            </form>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <img src={product.imageUrl} alt={product.category} style={{ width: '50px', marginRight: '10px' }} />
                        <span>{product.details}</span>
                        <button  className={styles["kong-prod-manage"]}onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageProducts;
