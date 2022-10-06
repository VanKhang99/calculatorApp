export const calculate = ({ previousResult, currentResult, operatorInput }) => {
  previousResult = Number(previousResult) * 10000000;
  currentResult = Number(currentResult) * 10000000;
  if (isNaN(previousResult) || isNaN(currentResult)) return "";

  let resultCalculation = "";

  if (operatorInput === "+")
    resultCalculation = (previousResult + currentResult) / 10000000;
  if (operatorInput === "-")
    resultCalculation = (previousResult - currentResult) / 10000000;
  if (operatorInput === "×")
    resultCalculation = (previousResult * currentResult) / 100000000000000;
  if (operatorInput === "÷") resultCalculation = previousResult / currentResult;

  return resultCalculation.toString();
};

export const formatResult = (result) => {
  const integerFormatter = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  });
  if (!result) return;

  let [integer, decimal] = result.split(".");

  if (integer.includes("e")) return integer;
  if (!decimal) return integerFormatter.format(integer);

  return `${integerFormatter.format(integer)}.${decimal}`;
};

export const handleDisplayCalculateEntered = ({
  previousResult,
  operatorInput,
  currentResult,
}) => {
  if (previousResult.startsWith("0.") || currentResult.startsWith("0.")) {
    return `${formatResult(previousResult)} ${operatorInput} ${formatResult(
      currentResult
    )}`;
  }

  if (previousResult.startsWith("0") && previousResult.length > 1) {
    return `${formatResult(
      previousResult.slice(1)
    )} ${operatorInput} ${currentResult}`;
  }

  return `${formatResult(previousResult)} ${operatorInput} ${currentResult}`;
};
