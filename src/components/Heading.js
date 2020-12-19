import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import cn from 'classnames';
import mq from '../common/mq';
import {
  fontSizeHeading1,
  fontSizeHeading3,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeHeading7,
  fontSizeUppercase,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
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

const Underline = css`
  &::after {
    content: '';
    display: block;
    background-color: #4ab4e6;
    height: 4px;
    width: 100px;

    ${switchProp('underline', {
      left: css`
        margin: 10px 0;
      `,

      center: css`
        margin: 10px auto;
      `,
    })}
  }
`;

const Shadow = css`
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;

const Header = css`
  color: #1f3643;
  padding-top: 80px;
  margin-top: 0;

  @media (max-width: ${mq.max[768]}) {
    padding-top: 20px;
  }
`;

const StyledHeading = styled.h3`
  color: ${(props) => props.$color || '#1f3643'};
  font-family: ${font('bold')};
  line-height: 1.2;

  ${switchProp('size', {
    tiny: css`
      font-size: ${fontSizeUppercase}px;
    `,

    small: css`
      margin-top: 1.25em;
      margin-bottom: 0.25em;
      font-size: ${fontSizeHeading7}px;

      @media (min-width: ${mq.min[600]}) {
        font-size: ${fontSizeHeading7 + 2}px;
      }
    `,

    medium: css`
      margin-top: 1em;
      margin-bottom: 0.5em;
      font-size: ${fontSizeHeading5}px;
      line-height: ${40 / 28};
    `,

    large: css`
      margin-top: 0.75em;
      margin-bottom: 0.5em;
      font-size: ${fontSizeHeading4}px;

      @media (min-width: ${mq.min[600]}) {
        font-size: ${fontSizeHeading3}px;
      }
    `,

    huge: css`
      margin-top: 0.5em;
      margin-bottom: 0;
      font-size: ${fontSizeHeading4 + 4}px;
      letter-spacing: -1px;
      line-height: ${36 / 30};

      @media (min-width: ${mq.min[600]}) {
        font-size: ${fontSizeHeading1}px;
        line-height: ${70 / 64};
      }
    `,
  })}

  ${switchProp('weight', {
    extraThin: css`
      font-weight: ${fontWeightLight};
    `,

    thin: css`
      font-weight: ${fontWeightLight};
    `,

    normal: css`
      font-weight: ${fontWeightRegular};
    `,

    thick: css`
      font-weight: ${fontWeightMedium};
    `,
  })}

  ${switchProp('tracking', {
    tight: css`
      letter-spacing: -1px;
    `,

    loose: css`
      letter-spacing: 1px;
    `,
  })}

   ${(props) => props.caps && VariantCaps}
   ${(props) => props.truncate && Truncate}
   ${(props) => props.underline && Underline}
   ${(props) => props.header && Header}
   ${(props) => props.shadow && Shadow}
`;

StyledHeading.defaultProps = {};

/**
 * Heading component
 */
function Heading({
  children,
  level,
  size,
  color,
  weight,
  tracking,
  truncate,
  caps,
  underline,
  className,
  shadow,
  ...rest
}) {
  const HeadingLevel = `h${level}`;

  return (
    <StyledHeading
      className={cn('Heading', className)}
      as={HeadingLevel}
      size={size}
      $color={color}
      weight={weight}
      tracking={tracking}
      truncate={truncate}
      caps={caps}
      underline={underline}
      shadow={shadow}
      {...rest}
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
   * Declares the color of the heading
   */
  color: PropTypes.string,

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
  caps: PropTypes.bool,

  /**
   * Whether or not to add underline to the heading
   */
  underline: PropTypes.oneOf(['left', 'center']),

  /**
   * Whether or not heading is a page header
   */
  header: PropTypes.bool,
  /**
   * Whether or not to render a drop shadow
   */
  shadow: PropTypes.bool,
};

Heading.defaultProps = {
  color: '#1f3643',
  weight: 'normal',
  tracking: 'normal',
  truncate: false,
  caps: false,
  underline: null,
  header: false,
  shadow: false,
};

export default Heading;
