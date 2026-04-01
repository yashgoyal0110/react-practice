import { useState } from "react";

export function SI(){
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

    const calculateSI = () => {
        const si = (principle * rate * time) / 100;
        setResult(si);
    }

    function resetValues(){
        setPrinciple(0);
        setRate(0);
        setTime(0);
        setResult(0);
    }
    
    return (
        <div style={{
            textAlign : "center", marginTop: "50px"
        }}>
            <h1>SI calculator</h1>

            <input
            type="number"
            placeholder="enter principle"
            value={principle}
            onChange={(e)=>setPrinciple(e.target.value)}
            />

             <input
            type="number"
            value={rate}
            onChange={(e)=>setRate(e.target.value)}
            />

             <input
            type="number"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            />

            <button onClick={calculateSI}>Calculate SI</button>
            <button onClick={resetValues}>Reset</button>
            <h2>Simple Interest: {result}</h2>

        </div>
    )
}