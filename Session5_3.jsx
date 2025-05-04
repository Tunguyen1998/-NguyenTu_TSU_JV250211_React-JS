import React, { useRef, useState } from "react";

function Watch() {
  const refSecond = useRef(0);
  const second = refSecond.current;

  const refInterval = useRef(null);
  
  const [tick, setTick] = useState(0);

  const handleStart = () => {
    if (refInterval.current) {
        clearInterval(refInterval.current);
    }

    refInterval.current = setInterval(() => {
      refSecond.current += 1;
      setTick(prev => prev + 1);
    }, 1000);


  
  };
  const handleStop = () => {
    if (refInterval.current) {
        clearInterval(refInterval.current);
        refInterval.current = null ;
    }
    };
    const handleReset = () => {
        if (refInterval.current) {
            clearInterval(refInterval.current); 
            refInterval.current = null ;
        }
        refSecond.current = 0 ;
        setTick(0);
        
    };
    
  return (
    <div>
      <h1>{second} giay</h1>
      <button
        style={{ margin: "20px", borderColor: "black" }}
        onClick={handleStart}
      >
        Bat dau
      </button>
      <button
        style={{ margin: "20px", borderColor: "black" }}
        onClick={handleStop}
      >
        Dung
      </button>
      <button
        style={{ margin: "20px", borderColor: "black" }}
        onClick={handleReset}
      >
        Cai dat lai
      </button>
    </div>
  );
}
export default Watch;
