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
  padding: 1em;

  @media (max-width: ${mq.max[768]}) {
    margin: 0 -15px;
  }
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
  :hover {
    text-decoration: none;
  }
`;

const StyledLinkMargin = styled(StyledLink)`
  margin-top: 12px;
`;

const StyledHeading = styled(Heading)`
  font-size: 24px;
  line-height: ${32 / 24};
  :hover {
    text-decoration: underline
  }
`;

const ImageContainer = styled.figure`
  margin: 22px 0 0;
`;

const Image = styled(Img)`
  display: block;
  max-width: 100%;
`;

function ArticlePreview({ title, paragraph, image, href }) {
  return (
    <Container className="ArticlePreview">
      <StyledLinkMargin to={href}>
        <StyledHeading level={3} size="medium" weight="thick">
          {title}
        </StyledHeading>

        <Paragraph>{paragraph}</Paragraph>

        {image && (
          <ImageContainer className="ArticlePreview-image">
            <Image fluid={image} alt="" />
          </ImageContainer>
        )}
      </StyledLinkMargin>
    </Container>
  );
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.any)
};

ArticlePreview.defaultProps = {
  image: ''
};

export default ArticlePreview;
