import {
  ADD_DIGIT,
  CHOOSE_OPERATOR,
  CLEAR_RESULT,
  DELETE_DIGIT,
  PERCENT,
  CALCULATE,
} from "./constants";

export const addDigit = (payload) => {
  return {
    type: ADD_DIGIT,
    payload,
  };
};

export const chooseOperator = (payload) => {
  return {
    type: CHOOSE_OPERATOR,
    payload,
  };
};

export const clearResult = (payload) => {
  return {
    type: CLEAR_RESULT,
    payload,
  };
};

export const deleteDigit = (payload) => {
  return {
    type: DELETE_DIGIT,
    payload,
  };
};

export const percent = (payload) => {
  return {
    type: PERCENT,
    payload,
  };
};

export const calculate = (payload) => {
  return {
    type: CALCULATE,
    payload,
  };
};
