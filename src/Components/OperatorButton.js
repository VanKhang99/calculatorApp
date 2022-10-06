import { chooseOperator } from "../Calculator/actions";

function OperatorButton({ dispatch, operator }) {
  return (
    <button
      className="calculator__button calculator__button--operator"
      onClick={() => dispatch(chooseOperator(operator))}
    >
      {operator}
    </button>
  );
}

export default OperatorButton;
