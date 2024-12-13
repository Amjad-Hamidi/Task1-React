// Import React and the 'useState' hook to manage state in this functional component.
import React, { useState } from 'react'

// Export a React functional component named 'App'.
export default function App() {
  // Declare a new state variable, which we'll call "counter", and initialize it as 0.
  const [counter, setCounter] = useState(0); // counter is a state variable
  const [showProduct,setShowProduct] = useState(false); // showProduct is a state variable
 
  const increase = () =>{
    setCounter(counter + 1);
  }

  const toggleProduct = () =>{
    setShowProduct(!showProduct);
  }

  return (
    <div className='w-75 m-auto text-center'>
      <h2>Counter is {counter}</h2>
      <button onClick={increase} className={showProduct ? "me-1" : "mb-1"}>Increase</button> {/* me-1 : adds a margin to the right*/}
      <button onClick={toggleProduct}>{showProduct ? "Hide Product" : "Show Product"}</button> {/* mb-1 : adds a margin to the bottom */}
      {
        showProduct && (
          <div>
            <h2>Product Details</h2>
            <p><strong>Name: </strong>Iphone14</p>
            <p><strong>Price: </strong>$1200</p>
            <p><strong>Description: </strong>A premium smartphone with advanced features.</p>
          </div>
        )
      }
    </div>
  )
}