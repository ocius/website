const RainbowColor = (currentTemperature) => {
  console.log(currentTemperature);
  let i = (currentTemperature * 255) / 18;
  if (currentTemperature > 28) i = (28 * 255) / 18;
  return `hsl(${28 - i}, 100%, 50%)`;
};

export default RainbowColor;
