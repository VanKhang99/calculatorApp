export const calculate = ({ previousResult, currentResult, operatorInput }) => {
  previousResult = Number(previousResult) * 10;
  currentResult = Number(currentResult) * 10;
  if (isNaN(previousResult) || isNaN(currentResult)) return "";

  let resultCalculation = "";

  console.log(previousResult, currentResult);

  if (operatorInput === "+")
    resultCalculation = (previousResult + currentResult) / 10;
  if (operatorInput === "-")
    resultCalculation = (previousResult - currentResult) / 10;
  if (operatorInput === "×")
    resultCalculation = (previousResult * currentResult) / 100;
  if (operatorInput === "÷") resultCalculation = previousResult / currentResult;

  return resultCalculation.toString();
};

export const formatResult = (result) => {
  const integerFormatter = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  });
  if (!result) return;

  console.log(result);
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
