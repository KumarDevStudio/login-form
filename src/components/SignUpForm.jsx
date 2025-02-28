import React, { useState } from 'react';
import './SignUpForm.css';  // Import the SignUpForm specific styles
import BK from '../assets/background.mp4';

const SignUpForm = () => {
  const [name, setName] = useState("");  // New state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState(""); // To store error messages
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State to toggle confirm password visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name field (optional)
    if (!name.trim()) {
      setError("Name is required!");
      return;  // Don't submit if name is empty
    }

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;  // Don't submit if passwords don't match
    }

    // Validate terms agreement
    if (!agreeTerms) {
      setError("You must agree to the terms and conditions!");
      return;  // Don't submit if terms are not agreed
    }

    // Clear error message if validation passes
    setError("");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Agreed to Terms:", agreeTerms);
  };

  return (
    <>
     <video className="background-video" autoPlay loop muted>
        <source src={BK} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div className="wrapper1">
     

      <form onSubmit={handleSubmit}>
        <h2>Sign Up Form</h2>
        
        <div className="input-field">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Enter your name</label>
        </div>
        
        <div className="input-field">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Enter your email</label>
        </div>
        
        <div className="input-field">
          <input
            type={passwordVisible ? "text" : "password"}  // Toggle between 'text' and 'password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Enter your password</label>
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="password-toggle"
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>
        
        <div className="input-field">
          <input
            type={confirmPasswordVisible ? "text" : "password"}  // Toggle between 'text' and 'password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>Confirm your password</label>
          <button
            type="button"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            className="password-toggle"
          >
            {confirmPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
        
        <div className="terms">
          <label htmlFor="agreeTerms">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <p>I agree to the terms and conditions</p>
          </label>
        </div>

        {/* Display error message if validation fails */}
        {error && <div className="error-message">{error}</div>}

        <button type="submit">Sign Up</button>
        
        <div className="login">
          <p>Already have an account? <a href="/">Log In</a></p> {/* You can replace this with a React Router Link */}
        </div>
      </form>
    </div>
    </>
  );
};

export default SignUpForm;
