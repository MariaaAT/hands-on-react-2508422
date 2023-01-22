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
// Next line sets a hover and everytime we pass the mouse over the figures, the name appears
        <a key={member.id} data-tooltip={member.name}>
        <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        </a>
      ))
      }
    </div>
// Onece finished our complement, we have to implement it in the App
  )
}