import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fontSizeHeading5 } from '../common/typography';
import Ellipsis from './EllipsisLoader';
import TextShuffle from './TextShuffle';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.55);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;

  // Styles for auto rotating text
  span {
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    line-height: 1.2;
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: ${fontSizeHeading5}px;
    line-height: ${40 / 28};
    font-weight: 600;
  }
`;

const SplashScreen = ({ isLoading, text }) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {isLoading && (
        <Overlay className="center-xs">
          <FadeIn>
            <TextShuffle items={text} />
            <Ellipsis color="#125192" />
          </FadeIn>
        </Overlay>
      )}
    </ReactCSSTransitionGroup>
  );
};

SplashScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
};

SplashScreen.defaultProps = {
  text: ['Connecting to satellite', 'Connecting to drones', 'Drones sending data'],
};

export default SplashScreen;
