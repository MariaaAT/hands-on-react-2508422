import { useState, useEffect} from 'react';
{/*This document title is the title that will appear on the tab once we open the website in our browser*/}
const pageTitle = document.title;

export default () => {
  const [count, setCount] = useState(0)
  const [penis, setPenis] = useState(0)
  const [className, setClassName] = useState("")

  useEffect(() => {
    if (count > 0){
      document.title = `${pageTitle} -- ${count} -- ${penis}`
    }
  })

  // Change the color of the button depending if the count is even or odd
  useEffect(() => {
    if (count % 2 === 0) {
      setClassName("outline")
    } else {
      setClassName("")
    }
  }, [count])
// The return statement can only return one root element
  return (
    <> 
      <button className={className} onClick={() => setCount(count + 1)}>
        {count === 0 ? "Click to support": `Supported ${count} times`}
      </button>
      <button className="outline" onClick={() => setPenis(penis + 1)}>
        {`${penis} cm`}
      </button>
    </>
  )
}