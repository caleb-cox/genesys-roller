import "/src/styles/Symbol.scss";

import { SYMBOL_MAP } from "/src/constants";

const Symbol = ({ type }) => {
  return <span className={`Symbol ${type}`}>{SYMBOL_MAP[type]}</span>;
};

export default Symbol;
