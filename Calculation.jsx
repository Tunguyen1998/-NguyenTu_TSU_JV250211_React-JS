import React from 'react'

function Cong(a) { return a + a };
function Tru(a) { return a - a };
function Nhan(a) { return a * a };
function Chia(a) {return a / a };

 const Calculation = () => {
    const b = 10;

  return (
    <div>
        <h1>Danh sách kết quả</h1>
        <ul>
            <li>{b} + {b} = {Cong(b)}</li>
            <li>{b} - {b} = {Tru(b)}</li>
            <li>{b} * {b} = {Nhan(b)}</li>
            <li>{b} / {b} = {Chia(b)}</li>
        </ul>

    </div>
    
  )
};

export default Calculation;