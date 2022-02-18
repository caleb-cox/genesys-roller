export const SUCCESS = "s";
export const ADVANTAGE = "a";
export const TRIUMPH = "t";
export const FAILURE = "f";
export const THREAT = "h";
export const DESPAIR = "d";

export const ABILITY = "ability";
export const PROFICIENCY = "proficiency";
export const BOOST = "boost";
export const DIFFICULTY = "difficulty";
export const CHALLENGE = "challenge";
export const SETBACK = "setback";

export const DICE_MAP = {
  [ABILITY]: {
    1: [],
    2: [SUCCESS],
    3: [SUCCESS],
    4: [SUCCESS, SUCCESS],
    5: [ADVANTAGE],
    6: [ADVANTAGE],
    7: [ADVANTAGE, SUCCESS],
    8: [ADVANTAGE, ADVANTAGE]
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
    12: [TRIUMPH]
  },
  [BOOST]: {
    1: [],
    2: [],
    3: [SUCCESS],
    4: [SUCCESS, ADVANTAGE],
    5: [ADVANTAGE, ADVANTAGE],
    6: [ADVANTAGE]
  },
  [DIFFICULTY]: {
    1: [],
    2: [FAILURE],
    3: [FAILURE, FAILURE],
    4: [THREAT],
    5: [THREAT],
    6: [THREAT],
    7: [THREAT, THREAT],
    8: [THREAT, FAILURE]
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
    12: [DESPAIR]
  },
  [SETBACK]: {
    1: [],
    2: [],
    3: [FAILURE],
    4: [FAILURE],
    5: [THREAT],
    6: [THREAT]
  },
}