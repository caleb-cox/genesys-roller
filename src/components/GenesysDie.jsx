import "/src/styles/GenesysDie.scss";

import { useEffect } from "react";
import classNames from "classnames";

import { useDice } from "/src/components/DiceProvider";
import { DICE_MAP } from "/src/constants";

const GenesysDie = ({ type, value, index }) => {
  const { removeDieByIndex, setResultByIndex } = useDice();

  const symbolMap = DICE_MAP[type];
  const sideCount = Object.keys(symbolMap).length;
  const side = Math.floor(value * sideCount + 1);
  const result = symbolMap[side];

  useEffect(() => {
    setResultByIndex(result, index);
  }, [value]);

  return (
    <button
      className={classNames("GenesysDie", type)}
      onClick={() => removeDieByIndex(index)}
    >
      {result.map((symbol, index) => (
        <div className="symbol" key={index}>
          {symbol}
        </div>
      ))}
    </button>
  );
};

export default GenesysDie;
