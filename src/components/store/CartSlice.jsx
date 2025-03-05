import { createSlice } from "@reduxjs/toolkit"
const initialState={
  items:[],
  totalAmount:0,
  totalQuantity:0

}
export const CartSlice=createSlice({
  name:"cart",
  initialState,
  reducers:{
    addtoCart:(state,actions)=>{

const newItem=actions.payload;
console.log(newItem);

const existingItem=state.items.find(item=>item.id===newItem.id);
if(existingItem){
  const numericValue = newItem.price.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
  const tPrice = parseFloat(numericValue);
  const existingTotalPrice=existingItem.quantity*tPrice;
 existingItem.quantity= Number(existingItem.quantity)+Number(newItem.quantity);
  const newTotalPrice=existingTotalPrice +(tPrice*newItem.quantity);
 
  existingItem.totalPrice = newTotalPrice.toLocaleString('en-IN');
  state.totalAmount+=tPrice*newItem.quantity;
  
}
else{

  const numericValue = newItem.price.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
  const tPrice = parseFloat(numericValue);
  const totalPrice=newItem.quantity*tPrice;
  state.items=[...state.items,{
    id:newItem.id,
    imageUrl:newItem.imageUrl,
    details:newItem.details,
    quantity:Number(newItem.quantity),
    price:newItem.price,
    totalPrice:totalPrice,
  }];
 state.totalAmount+=totalPrice;
state.totalQuantity++;

 
}
    },
  deleteFromCart:(state,action)=>{
const newItemList=state.items.filter((item)=>{
  if(item.id!==action.payload){
    return item;

  }
 
 state.totalAmount=state.totalAmount-item.totalPrice;
});

state.items=newItemList;
state.totalQuantity--;



  },
  clearCart(state) {
    state.items = [];
    state.totalAmount = 0;
    state.totalQuantity=0;
  },
  }
 
});
export const CartActions =CartSlice.actions;
  