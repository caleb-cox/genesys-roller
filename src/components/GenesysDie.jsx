import "/src/styles/GenesysDie.scss";

import { useEffect } from "react";
import classNames from "classnames";

import { useDice } from "/src/components/DiceProvider";
import Symbol from "/src/components/Symbol";
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
      {result.map((symbolType, index) => (
        <Symbol key={index} type={symbolType} />
      ))}
    </button>
  );
};

export default GenesysDie;
