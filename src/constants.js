export const ABILITY = "ability";
export const PROFICIENCY = "proficiency";
export const BOOST = "boost";
export const DIFFICULTY = "difficulty";
export const CHALLENGE = "challenge";
export const SETBACK = "setback";
export const SUCCESS = "success";
export const ADVANTAGE = "advantage";
export const TRIUMPH = "triumph";
export const FAILURE = "failure";
export const THREAT = "threat";
export const DESPAIR = "despair";

export const BUTTON_LIST = [
  ABILITY,
  PROFICIENCY,
  BOOST,
  SUCCESS,
  ADVANTAGE,
  DIFFICULTY,
  CHALLENGE,
  SETBACK,
  FAILURE,
  THREAT,
];

export const SYMBOL_MAP = {
  [ABILITY]: "k",
  [PROFICIENCY]: "l",
  [BOOST]: "j",
  [DIFFICULTY]: "k",
  [CHALLENGE]: "l",
  [SETBACK]: "j",
  [SUCCESS]: "s",
  [ADVANTAGE]: "a",
  [TRIUMPH]: "t",
  [FAILURE]: "f",
  [THREAT]: "h",
  [DESPAIR]: "d",
};

export const DICE_MAP = {
  [ABILITY]: {
    1: [],
    2: [SUCCESS],
    3: [SUCCESS],
    4: [SUCCESS, SUCCESS],
    5: [ADVANTAGE],
    6: [ADVANTAGE],
    7: [ADVANTAGE, SUCCESS],
    8: [ADVANTAGE, ADVANTAGE],
  },
  [PROFICIENCY]: {
    1: [],
    2: [SUCCESS],
    3: [SUCCESS],
    4: [SUCCESS, SUCCESS],
    5: [SUCCESS, SUCCESS],
    6: [ADVANTAGE],
    7: [ADVANTAGE, SUCCESS],
    8: [ADVANTAGE, SUCCESS],
    9: [ADVANTAGE, SUCCESS],
    10: [ADVANTAGE, ADVANTAGE],
    11: [ADVANTAGE, ADVANTAGE],
    12: [TRIUMPH],
  },
  [BOOST]: {
    1: [],
    2: [],
    3: [SUCCESS],
    4: [SUCCESS, ADVANTAGE],
    5: [ADVANTAGE, ADVANTAGE],
    6: [ADVANTAGE],
  },
  [DIFFICULTY]: {
    1: [],
    2: [FAILURE],
    3: [FAILURE, FAILURE],
    4: [THREAT],
    5: [THREAT],
    6: [THREAT],
    7: [THREAT, THREAT],
    8: [THREAT, FAILURE],
  },
  [CHALLENGE]: {
    1: [],
    2: [FAILURE],
    3: [FAILURE],
    4: [FAILURE, FAILURE],
    5: [FAILURE, FAILURE],
    6: [THREAT],
    7: [THREAT],
    8: [THREAT, FAILURE],
    9: [THREAT, FAILURE],
    10: [THREAT, THREAT],
    11: [THREAT, THREAT],
    12: [DESPAIR],
  },
  [SETBACK]: {
    1: [],
    2: [],
    3: [FAILURE],
    4: [FAILURE],
    5: [THREAT],
    6: [THREAT],
  },
  [SUCCESS]: {
    1: [SUCCESS],
  },
  [ADVANTAGE]: {
    1: [ADVANTAGE],
  },
  [FAILURE]: {
    1: [FAILURE],
  },
  [THREAT]: {
    1: [THREAT],
  },
};
