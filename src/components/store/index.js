
import {configureStore, createSlice} from "@reduxjs/toolkit";

import { DataSlice } from "./DataSlice";
import { CartSlice } from "./CartSlice";
import userSlice from "./UserSlice";
import axios from 'axios';
const fetchInitialData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/products');
    console.log("hii");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return [];
  }
};


 
export const CategorySlice=createSlice({
  name:'category',
  initialState:[""],
  
  reducers:{
    setCategory:(state,action)=>{
state[0]=action.payload;


    }
  }
});
export const CategoryActions=CategorySlice.actions;
const initializeStore = async () => {
  const products = await fetchInitialData();
const kongPoshStore=configureStore({
  reducer:{
   
    category:CategorySlice.reducer,
    data:DataSlice.reducer,
    cart:CartSlice.reducer,
    user:userSlice.reducer,

  },
  preloadedState: {
    data: {
      products:products, // Set initial products from the backend
      loading: false,
      error: null,
    },
  },
});
return kongPoshStore;
};
export default initializeStore;