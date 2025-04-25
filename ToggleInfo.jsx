import React from 'react'
import { useState } from 'react';

 function ToggleInfo() {
  const [message, setMessage] = useState(true);
  const handleClick = () => {
    setMessage (!message);
  };
  console.log("Message :", {message} );
  return (
    <div>
      <h1>Message: {message ? "Hiện thông tin" : "Ẩn thông tin"}</h1>
      <button onClick={handleClick}>
        Click me !
        </button>
      
    </div>
  )
}

export default ToggleInfo;