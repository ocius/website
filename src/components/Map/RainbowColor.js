const RainbowColor = (currentTemperature) => {
  const i = (currentTemperature * 255) / 19;
  return `hsl(${i}, 100%, 50%)`;
};

export default RainbowColor;
