import React from 'react';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import mq from '../common/mq';

const OverviewBackground = styled(BackgroundImage)`
  min-height: 800px;
  display: block;
  margin: auto;
  width: 100%;
  @media (min-width: ${mq.max[768]}) {
    height: 80vh;
    min-height: 500px;
  }
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const StyledBubble = styled.div`
  position: absolute;
  ${props => props.md}
  @media (min-width: ${mq.max[768]}) {
      ${props => props.lg || 'top: 5%; right: 25%;'}
  }
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
  <OverviewBackground fluid={data.Background ? data.Background.childImageSharp.fluid : ''} style={{backgroundSize:'contain'}}>
    <InnerContainer>
      <StyledBubble lg="top: 1%; right: 15%;" md="top: 0px; right: 0px;">
        <Icon fixed={data.Comms.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble lg="top: 15%; right: 1%;" md="top:140px; right: 0px;">
        <Icon fixed={data.Flipper.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble lg="bottom: 15%; right: 1%;" md="bottom: 140px; right: 0px;">
        <Icon fixed={data.Winch.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble lg="bottom: 1%; right: 15%;" md="bottom: 0px; right: 0px;">
        <Icon fixed={data.Hmi.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble lg="bottom: 1%; left: 15%;" md="bottom: 0px; left: 0px;">
        <Icon fixed={data.Keel.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble lg="bottom: 15%; left: 1%;" md="bottom: 140px; left: 0px;">
        <Icon fixed={data.Sail.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble lg="top: 15%; left: 1%;" md="top: 140px; left: 0px;">
        <Icon fixed={data.Ramp.childImageSharp.fixed} draggable={false} />
      </StyledBubble>

      <StyledBubble lg="top: 1%; left: 15%;" md="top: 0px; left: 0px;">
        <div data-tip data-for="Team" data-event="click">
          <Icon fixed={data.Team.childImageSharp.fixed} draggable={false} />
        </div>
      </StyledBubble>
    </InnerContainer>
  </OverviewBackground>
);

export default BluebottleOverview;
