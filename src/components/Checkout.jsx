import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import styles from "./Styles/Checkout.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { CartActions } from "./store/CartSlice";
import axios from "axios"; // Import axios for API calls

const Checkout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { items, totalAmount } = useSelector((store) => store.cart);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const purchaseData = location.state?.purchaseData; // Data from the Buy It Now

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const orderData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      paymentMethod: data.paymentMethod,
      totalAmount: purchaseData ? purchaseData.price * purchaseData.quantity : totalAmount,
      items: items, // Include the cart items if necessary
      
      
    };
    console.log(orderData);

    try {
      await axios.post('http://localhost:5000/api/orders', orderData); // Send order data to the backend
      dispatch(CartActions.clearCart());
      navigate("/", { state: { orderPlaced: true } });
    } catch (error) {
      console.error("Error placing order:", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  useEffect(() => {
    if (purchaseData) {
      console.log("Buy Now purchase:", purchaseData);
    }
  }, [purchaseData]);

  const totalItems = purchaseData ? purchaseData.quantity : items.reduce((total, item) => total + item.quantity, 0);
  const amount = purchaseData ? purchaseData.price * purchaseData.quantity : totalAmount;

  return (
    <div className={styles["checkout-container"]}>
      <h2>Checkout</h2>
      <div className={styles["checkout-item-details"]}>
        <p>Total Amount: Rs {amount.toLocaleString('en-IN')}</p>
        <p>Number of Items Ordered: {totalItems}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles["checkout-input-label"]}>Name</label>
        <input 
          type="text" 
          className={styles["checkout-input"]} 
          {...register("name", { required: "Name is required" })} 
        />
        {errors.name && <span className={styles["checkout-error"]}>{errors.name.message}</span>}

        <label className={styles["checkout-input-label"]}>Phone Number</label>
        <input 
          type="tel" 
          className={styles["checkout-input"]} 
          {...register("phone", { 
            required: "Phone number is required", 
            pattern: { 
              value: /^[0-9]{10}$/, 
              message: "Invalid phone number" 
            } 
          })} 
        />
        {errors.phone && <span className={styles["checkout-error"]}>{errors.phone.message}</span>}

        <label className={styles["checkout-input-label"]}>Email</label>
        <input 
          type="email" 
          className={styles["checkout-input"]} 
          {...register("email", { required: "Email is required" })} 
        />
        {errors.email && <span className={styles["checkout-error"]}>{errors.email.message}</span>}

        <label className={styles["checkout-input-label"]}>Payment Method</label>
        <select 
          className={styles["checkout-select"]} 
          {...register("paymentMethod", { required: true })} 
          onChange={handlePaymentMethodChange}
        >
          <option value="">Select payment method</option>
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
          <option value="paypal">PayPal</option>
          <option value="cash-on-delivery">Cash On Delivery</option>
        </select>
        {errors.paymentMethod && <span className={styles["checkout-error"]}>Please select a payment method</span>}

        {/* Show additional fields based on selected payment method */}
        {paymentMethod === "card" && (
          <>
            <label className={styles["checkout-input-label"]}>Card Number</label>
            <input 
              type="text" 
              className={styles["checkout-input"]} 
              {...register("cardNumber", { 
                required: "Card number is required", 
                pattern: { 
                  value: /^[0-9]{16}$/, 
                  message: "Invalid card number" 
                } 
              })} 
            />
            {errors.cardNumber && <span className={styles["checkout-error"]}>{errors.cardNumber.message}</span>}

            <label className={styles["checkout-input-label"]}>Expiry Date (MM/YY)</label>
            <input 
              type="text" 
              className={styles["checkout-input"]} 
              {...register("expiry", { 
                required: "Expiry date is required", 
                pattern: { 
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/, 
                  message: "Invalid expiry date" 
                } 
              })} 
            />
            {errors.expiry && <span className={styles["checkout-error"]}>{errors.expiry.message}</span>}
          </>
        )}

        {paymentMethod === "upi" && (
          <>
            <label className={styles["checkout-input-label"]}>UPI ID</label>
            <input 
              type="text" 
              className={styles["checkout-input"]} 
              {...register("upiId", { 
                required: "UPI ID is required" 
              })} 
            />
            {errors.upiId && <span className={styles["checkout-error"]}>{errors.upiId.message}</span>}
          </>
        )}

        {paymentMethod === "paypal" && (
          <>
            <label className={styles["checkout-input-label"]}>PayPal Email</label>
            <input 
              type="email" 
              className={styles["checkout-input"]} 
              {...register("paypalEmail", { 
                required: "PayPal email is required" 
              })} 
            />
            {errors.paypalEmail && <span className={styles["checkout-error"]}>{errors.paypalEmail.message}</span>}
          </>
        )}

        <button type="submit" className={styles["checkout-button"]}>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
