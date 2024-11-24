// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={() => navigate('/flowers')}>View Flowers</button> 
    </div>
  );
}

export default HomePage;