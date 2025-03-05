import { useEffect, useState } from "react";
import styles from "./Styles/Home.module.css";
import FrameTemplate from "./FrameTemplate";
import HomeFrame from "./HomeFrame";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProducts } from "./store/DataSlice";

const Home = () => {
  const [image, setImage] = useState("../../public/heroImg-2.JPG");
  const [active, setActive] = useState(false);
  const buttons = ["button-1", "button-2", "button-3", "button-4"];
  const imageUrls = [
    "../../public/heroImg-2.jpg",
    "../../public/hero-3.jpg",
    "../../public/hero-4.jpg",
    "../../public/hero-5.jpg",
  ];
  
  const handleHeroContainer = (index) => {
    setImage(imageUrls[index]);
    setActive(index);
  };

  const dispatch = useDispatch();
  const {products}= useSelector((store) => store.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Only filter if `data` is an array and it has been loaded
  const shawlData = Array.isArray(products)
    ? products.filter((item) => item.category === "Shawls")
    : [];
  
  const ponchosData = Array.isArray(products)
    ? products.filter((item) => item.category === "Ponchos")
    : [];
  
  const pheranData = Array.isArray(products)
    ? products.filter((item) => item.category === "Kashmiri-Pheran")
    : [];

  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state?.orderPlaced) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        navigate("/", { replace: true, state: {} });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <>
      {showMessage && (
        <div className={styles["success-message"]}>
          <p>Your order has been placed successfully!</p>
        </div>
      )}

      <div className={styles["kong-hero-container"]}>
        <div className={styles["kong-hero-slides"]}>
          <img src={image} alt="slide-1" />
        </div>
      </div>

      <div className={styles["control-hero-container"]}>
        {buttons.map((button, index) => (
          <div className={`${styles["controler"]}`} key={button}>
            <button
              className={`${styles["hero-btns"]} ${
                active === index ? styles["hero-btns-active"] : ""
              }`}
              onClick={() => {
                handleHeroContainer(index);
              }}
            ></button>
          </div>
        ))}
      </div>

      {/* Render HomeFrames with the filtered data */}
      <HomeFrame frameData={pheranData}></HomeFrame>
      <HomeFrame frameData={shawlData}></HomeFrame>
      <HomeFrame frameData={ponchosData}></HomeFrame>
    </>
  );
};

export default Home;
