import React from 'react'
import "./CardUser.css"

export default function CardUser({avatar,name,age}) {
  return (
    <div className='parent'>   
      <div className='children'>
      <img
        src={avatar}
        alt={name}
        />
        <h4 style={{fontSize: "20px"}}>{name}</h4>
        <p>Tuổi: {age}</p>
      </div>
    </div>
  );
 
}
 