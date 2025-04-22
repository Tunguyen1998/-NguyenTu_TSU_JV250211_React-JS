import React from "react";

export default function ColorBox() {
  const colors = ["red", "black", "blue", "violet"];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: color,
          }}
        >
          <p style={{ color: "white", textAlign: "center", lineHeight: "150px" }}>
            Box
          </p>
          <div style={{backgroundColor:"pink"}}>
          <p style={{ textAlign: "center", color: "black", marginTop: "60px" }}>
            {color}
          </p>
          </div>

        </div>
      ))}
    </div>
  );
}
