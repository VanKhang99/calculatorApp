import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { FeatureButton, DigitButton, OperatorButton } from "../Components";
import { formatResult } from "./helper";
import { clearResult, deleteDigit, percent, calculate } from "./actions";

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    previousResult,
    currentResult,
    operatorInput,
    showPreviousResult,
    calculationEntered,
  } = state;

  const handlePreviousResultDisplay = () => {
    if (calculationEntered) return <span>{calculationEntered}</span>;
    return (
      <span>
        {formatResult(previousResult)} {operatorInput}
      </span>
    );
  };

  return (
    <main id="main">
      <div className="calculator">
        <h1 className="calculator__title">Calculator</h1>
        <div className="calculator-result">
          {showPreviousResult && (
            <div className="calculator-result--previous">
              {handlePreviousResultDisplay()}
            </div>
          )}

          <div className="calculator-result--current">
            <span>{formatResult(currentResult)}</span>
          </div>
        </div>

        <FeatureButton dispatch={dispatch} type={clearResult} feature="AC" />
        <FeatureButton dispatch={dispatch} type={deleteDigit} feature="DEL" />
        <FeatureButton dispatch={dispatch} type={percent} feature="%" />
        <OperatorButton dispatch={dispatch} operator="÷" />
        <DigitButton dispatch={dispatch} digit="1" />
        <DigitButton dispatch={dispatch} digit="2" />
        <DigitButton dispatch={dispatch} digit="3" />
        <OperatorButton dispatch={dispatch} operator="×" />
        <DigitButton dispatch={dispatch} digit="4" />
        <DigitButton dispatch={dispatch} digit="5" />
        <DigitButton dispatch={dispatch} digit="6" />
        <OperatorButton dispatch={dispatch} operator="-" />
        <DigitButton dispatch={dispatch} digit="7" />
        <DigitButton dispatch={dispatch} digit="8" />
        <DigitButton dispatch={dispatch} digit="9" />
        <OperatorButton dispatch={dispatch} operator="+" />
        <DigitButton dispatch={dispatch} digit="0" />
        <DigitButton dispatch={dispatch} digit="." />
        <FeatureButton dispatch={dispatch} type={calculate} feature="=" />
      </div>
    </main>
  );
}

export default Calculator;
