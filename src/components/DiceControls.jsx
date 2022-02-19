import "/src/styles/DiceControls.scss";

import { useDice } from "/src/components/DiceProvider";
import {
  ABILITY,
  PROFICIENCY,
  BOOST,
  DIFFICULTY,
  CHALLENGE,
  SETBACK,
} from "/src/constants";

const DiceControls = () => {
  const { setDicePool } = useDice();

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
    <div className="DiceControls">
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

export default DiceControls;
