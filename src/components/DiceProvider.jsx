import { createContext, useContext, useState } from "react";

import { DICE_ORDER } from "/src/constants";

const DiceContext = createContext();

export const useDice = () => useContext(DiceContext);

const DiceProvider = ({ children }) => {
  const [dicePool, setDicePool] = useState([]);

  const addDie = (type) => {
    setDicePool((prevState) => {
      const newState = [...prevState];
      newState.push({
        uuid: Date.now().toString(16),
        value: 0,
        result: [],
        type,
      });
      newState.sort(
        (a, b) => DICE_ORDER.indexOf(a.type) - DICE_ORDER.indexOf(b.type)
      );
      return newState;
    });
  };

  const removeDieByIndex = (index) => {
    setDicePool((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const setResultByIndex = (result, index) => {
    setDicePool((prevState) => {
      const newState = [...prevState];
      newState[index].result = result;
      return newState;
    });
  };

  const clearDice = () => {
    setDicePool([]);
  };

  const rollDice = () => {
    setDicePool((prevState) => {
      const newState = [...prevState];
      newState.forEach((die) => (die.value = Math.random()));
      return newState;
    });
  };

  return (
    <DiceContext.Provider
      value={{
        dicePool,
        addDie,
        removeDieByIndex,
        setResultByIndex,
        clearDice,
        rollDice,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export default DiceProvider;
