/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';

const CardThumbnail = styled(BackgroundImage)`
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const CardWrapper = styled.div`
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  height: 100%;
  margin: 1.5rem 0.5rem;
  max-width: 100%;
  position: relative;

  &:hover ${CardThumbnail} {
    transform: translateY(-0.25rem);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
  }
`;

const CardHeading = styled(Heading)`
  color: #2b2e34;
  font-size: 18px;
  line-height: ${32 / 22};
  margin-top: 1.7em;
`;

const ExternalLink = styled.a`
  border-bottom: medium none;
  color: #001826;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const CardBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px 32px;
  height: 100%;
`;

const Content = styled.div`
  padding-bottom: 10px;
  flex: 1;
`;

const Source = styled.div`
  font-size: 1em;
  margin: 0 0 0.25em;
  display: flex;
`;

const Date = styled.p`
  color: #4ab4e6;
  font-size: 0.9em;
  font-weight: 300;
  line-height: ${28 / 19};
  margin-top: 0;
`;

const Card = ({ url, thumbnail, title, source, logo, date }) => {
  return (
    <CardWrapper>
      <ExternalLink target="_blank" href={url}>
        <CardThumbnail fluid={thumbnail.childImageSharp.fluid} />
      </ExternalLink>
      <CardBody>
        <Content>
          <CardHeading level={2} size="small" weight="thick">
            {title}
          </CardHeading>
          <Date>{date}</Date>
          <Source>
            {logo && (
              <Img style={{ width: 25, marginRight: 10 }} fluid={logo.childImageSharp.fluid} />
            )}
            {source}
          </Source>
        </Content>

        <Button color="blue" size="tiny" href={url} target="_blank">
          Read more
        </Button>
      </CardBody>
    </CardWrapper>
  );
};

Card.propTypes = {
  url: PropTypes.string,
  thumbnail: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }).isRequired,
  logo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }),
  source: PropTypes.string,
  date: PropTypes.string,
};

Card.defaultProps = {
  url: '#',
  source: '',
  date: '',
  logo: {},
};

export default Card;
