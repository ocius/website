import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Heading from './Heading';
import Ellipsis from './EllipsisLoader';

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
            <Heading size="medium" weight="thick" level={1} style={{ marginBottom: 0 }}>
              {text}
            </Heading>
            <Ellipsis color="#125192" />
          </FadeIn>
        </Overlay>
      )}
    </ReactCSSTransitionGroup>
  );
};

SplashScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default SplashScreen;
