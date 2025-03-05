import styles from "./Styles/Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const Footer=()=>{
  return(
    <div className={styles["kong-footer"]}>
    <div className={styles["kong-footer-element-list"]}>
      <div className={styles["kong-footer-elements"]}>
        <h4>Links</h4>
        <ul className={styles["kong-footer-subelements"]}>
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>About Us</a>
          </li>
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>Brands</a>
          </li> 
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>Bulk Orders</a>
          </li> 
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>Join Us</a>
          </li> 
        </ul>
      </div>
      <div className={styles["kong-footer-elements"]}>
        <h4>Policies</h4>
        <ul className={styles["kong-footer-subelements"]}>
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>FAQ</a>
          </li>
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>Privacy Policy</a>
          </li> 
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>Shipping & Returns</a>
          </li> 
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>Terms & Conditions</a>
          </li> 
        </ul>
      </div>
      <div className={styles["kong-footer-elements"]}>
        <h4>Follow Us</h4>
        <ul className={` ${styles["followUS-list"]}`}>
          <li className={styles["subelements-items"]}>
            <a href="#" className={`${styles["subelements-items-aTag"]} ${styles["followUs-aTag"]}`} ><FaFacebookSquare />  </a>
          </li>
          <li className={styles["subelements-items"]}>
            <a href="#" className={`${styles["subelements-items-aTag"]} ${styles["followUs-aTag"]}`}><FaInstagram /></a>
          </li> 
        </ul>
      </div>
      <div className={styles["kong-footer-elements"]}>
        <h4>Contact</h4>
        <ul className={styles["kong-footer-subelements"]}>
          <li className={styles["subelements-items"]}>
            <a href="#" className={styles["subelements-items-aTag"]}>fazilandubaid@gmail.com</a>
          </li>
          <li className={styles["subelements-items"]}>
            91-1234567890
          </li>
          <li className={styles["subelements-items"]}>
           Srinagar,Kashmir
          </li>
          <li className={styles["subelements-items"]}>
         j&K - 190003,India
          </li>
        </ul>
      </div>
    </div>
    <div className={styles["kong-copyright"]}>
       Copyright <FaRegCopyright /> 2024
      </div>
    </div>
  );


}
export default Footer;