import React, { useState } from 'react';
import './LoginForm.css';  // Import the LoginForm specific styles
import { Link } from 'react-router-dom';  // Assuming you're using React Router
import BK from '../assets/background.mp4'; // Your background video

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle for password visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", remember);
  };

  return (
    <>
      {/* Background video */}
      <video className="background-video" autoPlay loop muted>
        <source src={BK} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form wrapper */}
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>

          {/* Email input field */}
          <div className="input-field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Enter your email"
            />
            <label>Enter your email</label>
          </div>

          {/* Password input field */}
          <div className="input-field">
            <input
              type={passwordVisible ? "text" : "password"}  // Toggle between 'text' and 'password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Enter your password"
            />
            <label>Enter your password</label>

            {/* Password visibility toggle */}
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="password-toggle"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>

          {/* Remember me and forgot password */}
          <div className="forget">
            <label htmlFor="remember">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <p>Remember me </p>
            </label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          {/* Submit button */}
          <button type="submit">Log In</button>

          {/* Register link */}
          <div className="register">
            <p>Don't have an account? <Link to="/signup">Register</Link></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
