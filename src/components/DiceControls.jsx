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
  const { addDie, clearDice, rollDice } = useDice();

  return (
    <div className="DiceControls">
      <button className="add ability" onClick={() => addDie(ABILITY)} />
      <button className="add proficiency" onClick={() => addDie(PROFICIENCY)} />
      <button className="add boost" onClick={() => addDie(BOOST)} />
      <button className="add difficulty" onClick={() => addDie(DIFFICULTY)} />
      <button className="add challenge" onClick={() => addDie(CHALLENGE)} />
      <button className="add setback" onClick={() => addDie(SETBACK)} />
      <button className="clear" onClick={clearDice}>
        Clear
      </button>
      <button className="roll" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
};

export default DiceControls;
