import "./DiceResults.scss";

import { useState, useEffect } from "react";
import pluralize from "pluralize";

import { useDice } from "./DiceProvider";
import {
  SUCCESS,
  ADVANTAGE,
  TRIUMPH,
  FAILURE,
  THREAT,
  DESPAIR
} from "/src/constants";

const GenesysDie = () => {
  const { dicePool } = useDice();
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
    <div className="DiceResults">
      {poolResult?.join(", ")}
    </div>
  );
};

export default GenesysDie;
