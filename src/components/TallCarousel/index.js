import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';

import mq from '../../common/mq';
import Heading from '../Heading';
import SlideTall from './SlideTall';

// Import carousel styles
import './carousel.css';

const Carousel = styled.div`
  text-align: left;

  @media (min-width: ${mq.min[840]}) {
    .slick-slide {
      box-shadow: none;
      transition: box-shadow 400ms ease, transform 400ms ease, z-index 400ms ease;
    }

    .slick-slide:hover {
      transform: scale(1.03);
    }
  }
`;

const Index = ({ slides, title, settings, customSettings }) => {
  return (
    <Carousel className="TallCarousel">
      {title && (
        <Heading size="medium" level={3} weight="thick">
          {title}
        </Heading>
      )}
      <Slider {...settings} {...customSettings}>
        {slides.map(({ node }) => {
          if (node.frontmatter.featuredImage) {
            return (
              <SlideTall
                key={node.id}
                item={{
                  title: node.frontmatter.title,
                  image: node.frontmatter.featuredImage
                    ? node.frontmatter.featuredImage.childImageSharp.fluid
                    : {},
                  link: node.fields.slug
                }}
              />
            );
          }

          return null;
        })}
      </Slider>
    </Carousel>
  );
};

Index.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  settings: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array
    ])
  ),
  customSettings: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array
    ])
  )
};

Index.defaultProps = {
  slides: [],
  title: '',
  // React Slick settings
  settings: {
    accessibility: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
          arrows: false,
          infinite: true,
          draggable: true
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          centerMode: true,
          arrows: false,
          infinite: true,
          draggable: true
        }
      }
    ]
  },
  customSettings: {}
};

export default Index;
