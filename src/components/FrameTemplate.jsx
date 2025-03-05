import { Link, useNavigate } from "react-router-dom";
import styles from "./Styles/FrameTemplate.module.css";

const FrameTemplate=({data})=>{
  
  const navigate=useNavigate();
  const handleOnCLick=(event)=>{
navigate(`/products/${event.target.id}`);

  }
return(
 <div className={styles["kong-frame-container"]} id={data.id} onClick={(event)=>{handleOnCLick(event)}}>
    <div className={styles["frame-img"]}>
      <img src={data.imageUrl} alt="Product"  id={data.id} />
    </div>
    <p className={styles["kong-frame-details"]}  id={data.id}>{data.details}</p>
    <div className={styles["kong-frame-pricing"]}id={data.id}>
      <p id={styles["dashed-price"]} >{data.dashedPrice}</p>
      <p id={styles["price"]}>{data.price}</p>
    </div>
  </div>
 
)
}
export default FrameTemplate;