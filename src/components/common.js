import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { graphql, useStaticQuery } from 'gatsby';
import { switchProp } from 'styled-tools';
import styled, { css } from 'styled-components';
import MaskOverlay from './MaskOverlay';
import mq from '../common/mq';

export const Spacing = styled.div`
  height: ${(props) => props.$value || '50px'};

  @media (max-width: ${mq.max[768]}) {
    height: ${(props) => props.$xsValue || '30px'};
  }
`;

export const FirstColumnMobile = styled(Col)`
  @media (max-width: ${mq.max[768]}) {
    order: 1;
  }
`;

export const SecondColumnMobile = styled(Col)`
  @media (max-width: ${mq.max[768]}) {
    order: 2;
  }
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
