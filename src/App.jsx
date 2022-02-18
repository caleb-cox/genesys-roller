import { createContext, useContext, useState } from "react";

import DiceRoller from "./DiceRoller";
import DiceResults from "./DiceResults";
import {
  ABILITY,
  PROFICIENCY,
  BOOST,
  DIFFICULTY,
  CHALLENGE,
  SETBACK
} from "./constants";

export const DiceContext = createContext();

export const useDiceContext = () => {
  return useContext(DiceContext);
};

const App = () => {
  const [dicePool, setDicePool] = useState([
    {
      type: ABILITY,
      value: Math.random(),
      result: null
    },
    {
      type: PROFICIENCY,
      value: Math.random(),
      result: null
    },
    {
      type: BOOST,
      value: Math.random(),
      result: null
    },
    {
      type: DIFFICULTY,
      value: Math.random(),
      result: null
    },
    {
      type: CHALLENGE,
      value: Math.random(),
      result: null
    },
    {
      type: SETBACK,
      value: Math.random(),
      result: null
    },
  ]);

  return (
    <div>
      <DiceContext.Provider value={{ dicePool, setDicePool }}>
        <DiceRoller />
        <DiceResults />
      </DiceContext.Provider>
    </div>
  );
};

export default App;
