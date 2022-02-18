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
      value: 0,
      result: null,
    },
    {
      type: PROFICIENCY,
      value: 0,
      result: null,
    },
    {
      type: BOOST,
      value: 0,
      result: null,
    },
    {
      type: DIFFICULTY,
      value: 0,
      result: null,
    },
    {
      type: CHALLENGE,
      value: 0,
      result: null,
    },
    {
      type: SETBACK,
      value: 0,
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
