import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { switchProp } from 'styled-tools';
import styled, { css } from 'styled-components';

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
