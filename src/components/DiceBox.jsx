import "/src/styles/DiceBox.scss";

import GenesysDie from "/src/components/GenesysDie";
import { useDice } from "/src/components/DiceProvider";

const DiceBox = () => {
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

  return (
    <div className="DiceBox">
      <div className="dice-container">
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
    </div>
  );
};

export default DiceBox;
