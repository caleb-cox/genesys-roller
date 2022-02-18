import React from "react";

import GenesysDie from "/src/components/GenesysDie";
import {
  ABILITY,
  PROFICIENCY,
  BOOST,
  DIFFICULTY,
  CHALLENGE,
  SETBACK
} from "/src/constants/dice";

const App = () => {
  return (
    <>
      <GenesysDie type={ABILITY}/>
      <GenesysDie type={PROFICIENCY}/>
      <GenesysDie type={BOOST}/>
      <GenesysDie type={DIFFICULTY}/>
      <GenesysDie type={CHALLENGE}/>
      <GenesysDie type={SETBACK}/>
    </>
  );
};

export default App;
