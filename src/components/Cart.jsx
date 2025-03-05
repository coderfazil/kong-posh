import { useSelector } from "react-redux";
import styles from "./Styles/Cart.module.css";
import { Link, useNavigate } from "react-router-dom";
import CartTemplate from "./CartTemplate";
const Cart=()=>{
  const navigate=useNavigate();
  const {items}=useSelector(store=>store.cart);
  const{totalAmount}=useSelector(store=>store.cart);
  const subTotal=totalAmount.toLocaleString('en-IN');
  const handleContinueBtn=()=>{
navigate("/");
  }
  const handleCheckout=()=>{
    navigate("/checkout");
  }

  if(items.length===0){
return(
  <div className={styles["empty-cart-container"]}>
  <p className={styles["empty-msg"]}>Your cart is currently empty!
  Continue Shopping</p>
  <Link to="/" className={styles["link"]}>Here</Link>
  </div>
)
  }
  return(
  <div className={styles["kong-cart-frame"]}>
    <h3 className={styles["cart-heading"]}>My Cart</h3>
  <div className={styles["kong-cart-heading"]}>
    <span>
      <h4 className={styles["span-margin"]}>Price</h4>
    </span>
    <span className={styles["span-margin"]}>
      <h4>Quantity</h4>
    </span>
    <span >
      <h4 className={styles["span-margin"]}>Total</h4>
    </span>
    </div>
    {items.map((item)=>(
      <CartTemplate item={item}></CartTemplate>
    ))}
  
    <div className={styles["cart-total"]}>
      <h4 className={styles["cart-subtotal"]}>Subtotal</h4>
      <span>
        <h4 >Rs {subTotal}</h4>
      </span>
    </div>
    <div className={styles["checkout-details"]}>
      <div className={styles["continue-shopping-btn"]}>
        <button onClick={handleContinueBtn}>Continue Shopping</button>
      </div>
      <div className={styles["checkout"]} onClick={handleCheckout}>
        <button>Checkout</button>
      </div>
    </div>
  </div>
 

)
}
export default Cart;