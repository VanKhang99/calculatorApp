import {
  ADD_DIGIT,
  CHOOSE_OPERATOR,
  CLEAR_RESULT,
  DELETE_DIGIT,
  PERCENT,
  CALCULATE,
} from "./constants";
import { calculate, handleDisplayCalculateEntered } from "./helper";

export const initialState = {
  previousResult: "",
  operatorInput: "",
  currentResult: "0",
  isOverwrite: false,
  showPreviousResult: false,
  calculationEntered: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DIGIT:
      if (state.isOverwrite) {
        return {
          ...state,
          currentResult: payload,
          isOverwrite: false,
          showPreviousResult: true,
          calculationEntered: "",
        };
      }

      if (payload === "0" && state.currentResult === "0") return state;
      if (payload === "." && state.currentResult.includes(".")) return state;
      return {
        ...state,
        currentResult: `${state.currentResult}${payload}`,
      };

    case CHOOSE_OPERATOR:
      // if (!state.previousResult && !state.currentResult) return state;
      if (!state.currentResult) {
        return {
          ...state,
          operatorInput: payload,
        };
      }

      if (!state.previousResult) {
        return {
          ...state,
          previousResult: state.currentResult,
          operatorInput: payload,
          currentResult: "",
          showPreviousResult: true,
          calculationEntered: "",
        };
      }

      return {
        ...state,
        previousResult: calculate(state),
        operatorInput: payload,
        currentResult: "",
        showPreviousResult: true,
      };

    case CLEAR_RESULT:
      return initialState;

    case DELETE_DIGIT:
      if (state.isOverwrite) {
        return {
          ...state,
          isOverwrite: false,
          currentResult: "",
          calculationEntered: "",
        };
      }

      if (!state.currentResult || state.currentResult === "0") return state;
      if (state.currentResult.length === 1) {
        return { ...state, currentResult: "" };
      }

      return {
        ...state,
        currentResult: state.currentResult.slice(0, -1),
      };

    case PERCENT:
      if (!state.currentResult) return state;
      return {
        ...state,
        currentResult: `${+state.currentResult / 100}`,
      };

    case CALCULATE:
      if (!state.previousResult || !state.operatorInput || !state.currentResult)
        return state;

      return {
        ...state,
        previousResult: "",
        operatorInput: "",
        currentResult: calculate(state),
        isOverwrite: true,
        calculationEntered: handleDisplayCalculateEntered(state),
      };
    default:
      return state;
  }
}

export default reducer;
