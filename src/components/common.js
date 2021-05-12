import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-styled-flexboxgrid/src';
import { graphql, useStaticQuery } from 'gatsby';
import { switchProp } from 'styled-tools';
import styled, { css, keyframes } from 'styled-components';
import MaskOverlay from './MaskOverlay';
import mq from '../common/mq';

export const Spacing = styled.div`
  height: ${(props) => props.$value || '50px'};

  @media (max-width: ${mq.max[1024]}) {
    height: ${(props) => props.$mdValue || '40px'};
  }

  @media (max-width: ${mq.max[768]}) {
    height: ${(props) => props.$xsValue || '30px'};
  }
`;

export const FirstColumnMobile = styled(Col)`
  @media (max-width: ${mq.max[1024]}) {
    order: 1;
  }
`;

export const SecondColumnMobile = styled(Col)`
  @media (max-width: ${mq.max[1024]}) {
    order: 2;
  }
`;

export const FormWrapper = styled.div`
  padding: 1.5rem;
  flex: 1 1;

  hr {
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin: 30px 0rem 16px;
  }
`;

export const FormItem = styled.div`
  font-size: 1.5rem;
  margin: 0 0 1rem;
`;

const LogoBackgroundDiv = styled.div`
  background-image: ${(props) => `url(${props.$image})` || 'none'};
  background-repeat: no-repeat;

  ${switchProp('$position', {
    left: css`
      background-position: -30% center;
    `,

    right: css`
      background-position: 130% center;
    `,
  })}
`;

export const LogoBackgroundWrapper = ({ children, position }) => {
  const data = useStaticQuery(graphql`
    query BackgroundQuery {
      logoImage: file(relativePath: { eq: "images/ocius-logo-transparent.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    // Use the styled component here
    <LogoBackgroundDiv
      $image={data.logoImage.childImageSharp.gatsbyImageData.src}
      $position={position}
    >
      {children}
    </LogoBackgroundDiv>
  );
};

LogoBackgroundWrapper.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
};

LogoBackgroundWrapper.defaultProps = {
  children: '',
  position: 'right',
};

const AccentRowDiv = styled.div`
  position: relative;
  background-color: #edf7fc;
  overflow: hidden;
  padding: 3.2rem 0;

  @media (max-width: ${mq.max[768]}) {
    padding: 0;
  }
`;

export const AccentRowWrapper = ({ children }) => (
  <AccentRowDiv>
    <MaskOverlay flipped position="top" />
    {children}
    <MaskOverlay flipped />
  </AccentRowDiv>
);

AccentRowWrapper.propTypes = {
  children: PropTypes.node,
};

AccentRowWrapper.defaultProps = {
  children: '',
};

const DarkAccentRowDiv = styled.div`
  position: relative;
  background-color: rgb(19, 29, 33);
  padding: 3.2rem 0;
`;

export const DarkAccentRowWrapper = ({ children }) => (
  <DarkAccentRowDiv>
    {children}
    <MaskOverlay flipped />
  </DarkAccentRowDiv>
);

DarkAccentRowWrapper.propTypes = {
  children: PropTypes.node,
};

DarkAccentRowWrapper.defaultProps = {
  children: '',
};

export const skeletonAnimation = keyframes`
  0% {
    width: 0%;
    left: 0;
    right: auto;
    opacity: 0.3;
  }

  20% {
    width: 100%;
    left: 0;
    right: auto;
    opacity: 1;
  }
  
  28% {
    width: 100%;
    left: auto;
    right: 0;
  }

  51% {
    width: 0%;
    left: auto;
    right: 0;
  }

  58% {
    width: 0%;
    left: auto;
    right: 0;
  }

  82% {
    width: 100%;
    left: auto;
    right: 0;
  }

  83% {
    width: 100%;
    left: 0;
    right: auto;
  }

  96% {
    width: 0%;
    left: 0;
    right: auto;
  }

  100% {
    width: 0%;
    left: 0;
    right: auto;
    opacity: 0.3;
  }
`;
