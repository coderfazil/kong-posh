import { Form, useNavigate, useParams } from "react-router-dom";
import styles from "./Styles/Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CartActions } from "./store/CartSlice";
const Products=()=>{
  const {id}=useParams();
  const navigate=useNavigate();
 
 
  const {products}=useSelector(store=>store.data);
  
  const data=products.filter((item)=>{
   
    if(item.id===Number(id))
      return item;
  })
 
    // Use state to manage the quantity value
    const [quantity, setQuantity] = useState(1); // Default value is 1
  
    // Handle changes when the user types in the input
    const handleQuantityChange = (event) => {
      // Update the state with the new input value
      setQuantity(event.target.value);
    };
    const dispatch=useDispatch();
   const handleAddToCart=()=>{
dispatch(CartActions.addtoCart(
  {
    id:Number(id),
    imageUrl:data[0].imageUrl,
    details:data[0].details,
    quantity,
    price:data[0].dashedPrice
  }
))
   }
    // Buy Now function
  const handleBuyNow = () => {
    const numericValue = data[0].dashedPrice.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
  const price = parseFloat(numericValue);
    const purchaseData = {
      id: Number(id),
      imageUrl: data[0].imageUrl,
      details: data[0].details,
      quantity,
      price,
    };

    // Directly navigate to the checkout with product data
    navigate("/checkout", { state: { purchaseData } });
  };
  
  
 
return(
  <div className={styles["products-details"]}>
    <div className={styles["kong-prod-img"]}>
      <img src={data[0].imageUrl} alt="product" />
    </div>
    <div className={styles["prod-details"]}>
      <h3>{data[0].details}</h3>
      <div className={styles["kong-prod-prices"]}>
      <p className={styles["price"]}>{data[0].price}</p>
      <p className={styles["dashed-price"]}>{data[0].dashedPrice}</p>
      </div>
      <div className={styles["prod-quantity"]}>
        <label htmlFor="" className={styles["size-label"]}>Quantity</label>
        <input type="number" id="quantity" name="quantity" value={quantity} min="1" onChange={handleQuantityChange} />
       </div>
     
        <div className={styles["kong-prod-btn"]} onClick={handleAddToCart}><button type="button" className={styles["ad-to-cart"]} >Add To Cart</button></div>
       
        <div className={styles["kong-buy-btn"]}>
        <button type="button"className={styles["buy-it-now"]} onClick={handleBuyNow}>Buy It Now</button>
        </div>
      </div>
    </div>
  
)
}
export default Products;