import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

import font from '../common/font';
import Heading from './Heading';
import mq from '../common/mq';

const Container = styled.article`
  font-family: ${font('grotesk')};
  color: #001826;
  background-color: #ffffff;
  max-width: 540px;
  padding: 20px;

  @media (max-width: ${mq.max[768]}) : {
    padding: 0;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 22px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  font-weight: 300;
  line-height: ${28 / 16};
  margin-bottom: 0;
  margin-top: 13px;
`;

const StyledLink = styled(GatsbyLink)`
  color: inherit;
  display: block;
  text-decoration: none;
`;

const StyledLinkMargin = styled(StyledLink)`
  margin-top: 12px;
`;

const StyledHeading = styled(Heading)`
  font-size: 24px;
  line-height: ${32 / 24};
`;

const ImageContainer = styled.figure`
  margin: 0;
`;

const Image = styled(Img)`
  display: block;
  max-width: 100%;
`;

function ArticlePreview({ title, paragraph, image, href }) {
  return (
    <Container className="ArticlePreview">
      <TextContainer className="ArticlePreview-text">
        <StyledLinkMargin to={href}>
          <StyledHeading level={3} weight="thick">
            {title}
          </StyledHeading>

          <Paragraph>{paragraph}</Paragraph>
        </StyledLinkMargin>
      </TextContainer>

      {image && (
        <ImageContainer className="ArticlePreview-image">
          <StyledLink to={href}>
            <Image fluid={image} alt="" />
          </StyledLink>
        </ImageContainer>
      )}
    </Container>
  );
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string
};

ArticlePreview.defaultProps = {
  image: ''
};

export default ArticlePreview;
