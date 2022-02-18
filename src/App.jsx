import React, { useState } from "react";

import GenesysDie from "./GenesysDie";
import {
  ABILITY,
  PROFICIENCY,
  BOOST,
  DIFFICULTY,
  CHALLENGE,
  SETBACK
} from "./constants";

const App = () => {
  const [dicePool, setDicePool] = useState([
    {
      type: ABILITY,
      value: Math.random()
    },
    {
      type: PROFICIENCY,
      value: Math.random()
    },
    {
      type: BOOST,
      value: Math.random()
    },
    {
      type: DIFFICULTY,
      value: Math.random()
    },
    {
      type: CHALLENGE,
      value: Math.random()
    },
    {
      type: SETBACK,
      value: Math.random()
    },
  ]);
  
  const removeDieByIndex = (index) => {
    return () => setDicePool((prevState) => {
      console.log(dicePool)
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  return (
    <div style={{display: "flex", margin: "50px"}}>
      {dicePool.map(({ type, value }, index) => (
        <GenesysDie
          key={index}
          type={type}
          value={value}
          onClick={removeDieByIndex(index)}
        />
      ))}
    </div>
  );
};

export default App;
