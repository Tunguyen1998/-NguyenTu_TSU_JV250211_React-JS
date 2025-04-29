import React , { useState } from 'react';

export default function Session5_1() {
  const colors = ["white","red", "black", "pink", "purple", "violet","green"];
  const [color, setColor] = useState();
  const [index, setIndex] = useState(0);

  const handleChangeColor = () => {
    const newColor = colors[index];
    setColor(newColor);

    setIndex(index + 1);

    const nextIndex = (index + 1) % colors.length;
    setIndex(nextIndex);
    
    
  }


  return (
    <div>
      <div style={{width : "200px", height: "200px", border: "1px solid black", borderRadius:10, backgroundColor : color }}></div>
      <br />
      <button onClick={handleChangeColor} >Doi mau</button>
    </div>
  )
}
