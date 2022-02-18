import classNames from "classnames";

import "./GenesysDie.scss";
import { diceMap } from "./constants";

const GenesysDie = ({ type, value, onClick }) => {
  const getSymbols = () => {
    const symbolMap = diceMap[type];
    const sides = Object.keys(symbolMap).length;
    const side = Math.floor(value * sides + 1);
    return symbolMap[side];
  };

  return (
    <div
      className={classNames("GenesysDie", type)}
      onClick={onClick}
    >
      {getSymbols().map((symbol, index) => (
        <div className="symbol" key={index}>
          {symbol}
        </div>
      ))}
    </div>
  );
};

export default GenesysDie;
