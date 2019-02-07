const settings = {
  columns: 12,
  columnWidth: 80,
  container: 1290,
  gutterPosition: 'before',
  gutters: 3 / 8,
  math: 'fluid',
  output: 'float',
  staticUnit: 'px',
  remBase: 10
};

function calculateGutter(multiplier = 1) {
  return settings.columnWidth * settings.gutters * multiplier;
}

function rem(value, base) {
  return `${value / base}rem`;
}

function px(value) {
  return `${value}px`;
}

function percent(target, context) {
  return `${(target / context) * 100}%`;
}

function staticCalculation(value) {
  if (settings.staticUnit && settings.staticUnit === 'rem' && settings.remBase) {
    return rem(value, settings.remBase);
  }

  return px(value);
}

function updateContext(columns) {
  const contextWidth = columns * settings.columnWidth;
  const contextGutters = columns - 1;
  const gutterWidth = calculateGutter();

  return contextWidth + contextGutters * gutterWidth;
}

function affixValue(number, math) {
  if (math === 'fluid') {
    return `${number}%`;
  }

  if (math === 'static') {
    if (settings.staticUnit === 'rem') {
      return `${number}rem`;
    }

    return `${number}px`;
  }

  return false;
}

function getNumbers([...values], math = settings.math, unit = settings.staticUnit) {
  const numbers = [];

  values.map(value => {
    if (math === 'fluid') {
      numbers.push(parseFloat(value.slice(0, -1)));
    }

    if (math === 'static') {
      if (unit === 'rem') {
        numbers.push(parseFloat(value.slice(0, -3)));
      } else {
        numbers.push(parseFloat(value.slice(0, -2)));
      }
    }

    return false;
  });

  return numbers;
}

/**
 * Add values together
 * @todo protect against mix of static and fluid values
 * @param  {array} [...values]  Array of values to add
 * @param  {string} math        Type of calculation, "fluid" or "static";
 *
 * @return {string}             Calculation converted back to a string with
 *                              the correct units based on `math`
 * @usage
 * add([span("2 of 6"), gutter()]); // fluid
 * add([span(3, "static"), gutter("static")], "static"); // static
 */
function add([...values], math = settings.math) {
  const numbers = getNumbers(values, math);
  const result = numbers.reduce((a, b) => a + b);
  return affixValue(result, math);
}

/**
 * Output the container width
 * @return {function} Function to make calculation
 */
function container() {
  return staticCalculation(settings.container);
}

/**
 * Output the gutter width
 * @param  {string}   math       Type of calculation, "fluid" or "static";
 *                               defaults to global settings
 * @param  {number}   columns    The number of columns; changes context
 * @param  {number}   multiplier Number to multiply the gutter by
 * @return {function}            Function to make calculation
 */
function gutter(math = settings.math, columns = settings.columns, multiplier = 1) {
  const gutterWidth = calculateGutter(multiplier);
  const containerWidth = updateContext(
    typeof columns === 'string' ? parseInt(columns, 10) : columns
  );

  if (math === 'static') {
    return staticCalculation(gutterWidth);
  }

  if (math === 'fluid') {
    return percent(gutterWidth, containerWidth);
  }

  return false;
}

/**
 * Calculate a span width
 * @param  {number|string} columns The number of columns; pass in an
 *                                 optional context
 * @param  {string}        math    Type of calculation, "fluid" or "static";
 *                                 defaults to global settings
 * @return {function}              Function to make calculation
 *
 * @usage
 * // number, context is taken from global settings
 * span(2);
 *
 * // string, context is taken from global settings, math overrides global settings
 * span("2", "static");
 *
 * // string with new context, calculates based on a 6 column grid
 * span("2 of 6");
 */
function span(columns, math = settings.math) {
  const error = 'You must pass a number greater than 0 for the number of columns.';
  let spanColumns = 0;
  let containerColumns = settings.columns;

  if (typeof columns === 'string') {
    spanColumns = parseInt(columns.split(' of ')[0], 10);

    if (columns.split(' of ')[1]) {
      containerColumns = parseInt(columns.split(' of ')[1], 10);
    }
  } else if (typeof columns === 'number' && columns) {
    spanColumns = columns;
  } else {
    throw new Error(error);
  }

  if (columns) {
    let columnWidth = spanColumns * settings.columnWidth;
    const gutters = spanColumns - 1;
    const containerWidth = updateContext(containerColumns);

    if (
      settings.gutterPosition === 'before' ||
      settings.gutterPosition === 'after' ||
      settings.gutterPosition === 'split'
    ) {
      if (gutters) {
        columnWidth += calculateGutter() * gutters;
      }
    }

    if (settings.gutterPosition === 'inside' || settings.gutterPosition === 'inside-static') {
      if (gutters) {
        columnWidth += calculateGutter() * 2;
      } else {
        columnWidth += calculateGutter();
      }
    }

    if (math === 'static') {
      return staticCalculation(columnWidth);
    }

    if (math === 'fluid') {
      return percent(columnWidth, containerWidth);
    }

    return false;
  }

  return false;
}

export { container, gutter, span, add };
