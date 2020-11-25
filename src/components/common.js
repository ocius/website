import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { switchProp } from 'styled-tools';
import styled, { css } from 'styled-components';
import MaskOverlay from './MaskOverlay';

export const HeroSubheading = styled.p`
  color: ${(props) => props.$color || '#2d4355'};
  font-size: 2em;
  line-height: 1.2;
`;

export const Spacing = styled.div`
  height: ${(props) => props.$value || '50px'};
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
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    // Use the styled component here
    <LogoBackgroundDiv $image={data.logoImage.childImageSharp.fluid.src} $position={position}>
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
`;

export const AccentRowWrapper = ({ children }) => {
  return (
    <AccentRowDiv>
      <MaskOverlay flipped position="top" />
      {children}
      <MaskOverlay flipped />
    </AccentRowDiv>
  );
};

AccentRowWrapper.propTypes = {
  children: PropTypes.node,
};

AccentRowWrapper.defaultProps = {
  children: '',
};
