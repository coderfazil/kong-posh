import FrameTemplate from "./FrameTemplate";
import styles from "./Styles/HomeFrame.module.css";

const HomeFrame=({frameData})=>{
return(
  <div className={styles["kong-home-frame-1"]} >
  <p><h3 className={styles["kong-heading"]}>{frameData[0].heading}</h3></p>
  <div className={styles["kong-home-container-1"]}>
{
frameData.slice(0,4).map((data)=>(
<FrameTemplate data={data}></FrameTemplate>
))
}
  </div>
  </div>
)
}
export default HomeFrame;