import "/src/styles/DiceRoller.scss";

import GenesysDie from "/src/components/GenesysDie";
import { useDice } from "/src/components/DiceProvider";

const DiceRoller = () => {
  const { dicePool, setDicePool } = useDice();

  const removeDieByIndex = (index) => {
    return () =>
      setDicePool((prevState) => {
        const newState = [...prevState];
        newState.splice(index, 1);
        return newState;
      });
  };

  const setResultByIndex = (index) => {
    return (result) =>
      setDicePool((prevState) => {
        const newState = [...prevState];
        newState[index].result = result;
        return newState;
      });
  };

  const rollDice = () => {
    setDicePool((prevState) => {
      const newState = [...prevState];
      newState.forEach((die) => (die.value = Math.random()));
      return newState;
    });
  };

  return (
    <div className="DiceRoller">
      <div className="dice-box">
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
      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
};

export default DiceRoller;
