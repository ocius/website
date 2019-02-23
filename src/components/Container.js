import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import cn from 'classnames';

import mq from '../common/mq';

const maxSiteWidth = 1290;
const gutter = 30;
const maxWidth = maxSiteWidth + gutter * 4;
const mediaQuery = `${maxWidth * 0.0625}em`;

const styles = `
  .container {
    box-sizing: border-box;
    max-width: ${maxSiteWidth}px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .container::after {
    content: " ";
    display: block;
    clear: both;
  }

  @media (max-width: ${mq.max[480]}) {
    .container {
      padding-left: ${gutter / 2}px;
      padding-right: ${gutter / 2}px;
    }
  }

  @media (min-width: ${mq.min[480]}) {
    .container {
      margin-left: ${gutter}px;
      margin-right: ${gutter}px;
    }
  }

  @media (min-width: ${mq.min[1080]}) {
    .container {
      margin-left: ${gutter * 2}px;
      margin-right: ${gutter * 2}px;
    }
  }

  @media(min-width: ${mediaQuery}) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

function markup(htmlContent) {
  return {
    __html: htmlContent
  };
}

const Container = ({ children, id, className, style }) => (
  <div id={id} className={cn('container', className)} style={style}>
    <style dangerouslySetInnerHTML={markup(styles)} />

    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object)
};

Container.defaultProps = {
  id: '',
  className: '',
  style: {}
};

export default radium(Container);
