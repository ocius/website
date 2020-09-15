import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.span`
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s ease-in-out;

  /* Highlight the button when needed */
  ${(props) =>
    props.highlight &&
    css`
      background-color: #9deeb2;
      transition: background-color 0.25s ease-out;
    `}
`;

// Changes the background to green for a short amount of time when the
// new data is received.
const FlashUpdate = ({ lastUpdated, children }) => {
  const [upToDate, setUpToDate] = useState(true);
  const [lastUpdatedState, setLastUpdateState] = useState(null);

  // State is completely controlled data, lastUpdated is derived from props
  useEffect(
    () => {
      // This state is "upToDate" only when lastUpdate prop is changed
      setUpToDate(lastUpdatedState !== lastUpdated);
      setLastUpdateState(lastUpdated);

      // Start timer only if prop data was updated
      if (!upToDate) return;
      // Removes the background 1s after being updated by the parent
      const timer = setTimeout(() => setUpToDate(false), 1000);

      // This will clear Timeout when component unmount like in willComponentUnmount
      // eslint-disable-next-line consistent-return
      return () => {
        clearTimeout(timer);
      };
    },
    [lastUpdated] // useEffect will be run every time when lastUpdated value changes (useEffect re-run)
  );

  return <Wrapper highlight={!!upToDate}>{children}</Wrapper>;
};

FlashUpdate.propTypes = {
  children: PropTypes.node.isRequired,
  lastUpdated: PropTypes.number.isRequired,
};

export default FlashUpdate;
