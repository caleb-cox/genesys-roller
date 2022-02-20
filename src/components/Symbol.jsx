import "/src/styles/Symbol.scss";

import { SYMBOL_MAP } from "/src/constants";

const Symbol = ({ type }) => {
  return <div className={`Symbol ${type}`}>{SYMBOL_MAP[type]}</div>;
};

export default Symbol;
