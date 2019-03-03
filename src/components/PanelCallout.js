import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

import font from '../common/font';
import { add, span, gutter } from '../common/grid';
import Heading from './Heading';

const containerMaxWidth = add([span(4, 'fluid'), gutter('fluid')], 'fluid');

const styles = {
  container: {
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    fontFamily: font('effra'),
    justifyContent: 'baseline',
    maxWidth: containerMaxWidth,
    minHeight: '350px',
    textAlign: 'left',
    position: 'relative',
    padding: `calc(${gutter('static')} * 2)`
  },

  anchor: {
    display: 'block',
    textDecoration: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2
  },

  heading: {
    marginTop: '33px',
    transition: `transform 200ms ease-in-out`,
    zIndex: 1
  },

  body: {
    fontSize: '1em',
    fontFamily: font('grotesk'),
    lineHeight: 24 / 16,
    marginRight: 'auto',
    marginTop: '11px',
    zIndex: 1
  }
};

function PanelCallout({ children, bgImage, title, url }) {
  const StyledLink = Radium(GatsbyLink);

  return (
    <div className="PanelCallout" style={styles.container}>
      <StyledLink to={url} style={styles.anchor} />
      <Heading level={2} weight="thick" override={styles.heading}>
        {title}
      </Heading>

      <div className="PanelBody" style={styles.body}>
        {children}
      </div>

      <Img
        sizes={bgImage}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}

PanelCallout.propTypes = {
  children: PropTypes.node,
  bgImage: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

PanelCallout.defaultProps = {
  children: ''
};

export default PanelCallout;
