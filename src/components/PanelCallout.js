import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link as GatsbyLink } from 'gatsby';

import assign from 'object-assign';
import font from '../common/font';
import { add, span, gutter } from '../common/grid';
import Heading from './Heading';

const containerMaxWidth = add([span(4, 'fluid'), gutter('fluid')], 'fluid');

const styles = {
  container: {
    color: '#ffffff',
    display: 'flex',
    flexGrow: 1,
    fontFamily: font('effra'),
    justifyContent: 'center',
    maxWidth: containerMaxWidth,
    minHeight: '350px',
    textAlign: 'left',
    position: 'relative'
  },

  anchor: {
    display: 'block',
    textDecoration: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1
  },

  image: {
    backgroundColor: '#001826',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    padding: `calc(${gutter('static')} * 2)`
  },

  heading: {
    marginTop: '33px',
    transition: `transform 200ms ease-in-out`
  },

  body: {
    fontSize: '1em',
    fontFamily: font('grotesk'),
    lineHeight: 24 / 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '11px'
  }
};

function PanelCallout({ children, bgImage, title, url }) {
  const StyledLink = Radium(GatsbyLink);

  return (
    <div className="PanelCallout" style={styles.container}>
      <div style={assign({}, styles.image, { backgroundImage: `url(${bgImage})` })}>
        <StyledLink to={url} style={styles.anchor} />
        <Heading level={2} weight="thick" override={styles.heading}>
          {title}
        </Heading>

        <div className="PanelBody" style={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
}

PanelCallout.propTypes = {
  children: PropTypes.node,
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

PanelCallout.defaultProps = {
  children: ''
};

export default PanelCallout;
