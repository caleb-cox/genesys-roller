import { createContext, useContext, useState } from "react";

import {
  ABILITY,
  PROFICIENCY,
  BOOST,
  DIFFICULTY,
  CHALLENGE,
  SETBACK,
} from "/src/constants";

const DiceContext = createContext();

export const useDice = () => useContext(DiceContext);

const DiceProvider = ({ children }) => {
  const [dicePool, setDicePool] = useState([
    {
      type: ABILITY,
      value: Math.random(),
      result: null,
    },
    {
      type: PROFICIENCY,
      value: Math.random(),
      result: null,
    },
    {
      type: BOOST,
      value: Math.random(),
      result: null,
    },
    {
      type: DIFFICULTY,
      value: Math.random(),
      result: null,
    },
    {
      type: CHALLENGE,
      value: Math.random(),
      result: null,
    },
    {
      type: SETBACK,
      value: Math.random(),
      result: null,
    },
  ]);

  return (
    <DiceContext.Provider value={{ dicePool, setDicePool }}>
      {children}
    </DiceContext.Provider>
  );
};

export default DiceProvider;
