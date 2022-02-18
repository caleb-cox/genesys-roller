import "./DiceRoller.scss";
import GenesysDie from "./GenesysDie";
import { useDiceContext } from "./App";

const DiceRoller = () => {
  const { dicePool, setDicePool } = useDiceContext();

  const removeDieByIndex = (index) => {
    return () => setDicePool((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const setResultByIndex = (index) => {
    return (result) => setDicePool((prevState) => {
      const newState = [...prevState];
      newState[index].result = result;
      return newState;
    });
  };

  return (
    <div className="DiceRoller">
      {dicePool.map(({ type, value }, index) => (
        <GenesysDie
          key={index}
          type={type}
          value={value}
          onClick={removeDieByIndex(index)}
          setResult={setResultByIndex(index)}
        />
      ))}
    </div>
  );
};

export default DiceRoller;
