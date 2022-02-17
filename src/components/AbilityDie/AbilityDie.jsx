import React, { useState } from "react";
import "./AbilityDie.scss";

const AbilityDie = () => {
  const [results, setResults] = useState([]);

  const resultMap = {
    1: [],
    2: ["s"],
    3: ["s"],
    4: ["s", "s"],
    5: ["a"],
    6: ["a"],
    7: ["a", "s"],
    8: ["a", "a"]
  };

  const roll = () => {
    const sides = Object.keys(resultMap).length;
    const side = Math.floor(Math.random() * sides + 1);
    setResults(resultMap[side]);
  };

  return (
    <div className="AbilityDie" onClick={roll}>
      {results.map((result, index) => (
        <div className="icon" key={index}>{result}</div>
      ))}
    </div>
  );
};

export default AbilityDie;
