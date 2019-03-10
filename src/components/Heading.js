import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import mq from '../common/mq';
import {
  fontSizeHeading1,
  fontSizeHeading2,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeUppercase,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium
} from '../common/typography';
import font from '../common/font';

const VariantCaps = css`
  text-transform: uppercase;
`;

const Truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledHeading = styled.h3`
  font-family: ${font('effra')};
  line-height: 1.2;
  margin-top: 1em;

  ${props =>
    props.size === 'tiny' &&
    css`
      font-size: ${fontSizeUppercase}px;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      margin-top: 1.25em;
      font-size: ${fontSizeUppercase}px;

      @media (min-width: ${mq.min[600]}) {
        font-size: ${fontSizeUppercase + 2}px;
      }
    `}
    
  ${props =>
    props.size === 'medium' &&
    css`
      margin-top: 1em;
      font-size: ${fontSizeHeading5 + 2}px;
      line-height: ${40 / 26};
    `}
    
    
  ${props =>
    props.size === 'large' &&
    css`
      margin-top: 0.75em;
      font-size: ${fontSizeHeading2 - 8}px;

      @media (min-width: ${mq.min[600]}) {
        font-size: ${fontSizeHeading2 - 3}px;
      }
    `}
    
   ${props =>
     props.size === 'huge' &&
     css`
       margin-top: 0.5em;
       font-size: ${fontSizeHeading4 + 2}px;
       letter-spacing: -1px;
       line-height: ${36 / 30};

       @media (min-width: ${mq.min[600]}) {
         font-size: ${fontSizeHeading1}px;
         line-height: ${70 / 64};
       }
     `}
     
   ${props =>
     props.weight === 'extraThin' &&
     css`
       font-weight: ${fontWeightLight}px;
     `}
    
   ${props =>
     props.weight === 'thin' &&
     css`
       font-weight: ${fontWeightLight}px;
     `}

   ${props =>
     props.weight === 'normal' &&
     css`
       font-weight: ${fontWeightRegular}px;
     `}
    
   ${props =>
     props.weight === 'thick' &&
     css`
       font-weight: ${fontWeightMedium}px;
     `}
     
   ${props =>
     props.tracking === 'tight' &&
     css`
       letter-spacing: -1px;
     `}
     
   ${props =>
     props.tracking === 'loose' &&
     css`
       letter-spacing: 1px;
     `}
     
   ${props => props.caps && VariantCaps}
   ${props => props.truncate && Truncate}
`;

StyledHeading.defaultProps = {};

/**
 * Heading component
 */
function Heading({ children, level, size, weight, tracking, truncate, caps }) {
  const HeadingLevel = `h${level}`;

  return (
    <StyledHeading
      className="Heading"
      as={HeadingLevel}
      size={size}
      weight={weight}
      tracking={tracking}
      truncate={truncate}
      caps={caps}
    >
      {children}
    </StyledHeading>
  );
}

Heading.propTypes = {
  /**
   * Text for the heading
   */
  children: PropTypes.node.isRequired,

  /**
   * Creates the heading element
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /**
   * Declares the font size of the heading
   */
  size: PropTypes.oneOf(['huge', 'large', 'medium', 'small', 'tiny']).isRequired,

  /**
   * Adjusts the font weight of the heading
   */
  weight: PropTypes.oneOf(['thick', 'normal', 'thin', 'extraThin']),

  /**
   * Controls the letter spacing
   */
  tracking: PropTypes.oneOf(['tight', 'normal', 'loose']),

  /**
   * Whether or not to hide the text overflow with an ellipsis
   */
  truncate: PropTypes.bool,

  /**
   * Whether or not to set the heading in all caps
   */
  caps: PropTypes.bool
};

Heading.defaultProps = {
  weight: 'normal',
  tracking: 'normal',
  truncate: false,
  caps: false
};

export default Heading;
