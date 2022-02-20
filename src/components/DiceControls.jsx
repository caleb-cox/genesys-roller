import "/src/styles/DiceControls.scss";

import { BUTTON_LIST } from "/src/constants";
import { useDice } from "/src/components/DiceProvider";
import Symbol from "/src/components/Symbol";

const DiceControls = () => {
  const { addDie, clearDice, rollDice } = useDice();

  return (
    <div className="DiceControls">
      {BUTTON_LIST.map((type, index) => (
        <button key={index} className={`add ${type}`} onClick={() => addDie(type)}>
          <Symbol type={type} />
        </button>
      ))}
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
