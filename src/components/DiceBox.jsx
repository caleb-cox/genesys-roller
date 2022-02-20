import "/src/styles/DiceBox.scss";

import GenesysDie from "/src/components/GenesysDie";
import { useDice } from "/src/components/DiceProvider";

const DiceBox = () => {
  const { dicePool } = useDice();

  return (
    <div className="DiceBox">
      <div className="dice-container">
        {dicePool.map(({ uuid, type, value }, index) => (
          <GenesysDie key={uuid} type={type} value={value} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DiceBox;
