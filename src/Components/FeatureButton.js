function FeatureButton({ dispatch, type, feature }) {
  return (
    <button
      className={`${
        feature === "="
          ? "calculator__button calculator__button--large"
          : "calculator__button calculator__button--feature"
      }`}
      onClick={() => dispatch(type())}
    >
      {feature}
    </button>
  );
}

export default FeatureButton;
