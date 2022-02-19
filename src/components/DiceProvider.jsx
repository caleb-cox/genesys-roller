import { createContext, useContext, useState } from "react";

const DiceContext = createContext();

export const useDice = () => useContext(DiceContext);

const DiceProvider = ({ children }) => {
  const [dicePool, setDicePool] = useState([]);

  return (
    <DiceContext.Provider value={{ dicePool, setDicePool }}>
      {children}
    </DiceContext.Provider>
  );
};

export default DiceProvider;
