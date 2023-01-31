import React, { useState } from 'react'
import "./counter.css"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const incrementHandler = () => {
        setCounter(counter + 1)
    }
    const resetHandler = () => {
        setCounter(0)
    }
    const decrementHandler = () => {
        setCounter(counter - 1)
    }
  return (
    <div className='container'>
        <h1 className='header'>Counter</h1>
        <p>{counter}</p>
        <div className='buttons'>
            <button className='decrement' onClick={decrementHandler}>Decrement</button>
            <button className='reset' onClick={resetHandler}>Reset</button>
            <button className='increment' onClick={incrementHandler}>Increment</button>
        </div>

    </div>
  )
}

export default Counter