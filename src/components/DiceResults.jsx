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
    const triumphSum = symbols[TRIUMPH];
    const despairSum = symbols[DESPAIR];
    const results = [];


    if (successSum > 0) {
      results.push({ quantity: successSum, symbolType: SUCCESS });
    } else if (successSum < 0) {
      results.push({ quantity: -successSum, symbolType: FAILURE });
    }

    if (advantageSum > 0) {
      results.push({ quantity: advantageSum, symbolType: ADVANTAGE });
    } else if (advantageSum < 0) {
      results.push({ quantity: -advantageSum, symbolType: THREAT });
    }

    if (triumphSum > 0) {
      results.push({ quantity: triumphSum, symbolType: TRIUMPH });
    }

    if (despairSum > 0) {
      results.push({ quantity: despairSum, symbolType: DESPAIR });
    }

    setPoolResult(results);
  }, [dicePool]);

  return (
    <div className="DiceResults">
      {poolResult?.map(({ symbolType, quantity }, index) => (
        <div key={index} className="result">
          <Symbol type={symbolType} />
          {quantity > 1 && <div className="quantity">{quantity}</div>}
        </div>
      ))}
    </div>
  );
};

export default GenesysDie;
