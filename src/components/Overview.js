import React from 'react';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const OverviewBackground = styled(BackgroundImage)`
  height: 80vh;
  display: block;
  margin: auto;
  width: 101%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const InnerContainer = styled.div`
  height: 101%;
  width: 101%;
  position: relative;
  z-index: 2;
`;

const StyledBubble = styled.div`
  position: absolute;
  ${props => props.pos || 'top: 5%; right: 25%;'}
`;

const Icon = styled(Img)`
  border: 2px solid #60d2f6;
  border-radius: 51%;
  transition: all ease 0.2s;

  &:hover {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    transform: scale(1.1);
  }
`;

const BluebottleOverview = ({ data }) => (
  <OverviewBackground fluid={data.Background ? data.Background.childImageSharp.fluid : ''}>
    <InnerContainer>
      <StyledBubble pos="top: 1%; right: 15%;">
        <Icon fixed={data.Comms.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble pos="top: 15%; right: 1%;">
        <Icon fixed={data.Flipper.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble pos="bottom: 15%; right: 1%;">
        <Icon fixed={data.Winch.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble pos="bottom: 1%; right: 15%;">
        <Icon fixed={data.Hmi.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble pos="bottom: 1%; left: 15%;">
        <Icon fixed={data.Keel.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble pos="bottom: 15%; left: 1%;">
        <Icon fixed={data.Sail.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble pos="top: 15%; left: 1%;">
        <Icon fixed={data.Ramp.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble pos="top: 1%; left: 15%;">
        <div data-tip data-for="Team" data-event="click">
          <Icon fixed={data.Team.childImageSharp.fixed} draggable={false} />
        </div>
      </StyledBubble>
    </InnerContainer>
  </OverviewBackground>
);

export default BluebottleOverview;
