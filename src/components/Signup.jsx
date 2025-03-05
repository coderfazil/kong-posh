import React, { useState } from "react";
import styles from "./Styles/Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserError, selectUserLoading } from "./store/UserSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const dispatch=useDispatch();

  const handleSignup = async(e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    } else if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    } 
      try {
        // Send user data to the backend
        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error("Signup failed");
        }
  
        const data = await response.json();
        setMessage("Signup successful. Redirecting...");
        setEmail(""); // Clear email input
          setPassword(""); // Clear password input
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        setMessage(error.message);
      }
    
    
  };

  return (
    <div className={styles["signup-container"]}>
      <h2>Sign Up</h2>
      {message && <p className={styles["message"]}>{message}</p>}
      <form onSubmit={handleSignup} className={styles["signup-kong-form"]}>
        <input
        className={styles["signup-kong-input"]}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        className={styles["signup-kong-input"]}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
        className={styles["signup-kong-input"]}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className={styles["signup-kong-btn"]}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
