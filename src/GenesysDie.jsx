import "./GenesysDie.scss";

import { useEffect } from "react";
import classNames from "classnames";

import { DICE_MAP } from "./constants";

const GenesysDie = ({ type, value, onClick, setResult }) => {
  const symbolMap = DICE_MAP[type];
  const sideCount = Object.keys(symbolMap).length;
  const side = Math.floor(value * sideCount + 1);
  const result = symbolMap[side];

  useEffect(() => {
    setResult(result);
  }, []);

  return (
    <div
      className={classNames("GenesysDie", type)}
      onClick={onClick}
    >
      {result.map((symbol, index) => (
        <div className="symbol" key={index}>
          {symbol}
        </div>
      ))}
    </div>
  );
};

export default GenesysDie;
