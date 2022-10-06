import { addDigit } from "../Calculator/actions";

function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="calculator__button"
      onClick={() => dispatch(addDigit(digit))}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
