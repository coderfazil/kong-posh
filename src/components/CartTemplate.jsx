import { useDispatch } from "react-redux";
import styles from "./Styles/CartTemplate.module.css";
import { CartActions } from "./store/CartSlice";
const CartTemplate=({item})=>{
  const dispatch=useDispatch();
  const handleRemoveBtn=()=>{
    dispatch(CartActions.deleteFromCart(item.id));
  }
  return(
    <div className={styles["kong-cart-container"]}>
      <div className={styles["kong-cart-item"]}>
  <div className={styles["cart-item-img"]}>
    <img src={item.imageUrl}alt="" />
  </div>
  <div className={styles["cart-details"]}>
  <p className={styles["cart-item-details"]}>
  
       {item.details}
  </p>
  
  <div className={styles["cart-remove-btn"]}>
    <button onClick={handleRemoveBtn}>Remove</button>
  </div>
  </div>
  <div className={styles["cart-buying-details"]}>
  <span className={`${styles["span-margin"]} ${styles["price"]}`}>
    <h4>{item.price}</h4>
  </span>
  <span className={`${styles["span-margin"]} ${styles["quantity"]}`}>
    <h4>{item.quantity}</h4>
    </span>
    <span className={`${styles["span-margin"]} ${styles["totalPrice"]}`}>
      <h4>Rs {item.totalPrice.toLocaleString('en-IN')}</h4>
    </span>
    </div>
  
      </div>
      </div>
  );
}
export default CartTemplate;