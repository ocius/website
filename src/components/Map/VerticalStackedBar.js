import React from 'react';
import PropTypes from 'prop-types';

const VeritcalBar = (props) => {
  /**
   * Returns a new calculated rgb color
   */
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  };

  /**
   * Calculate the height of each bar
   */
  const calcHeightTotal = (data) => {
    let heightTotal = 0;
    data.forEach((bar) => {
      heightTotal += bar.value;
    });
    return heightTotal;
  };

  /**
   * Returns the same list of bars with position and barHeight
   */
  const getListBarWithOtherParameters = (data, outlineHeight) => {
    const heightTotal = calcHeightTotal(data);
    let position = (outlineHeight * 2) / 100;
    let barHeight = 0;
    const listBars = data.map((bar) => {
      position += barHeight;
      barHeight = (bar.value * 100) / heightTotal - (props.outlineHeight * 100) / bar.value / 100;
      const sizedBar = {
        position,
        barHeight,
        heightTotal,
        ...bar,
      };
      return sizedBar;
    });
    return listBars;
  };
  /**
   * Returns a list of texts of the bars into a div component
   */
  const getListTextBar = (showTextInsteadValue) => {
    const { showTextWithValue } = props;
    const listText = props.data.map((bar, index) => {
      return (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{
            position: 'relative',
            height: `${bar.barHeight}%`,
            fontSize: `${props.fontSize}`,
            fontColor: `${props.fontColor}`,
            flex: `1`,
          }}
        >
          {showTextInsteadValue && bar.name}
          {showTextInsteadValue && bar.name && showTextWithValue ? ': ' : ''}
          {(!showTextInsteadValue || showTextWithValue) && (bar.description || bar.value || '')}
        </div>
      );
    });
    return listText;
  };

  const renderBars = (bars) => {
    const listBars = [];

    listBars.push(
      bars.map((bar, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <g key={index}>
          <rect
            width={props.width}
            height={`${bar.barHeight + 0.1}%`}
            style={{
              fill: bar.color || randomColor(),
              strokeWidth: `${(props.outlineHeight * 100) / (bar.widthTotal / props.data.length)}%`,
              stroke: props.outlineColor,
            }}
            y={`${bar.position}%`}
          />
        </g>
      ))
    );
    return listBars;
  };

  /**
   * Always renders label on the left of the bar
   */
  const renderLabel = (showTextInsteadValue) => {
    return (
      <div
        id={`${props.id}_text`}
        style={{
          textAlign: 'left',
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          float: 'left',
          padding: '5px',
        }}
      >
        {getListTextBar(showTextInsteadValue)}
      </div>
    );
  };

  const barData = getListBarWithOtherParameters(props.data, props.outlineHeight);
  return (
    <>
      <svg id={props.id} width={props.width} height="100%">
        {renderBars(barData)}
      </svg>
      {renderLabel()}
    </>
  );
};

VeritcalBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
  showTextWithValue: PropTypes.bool,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  outlineHeight: PropTypes.number,
  outlineColor: PropTypes.string,
  id: PropTypes.string,
};

VeritcalBar.defaultProps = {
  data: [],
  width: 20,
  showTextWithValue: true,
  outlineHeight: 0,
  outlineColor: 'black',
  fontSize: '1rem',
  fontColor: 'black',
  id: 'vsbar',
};

export default VeritcalBar;
