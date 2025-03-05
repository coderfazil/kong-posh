import React, { useState } from "react";
import styles from "./Styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async(e) => {
  
    e.preventDefault();
   
    
    if (!email || !password) {
      setMessage("Please fill in all fields.");
    } else {
      try {
        
        // Send a request to the backend to validate the user
        const response = await axios.post("http://localhost:5000/api/users/login", {
          email,
          password,
        });
       

        // If login is successful, redirect to home
        if (response.status === 200) {
          setMessage("Login successful.");
          setEmail(""); // Clear email input
          setPassword(""); // Clear password input
          setTimeout(() => {
            navigate("/");
            setMessage("");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        // Handle errors such as incorrect credentials
        setMessage(error.response ? error.response.data.message : "Login failed.");
      }
    }
    
   
    
  };

  return (
    <div className={styles["login-container"]}>
      <h2>Login</h2>
      {message && <p className={styles["message"]}>{message}</p>}
      <form onSubmit={handleLogin} className={styles["form-kong"]}>
        <input
        className={styles["input-kong"]}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        className={styles["input-kong"]}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles["login-kong-btn"]}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
