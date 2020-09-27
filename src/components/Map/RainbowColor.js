const RainbowColor = (currentTemperature, minTemperature = 10, maxTemperature = 28) => {
  const range = maxTemperature - minTemperature;
  let i = ((maxTemperature - currentTemperature) * 260) / range + 20;
  // Add 20 deg color shift
  if (currentTemperature >= maxTemperature) i = 20;
  if (currentTemperature <= minTemperature) i = 260;
  return `hsl(${i}, 100%, 50%)`;
};

export default RainbowColor;
