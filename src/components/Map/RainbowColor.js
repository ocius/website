const RainbowColor = (currentTemperature) => {
  let i = ((28 - currentTemperature) * 255) / 18;
  if (currentTemperature > 28) i = 0;
  if (currentTemperature < 12) i = ((28 - 11) * 255) / 18;
  return `hsl(${i}, 100%, 50%)`;
};

export default RainbowColor;
