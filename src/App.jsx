import { createContext, useContext, useState, useEffect } from "react";
import pluralize from "pluralize";

import DiceRoller from "./DiceRoller";
import {
  SUCCESS,
  ADVANTAGE,
  TRIUMPH,
  FAILURE,
  THREAT,
  DESPAIR,
  ABILITY,
  PROFICIENCY,
  BOOST,
  DIFFICULTY,
  CHALLENGE,
  SETBACK
} from "./constants";

export const DiceContext = createContext();

const App = () => {
  const [dicePool, setDicePool] = useState([
    {
      type: ABILITY,
      value: Math.random(),
      result: null
    },
    {
      type: PROFICIENCY,
      value: Math.random(),
      result: null
    },
    {
      type: BOOST,
      value: Math.random(),
      result: null
    },
    {
      type: DIFFICULTY,
      value: Math.random(),
      result: null
    },
    {
      type: CHALLENGE,
      value: Math.random(),
      result: null
    },
    {
      type: SETBACK,
      value: Math.random(),
      result: null
    },
  ]);
  const [poolResult, setPoolResult] = useState(null);

  useEffect(() => {
    const symbols = dicePool
      .map(({ result }) => result)
      .flat()
      .reduce(
        (acc, cur) => ({...acc, [cur]: acc[cur] + 1}),
        {
          [SUCCESS]: 0,
          [ADVANTAGE]: 0,
          [TRIUMPH]: 0,
          [FAILURE]: 0,
          [THREAT]: 0,
          [DESPAIR]: 0
        }
      );

    const successSum =
      symbols[SUCCESS] +
      symbols[TRIUMPH] -
      symbols[FAILURE] +
      symbols[DESPAIR];

    const advantageSum =
      symbols[ADVANTAGE] -
      symbols[THREAT]

    const results = [];

    if (successSum >= 0) {
      results.push(pluralize("Success", successSum, true));
    } else {
      results.push(pluralize("Failure", -successSum, true));
    }

    if (advantageSum > 0) {
      results.push(pluralize("Advantage", advantageSum, true));
    } else if (advantageSum < 0) {
      results.push(pluralize("Threat", -advantageSum, true));
    }

    if (symbols[TRIUMPH] > 0) {
      results.push(pluralize("Triumph", symbols[TRIUMPH], true));
    }

    if (symbols[DESPAIR] > 0) {
      results.push(pluralize("Despair", symbols[DESPAIR], true));
    }

    setPoolResult(results);
  }, [dicePool])

  return (
    <div style={{margin: "20px"}}>
      <DiceContext.Provider
        value={{ dicePool, setDicePool }}
      >
        <DiceRoller />
      </DiceContext.Provider>
      <div style={{display: "flex", margin: "20px"}}>
        {poolResult?.join(", ")}
      </div>
    </div>
  );
};

export default App;

export const useDiceContext = () => {
  return useContext(DiceContext);
};
