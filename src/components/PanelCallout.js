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
  font-family: ${font('main')};
  justify-content: baseline;
  max-width: ${containerMaxWidth};
  min-height: 350px;
  text-align: left;
  position: relative;
  padding: calc(${gutter('static')} * 2);
  transition: box-shadow ease 1s;
  background: black;

  &:hover {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }

  @media (max-width: ${mq.max[960]}) {
    min-height: 200px;
    flex: 1 1 calc(100%);
    max-width: none;
    padding: ${gutter('static')};
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
  z-index: 1;
  font-weight: 600;

  @media (max-width: ${mq.max[480]}) {
    font-size: 30px;
    margin-top: 13px;
    margin-bottom: 0;
  }
`;

const PanelBody = styled.div`
  font-size: 1em;
  font-family: ${font('main')};
  line-height: ${24 / 16};
  margin-right: auto;
  margin-top: 11px;
  z-index: 1;

  & > p {
    font-weight: 600;
  }

  @media (max-width: ${mq.max[960]}) {
    p {
      margin: 0.8em 0;
    }
  }
`;

const BackgroundImage = styled(Img)`
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  transition: opacity 1s;
  background: solid black;
  ${PanelContainer}:hover & {
    opacity: 1;
  }
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
