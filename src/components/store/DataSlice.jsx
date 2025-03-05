import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch products from backend
export const fetchProducts = createAsyncThunk('data/fetchProducts', async () => {
  const response = await axios.get('http://localhost:5000/api/products'); // Backend API endpoint
  return response.data;
});

export const DataSlice=createSlice({
  name:'data',
  initialState:{
    products: [],
    loading: false,
    error: null,
},
 
  
reducers:{
  setProducts: (state, action) => {
    state.products = action.payload; // Update products with the fetched data
  },
  addProduct: (state, action) => {
    state.push(action.payload);
  },
  updateProduct: (state, action) => {
    const index = state.findIndex(product => product.id === action.payload.id);
    if (index !== -1) {
      state[index] = { ...state[index], ...action.payload };
    }
  },
  deleteProduct: (state, action) => {
    return state.filter(product => product.id !== action.payload);
  },

 
},
extraReducers: (builder) => {
  builder
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
},

});
export const DataActions=DataSlice.actions;