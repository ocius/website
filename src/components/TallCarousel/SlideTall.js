import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import mq from '../../common/mq';

const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  text-align: center;

  @media (min-width: ${mq.min[840]}) {
    font-size: 16px;
  }
`;

const TallCarouselSlide = styled(GatsbyLink)`
  display: block;
  position: relative;
  margin: 10px;
`;

const SlideTall = (node) => (
  <TallCarouselSlide className="TallCarousel-slide" to={node.item.link}>
    <Img fluid={node.item.image} alt={node.item.title} />
    <Title>{node.item.title}</Title>
  </TallCarouselSlide>
);

SlideTall.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    image: PropTypes.objectOf(PropTypes.any),
    title: PropTypes.string,
  }),
};

SlideTall.defaultProps = {
  item: {},
};

export default SlideTall;
