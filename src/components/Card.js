import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loadable from '@loadable/component';
import Heading from './Heading';

// Lazy load libs
const BackgroundImage = Loadable.lib(() => import('gatsby-background-image'));

const CardThumbnail = styled(BackgroundImage)`
  height: 250px;
  border-radius: 2px;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const CardWrapper = styled.div`
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  margin: 1.5rem 0.5rem;
  max-width: 100%;
  position: relative;

  &:hover ${CardThumbnail} {
    transform: translateY(-0.25rem);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
  }
`;

const ExternalLink = styled.a`
  border-bottom: medium none;
  color: #001826;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const CardBody = styled.div`
  position: relative;
`;

const Source = styled.p`
  font-size: 1em;
  margin: 0 0 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #60d2f6;
  border-radius: 20px;
  padding: 4px 20px;
  position: absolute;
  top: -20px;
  left: 0;
`;

const Date = styled.p`
  font-size: 1em;
  font-weight: 300;
  margin: 0 0 0.25em;
  color: rgb(22, 65, 148);
`;

const Card = ({ url, thumbnail, title, source, date }) => {
  return (
    <CardWrapper>
      <ExternalLink target="_blank" href={url}>
        <CardThumbnail fluid={thumbnail.childImageSharp.fluid} />
      </ExternalLink>
      <CardBody>
        <Heading level={2} size="small" weight="thick">
          {title}
        </Heading>
        <Source>{source}</Source>
        <Date>{date}</Date>
      </CardBody>
    </CardWrapper>
  );
};

Card.propTypes = {
  url: PropTypes.string,
  thumbnail: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired,
  source: PropTypes.string,
  date: PropTypes.string
};

Card.defaultProps = {
  url: '#',
  source: '',
  date: ''
};

export default Card;
