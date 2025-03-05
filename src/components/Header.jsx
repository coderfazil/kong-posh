import styles from "./Styles/Header.module.css";
import {Link, replace, useNavigate} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CategoryActions } from "./store/index.js";
import { useState } from "react";
const Header=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");  // State to hold search messages
  
  // Get product data from Redux store
  const {products} = useSelector(store => store.data);
   // Handle search input change
   const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // Perform search when the form is submitted
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    // Filter product based on the search query
    const filteredProduct = products.find(item => 
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (filteredProduct) {
    // Navigate to the product's detail page
    navigate(`/collections/${filteredProduct.category}`);
    
  } else {
    setMessage("Product not found.");
  }

  // Clear the message after 2 seconds
  setTimeout(() => setMessage(""), 3000);
};


  const handleOnCLick=(event)=>{
   navigate(`/collections/${event.target.id}` );
  
  }
  const {totalQuantity}=useSelector(store=>store.cart);
 
 
return(
  <>{/* top header section starts */}
<div className={styles["header"]}>
  <div className={styles["header-elements"]}>

  <Link to="/login" className={styles["butt"]}>Log In</Link>

<p id={styles["or"]}>or</p>
  <Link to="/signup"className={styles["butt"]}>SignUp</Link>
  <Link to="/cart" className={styles["butt"]}><FaShoppingCart /> Cart {totalQuantity}</Link>
  <form action="" className={styles["header-formk"]} onSubmit={handleSearchSubmit}>

  <button className={styles["search-icon"]}><IoSearchSharp /></button>
  <input type="text" className={styles["header-input-k"]} placeholder="Search" 
  value={searchQuery}
  onChange={handleSearchChange}
  />
  </form>

  </div>

</div>
{/* top header section ends */}
{/* Display the search message */}
{message && (
        <div className={styles["search-message"]}>
          {message}
        </div>
      )}


{/* second header section starts */}
<div className={styles["site-header"]}>
  <h1 id={styles["headerId"]}>Kong-Posh</h1>
  <div className={styles["siteHeader-list"]}>
  <div className={styles["anchor-elements"]}>
  < Link to="/"className={`${styles["a-Lists"]} ${styles["header-home"]}`}>Home</Link>
  </div>
    <div className={styles["anchor-elements"]}>
      <a href="#" className={styles["a-Lists"]}>Fashion <MdOutlineArrowDropDown /></a>
      <ul className={styles["anchorlist"]}>
         
      <div className={styles["header-listItems"]}><li className={styles["listItems-subList"]}id="Kashmiri-Pheran" onClick={(event)=>{
        handleOnCLick(event)
      }}>kashmiri Pherans</li>
      <li className={styles["listItems-subList"]} id="Ponchos" onClick={(event)=>{
        handleOnCLick(event)
      }} >Panchos</li>
        <li className={styles["listItems-subList"]} id="Shawls" onClick={(event)=>{
        handleOnCLick(event)
      }}>Shawls</li>
        </div>
      </ul>
  </div>

  <div className={styles["anchor-elements"]}>
      <a href="#" className={styles["a-Lists"]}>Food <MdOutlineArrowDropDown /></a>
      <ul className={styles["anchorlist"]}>
         
      <div className={styles["header-listItems"]}><li className={styles["listItems-subList"]} id="Dry-fruits" onClick={(event)=>{
        handleOnCLick(event)
      }}>Dry Fruits & Nuts</li>
        <li className={styles["listItems-subList"]} id="Honey" onClick={(event)=>{
        handleOnCLick(event)
      }}>Honey</li>
        <li className={styles["listItems-subList"]} id="Kashmiri-kehwa" onClick={(event)=>{
        handleOnCLick(event)
      }}>Tea & Kehwa</li>
        <li className={styles["listItems-subList"]} id="Safron and Spices" onClick={(event)=>{
        handleOnCLick(event)
      }}>Safron & Spices</li>
        </div>
      </ul>
  </div>

  <div className={styles["anchor-elements"]}>
      <a href="#" className={styles["a-Lists"]}>Decor <MdOutlineArrowDropDown /></a>
      <ul className={styles["anchorlist"]}>
        
        <div className={styles["header-listItems"]}>
          <li className={styles["listItems-subList"]} id="Copperware" onClick={(event)=>{
        handleOnCLick(event)
      }}>CopperWare</li>
        <li className={styles["listItems-subList"]} id="Cushion-Covers" onClick={(event)=>{
        handleOnCLick(event)
      }}>Cusion Covers</li>
        <li className={styles["listItems-subList"]}id="Paper-Mache-Products" onClick={(event)=>{
        handleOnCLick(event)
      }}>Paper Mache Products</li>
        <li className={styles["listItems-subList"]}id="Walnut-Wood-Products" onClick={(event)=>{
        handleOnCLick(event)
      }}>Walnut Wood Products</li>
        </div>
      </ul>
  </div>

  <div className={styles["anchor-elements"]}>
      <a href="#" className={styles["a-Lists"]}>Pashmina <MdOutlineArrowDropDown /></a>
      <ul className={styles["anchorlist"]}>
        <div className={styles["header-listItems"]}><li className={styles["listItems-subList"]}id="Pashmina-Shawls" onClick={(event)=>{
        handleOnCLick(event)
      }}>Pure Pashmina Shawls</li>
        <li className={styles["listItems-subList"]} id="Pashmina-Stoles" onClick={(event)=>{
        handleOnCLick(event)
      }}>Pure Pashmina Stoles</li>
        <li className={styles["listItems-subList"]} id="Pashmina-Men-Shawls" onClick={(event)=>{
        handleOnCLick(event)
      }}>Pashmina Mens</li>
        </div>
      </ul>
  </div>

</div>
</div>
{/* second header section ends */}
</>
)
}
export default Header;