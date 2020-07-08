import React, { useState } from "react"

const  App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count -1)
  const double = () => setCount(count *2)
  const reset = () => setCount(0)
  const increment2 = () => setCount(previousCount => previousCount +1 )
  const decrement2 = () => setCount(previousCount => previousCount -1 )
  const devide3 = () => setCount(previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  )
  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        関数を使ったsetCount<br />
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={double}>x2</button>
      </div>
      <div>
        <button onClick={devide3}>3の倍数は3で割る</button>
      </div>
      <div>
      <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
