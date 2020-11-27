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
  display: flex;
  flex-direction: column;
  height: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px 16px;
  height: 100%;
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
  margin-top: 1.7em;
`;

const Date = styled.p`
  color: #4ab4e6;
  font-size: 0.9em;
  font-weight: 300;
  line-height: ${28 / 19};
  margin-top: 0;
`;

const ImageContainer = styled.figure`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0;
  overflow: hidden;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
  }
`;

const Image = styled(Img)`
  display: block;
  max-width: 100%;
`;

const Content = styled.div`
  padding-bottom: 10px;
  flex: 1;
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
        <Content>
          <StyledHeading level={3} size="medium" weight="thick">
            {title}
          </StyledHeading>
          <Date>{date}</Date>

          <Paragraph>{paragraph}</Paragraph>
        </Content>

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
