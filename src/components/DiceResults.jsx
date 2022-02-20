import "/src/styles/DiceResults.scss";

import { useState, useEffect } from "react";

import {
  SUCCESS,
  ADVANTAGE,
  TRIUMPH,
  FAILURE,
  THREAT,
  DESPAIR,
} from "/src/constants";
import { useDice } from "/src/components/DiceProvider";
import Symbol from "/src/components/Symbol";

const GenesysDie = () => {
  const { dicePool } = useDice();
  const [poolResult, setPoolResult] = useState(null);

  useEffect(() => {
    const symbols = dicePool
      .map(({ result }) => result)
      .flat()
      .reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 }), {
        [SUCCESS]: 0,
        [ADVANTAGE]: 0,
        [TRIUMPH]: 0,
        [FAILURE]: 0,
        [THREAT]: 0,
        [DESPAIR]: 0,
      });

    const successSum =
      symbols[SUCCESS] + symbols[TRIUMPH] - symbols[FAILURE] - symbols[DESPAIR];

    const advantageSum = symbols[ADVANTAGE] - symbols[THREAT];

    const results = [];

    if (successSum > 0) {
      results.push({ quantity: successSum, symbol: SUCCESS });
    } else if (successSum < 0) {
      results.push({ quantity: -successSum, symbol: FAILURE });
    }

    if (advantageSum > 0) {
      results.push({ quantity: advantageSum, symbol: ADVANTAGE });
    } else if (advantageSum < 0) {
      results.push({ quantity: -advantageSum, symbol: THREAT });
    }

    if (symbols[TRIUMPH] > 0) {
      results.push({ quantity: symbols[TRIUMPH], symbol: TRIUMPH });
    }

    if (symbols[DESPAIR] > 0) {
      results.push({ quantity: symbols[DESPAIR], symbol: DESPAIR });
    }

    setPoolResult(results);
  }, [dicePool]);

  return (
    <div className="DiceResults">
      {poolResult?.map((result, index) => (
        <div className="result" key={index}>
          <Symbol type={result.symbol} />
          {result.quantity > 1 && (
            <div className="quantity">{result.quantity}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GenesysDie;
