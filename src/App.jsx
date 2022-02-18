import React from "react";

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
