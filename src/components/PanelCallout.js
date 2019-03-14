import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

import font from '../common/font';
import mq from '../common/mq';
import { add, span, gutter } from '../common/grid';
import Heading from './Heading';

const containerMaxWidth = add([span(4, 'fluid'), gutter('fluid')], 'fluid');

const PanelContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: ${font('effra')};
  justify-content: baseline;
  max-width: ${containerMaxWidth};
  min-height: 350px;
  text-align: left;
  position: relative;
  padding: calc(${gutter('static')} * 2);

  @media (max-width: ${mq.max[960]}) {
    flex: 1 1 calc(100%);
    max-width: none;
  }
`;

const StyledLink = styled(GatsbyLink)`
  display: block;
  text-decoration: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const PanelHeading = styled(Heading)`
  margin-top: 33px;
  transition: transform 200ms ease-in-out;
  z-index: 1;

  ${PanelContainer}:hover & {
    transform: translateY(-5px);
  }

  @media (max-width: ${mq.max[480]}) {
    font-size: 30px;
    margin-top: 13px;
  }
`;

const PanelBody = styled.div`
  font-size: 1em;
  font-family: ${font('grotesk')};
  line-height: ${24 / 16};
  margin-right: auto;
  margin-top: 11px;
  z-index: 1;
`;

const BackgroundImage = styled(Img)`
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

function PanelCallout({ children, bgImage, title, url }) {
  return (
    <PanelContainer className="PanelCallout">
      <StyledLink to={url} aria-label={`Read more about ${title}`} />
      <PanelHeading level={2} size="large" weight="thick">
        {title}
      </PanelHeading>

      <PanelBody className="PanelBody">{children}</PanelBody>
      <BackgroundImage sizes={bgImage} />
    </PanelContainer>
  );
}

PanelCallout.propTypes = {
  children: PropTypes.node,
  bgImage: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

PanelCallout.defaultProps = {
  children: ''
};

export default PanelCallout;
