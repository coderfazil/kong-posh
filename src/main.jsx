import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import {Provider, useSelector} from 'react-redux'

import kongPoshStore from './components/store/index.js'

import Collections from './components/Collections.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import ManageProducts from './components/ManageProducts.jsx'
import initializeStore from './components/store/index.js'
import ManageUsers from './components/ManageUsers.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import AdminSignup from './components/AdminSignup.jsx'
import ManageAdmin from './components/ManageAdmin.jsx'
import ManageOrders from './components/ManageOrders.jsx'




const router=createBrowserRouter([
  {path:"/" ,element:<App />, children:[
    {path:"/",element:<Home />},
    {path:"/login",element:<Login />},
    {path:"/signup",element:<Signup />},
   
    {path:"/collections/:id",element:<Collections/>},
    
    {path:"/products/:id",element:<Products />},
    {path:"/cart",element:<Cart />},
    {path:"/checkout",element:<Checkout />},
  
   
    
    
  ]

  },
 

  {path:"/admin-panel",element:<AdminPanel />},
  {path:"/admin/products",element:<ManageProducts />},
  {path:"/admin/users",element:<ManageUsers />},
 
  {path:"/admin/manage-admins",element:<ManageAdmin />},
  {path:"/admin/orders",element:<ManageOrders />},


  {path:"/admin-login",element:<AdminLogin />},
  {path:"/admin-signup",element:<AdminSignup />},
]);

initializeStore().then((kongPoshStore) => {
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={kongPoshStore}>
     
    <RouterProvider router={router} />
    
    </Provider>
  
  </StrictMode>,
)
});
