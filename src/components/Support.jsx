import {useState} from "react";

export default () => {
  const [count, setCount] = useState(0)
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
{/*This is an if/else statement
      {(() => {
        if(count === 0) {
          return 'Click to support';
        } else{
          return `Supported ${count} times`;
        }
      })()
      }
*/}

{/*TERNIARY STATEMENT*/}
      {count === 0 ? "Click to support": `Supported ${count} times`}
    </button>
  )
}