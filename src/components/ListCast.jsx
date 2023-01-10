import { useState, useEffect } from "react";

export default () => {
  const [cast, setCast] = useState([])

  async function fetchCast(){
    const response = await fetch('cast.json');
    setCast (await response.json())
  }

  useEffect(() => {
    fetchCast();
  });

  return (
// We're creating a grid with different columns with the pictures
    <div style={{
      display:"grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: `1rem`
    }}>
{/*We're associating the grid with the image*/}
      {cast.map(member => (
        <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
      ))
      }
    </div>
// Onece finished our complement, we have to implement it in the App
  )
}