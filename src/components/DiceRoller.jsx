import "/src/styles/DiceRoller.scss";

import GenesysDie from "/src/components/GenesysDie";
import { useDice } from "/src/components/DiceProvider";
import {
  ABILITY,
  PROFICIENCY,
  BOOST,
  DIFFICULTY,
  CHALLENGE,
  SETBACK,
} from "/src/constants";

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

  const addDie = (type) => {
    return () =>
      setDicePool((prevState) => {
        const newState = [...prevState];
        newState.push({
          value: 0,
          result: [],
          type,
        });
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
      <div className="add-dice-buttons">
        <button className="add ability" onClick={addDie(ABILITY)} />
        <button className="add proficiency" onClick={addDie(PROFICIENCY)} />
        <button className="add boost" onClick={addDie(BOOST)} />
        <button className="add difficulty" onClick={addDie(DIFFICULTY)} />
        <button className="add challenge" onClick={addDie(CHALLENGE)} />
        <button className="add setback" onClick={addDie(SETBACK)} />
      </div>
      <div className="roll-dice-buttons">
        <button className="clear" onClick={clearDice}>
          Clear
        </button>
        <button className="roll" onClick={rollDice}>
          Roll
        </button>
      </div>
    </div>
  );
};

export default DiceRoller;
