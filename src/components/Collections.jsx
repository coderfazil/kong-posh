import { useDispatch, useSelector } from "react-redux";
import ComponentFrame from "./ComponentFrame";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { CategoryActions } from "./store";

const Collections=()=>{
 const [data,setData]=useState([]);
 const c=useParams();
 const category=useSelector(store=>store.category);
 const {products}=useSelector(store=>store.data);
 
 
 
 const dispatch=useDispatch();
 useEffect(() => {
  if (c?.id) {
    dispatch(CategoryActions.setCategory(c.id));
  }
}, [c, dispatch]);


 
 


 

 
   useEffect(()=>{
   

    if (category && category.length && products && products.length) {
      const filteredData = products.filter(item => {
      
        return item.category === category[0]; // Ensure exact match
       
      });
    
   
    
      setData(filteredData);
    }
   
  
 
 },[category,products]);





 return( 
   
   <ComponentFrame collectionData={data}></ComponentFrame>
 )
}
export default Collections;
