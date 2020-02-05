import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';

const TextShuffle = ({ items, interval }) => {
  const [currentCount, setCount] = useState(1);
  const timer = () => setCount(currentCount + 1);

  useEffect(() => {
    const id = setInterval(timer, interval);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(id);
  }, [currentCount]);

  const currentText = items[currentCount % items.length];

  return (
    <Heading size="medium" weight="thick" level={1} style={{ marginBottom: 0 }}>
      {currentText}
    </Heading>
  );
};

TextShuffle.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number
};

TextShuffle.defaultProps = {
  interval: 1500
};

export default TextShuffle;
