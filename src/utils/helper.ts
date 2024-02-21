export const _withUnit = (value: UnitLength, symbol = "px") => {
  if (typeof value == "string") {
    return value;
  } else {
    return value ? value + symbol : "";
  }
};

export const getThisYear = () => {
  const now = new Date();
  return now.getFullYear();
};
