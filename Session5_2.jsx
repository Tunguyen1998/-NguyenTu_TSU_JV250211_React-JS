import React, { useEffect, useState } from "react";

function LoggerCounter() {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    console.log("Componet da duoc tao !");
  }, []);

  useEffect(() => {
    console.log("So hien tai la :" + count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
export default LoggerCounter;
