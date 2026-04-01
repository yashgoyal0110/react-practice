import { useEffect, useState } from 'react'
import { SI } from './SI';


function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

// useEffect(()=>{
// console.log("page rendered")
// },[])  // dependecy array is empty, so it will run only once when the component is mounted

  return (
    <>
    <SI />
      {/* <div style={{
        textAlign: "center", marginTop: "50px"
      }}>
        <h2>{count}</h2>
        <button onClick={increment} disabled={count >= 10}>Increment</button>
        <button onClick={decrement} disabled={count <= 0}>Decrement</button>
        <button onClick={reset} disabled={count <= 0}>Reset</button>
      </div> */}
    </>
  )
}

export default App
