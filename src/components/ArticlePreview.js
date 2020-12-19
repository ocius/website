import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

import font from '../common/font';
import Heading from './Heading';
import Button from './Button';
import mq from '../common/mq';

const Container = styled.article`
  font-family: ${font('main')};
  color: #001826;
  background-color: #ffffff;
  max-width: 540px;
  padding: 1em;

  @media (max-width: ${mq.max[768]}) {
    margin: 0 -15px;
  }
`;

const Paragraph = styled.p`
  color: #75767b;
  font-size: 1em;
  font-weight: 300;
  line-height: ${28 / 19};
  margin-top: 13px;
`;

const Wrapper = styled.div`
  padding: 0 16px 16px;
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
  color: #2b2e34;
  font-size: 18px;
  line-height: ${32 / 22};
`;

const SubHeading = styled.p`
  color: #4ab4e6;
  font-size: 0.9em;
  font-weight: 300;
  line-height: ${28 / 19};
  margin-top: 0;
`;

const ImageContainer = styled.figure`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0 0 26px;
  overflow: hidden;
`;

const Image = styled(Img)`
  display: block;
  max-width: 100%;
`;

function ArticlePreview({ title, date, paragraph, image, href }) {
  return (
    <Container className="ArticlePreview">
      <StyledLinkMargin to={href}>
        {image && (
          <ImageContainer className="ArticlePreview-image">
            <Image fluid={image} alt="" />
          </ImageContainer>
        )}
      </StyledLinkMargin>

      <Wrapper>
        <StyledHeading level={3} size="medium" weight="thick">
          {title}
        </StyledHeading>
        <SubHeading>{date}</SubHeading>

        <Paragraph>{paragraph}</Paragraph>

        <Button color="blue" size="tiny" href={href}>
          Read more
        </Button>
      </Wrapper>
    </Container>
  );
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.any),
};

ArticlePreview.defaultProps = {
  image: '',
};

export default ArticlePreview;
