import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  // Import necessary routing components
import SignUpForm from './components/SignUpForm';  // SignUpForm component
import LoginForm from './components/LoginForm';  // LoginForm component

const App = () => {
  return (
    <div>
     

      {/* Routing setup */}
      <Routes>
       
        <Route path="/" element={<LoginForm />} />  {/* LoginForm route */}
        <Route path="/signup" element={<SignUpForm />} />  {/* SignUpForm route */}
      </Routes>
    </div>
  );
};

export default App;
