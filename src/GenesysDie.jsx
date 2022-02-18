import React, { useState } from "react";
import classNames from "classnames";

import "./GenesysDie.scss";
import { diceMap } from "./constants";

const GenesysDie = ({ type }) => {
  const [results, setResults] = useState([]);
  const resultMap = diceMap[type];

  const roll = () => {
    const sides = Object.keys(resultMap).length;
    const side = Math.floor(Math.random() * sides + 1);
    setResults(resultMap[side]);
  };

  return (
    <div className={classNames("GenesysDie", type)} onClick={roll}>
      {results.map((result, index) => (
        <div className="symbol" key={index}>{result}</div>
      ))}
    </div>
  );
};

export default GenesysDie;
