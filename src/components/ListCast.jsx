import { useState, useEffect } from "react";

export default ({onChoice}) => {
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: '1rem'
    }}>
{/* 
  
      <ul>
        {
          cast.map( (member, index) => (<li>{member.name}, {index}</li>))
        }
      </ul>
 */}
      {
        cast.map(member => (
 /* We say now that when we click on an alien, we will get the info that we stayed before on the useState that we created*/
          <a onClick= { () => onChoice(member) } key={member.id} data-tooltip={member.name}>
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
        ))
      }
    </div>
  )
}