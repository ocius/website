import React from 'react';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import { OutboundLink as GtagLink } from 'gatsby-plugin-gtag';
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

const LinkStyle = css`
  position: absolute;
  ${props => props.md}
  @media (min-width: ${mq.max[768]}) {
      ${props => props.lg}
  }
`;

const Link = styled(GatsbyLink)`
  ${LinkStyle}
`;

const OutboundLink = styled(GtagLink)`
  ${LinkStyle}
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

function Bubble({ lg, md, img, to, href }) {
  if (href)
    return (
      <OutboundLink lg={lg} md={md} href={href}>
        <Icon fixed={img ? img.childImageSharp.fixed : ' '} draggable={false} />
      </OutboundLink>
    );
  return (
    <Link lg={lg} md={md} to={to}>
      <Icon fixed={img ? img.childImageSharp.fixed : ' '} draggable={false} />
    </Link>
  );
}

const BluebottleOverview = ({ data }) => (
  <OverviewBackground
    fluid={data.Background ? data.Background.childImageSharp.fluid : ''}
    style={{ backgroundSize: 'contain' }}
  >
    <InnerContainer>
      <Bubble
        lg="top: 1%; right: 15%;"
        md="top: 0px; right: 0px;"
        img={data.Comms}
        href="https://youtu.be/7vhvKcc-UPk?t=120"
      />
      <Bubble
        lg="top: 15%; right: 1%;"
        md="top:140px; right: 0px;"
        img={data.Flipper}
        href="https://youtu.be/7vhvKcc-UPk?t=35"
      />
      <Bubble
        lg="bottom: 15%; right: 1%;"
        md="bottom: 140px; right: 0px;"
        img={data.Winch}
        href="https://youtu.be/7vhvKcc-UPk?t=166"
      />
      <Bubble
        lg="bottom: 1%; right: 15%;"
        md="bottom: 0px; right: 0px;"
        img={data.Hmi}
        to="/live"
      />
      <Bubble
        lg="bottom: 1%; left: 15%;"
        md="bottom: 0px; left: 0px;"
        img={data.Keel}
        href="https://youtu.be/7vhvKcc-UPk?t=270"
      />
      <Bubble
        lg="bottom: 15%; left: 1%;"
        md="bottom: 140px; left: 0px;"
        img={data.Sail}
        href="https://youtu.be/7vhvKcc-UPk?t=66"
      />
      <Bubble
        lg="top: 15%; left: 1%;"
        md="top: 140px; left: 0px;"
        img={data.Ramp}
        href="https://youtu.be/hdDNF1PueXg?t=43"
      />
      <Bubble
        lg="top: 1%; left: 15%;"
        md="top: 0px; left: 0px;"
        img={data.Team}
        href="https://youtu.be/7vhvKcc-UPk?t=191"
      />
    </InnerContainer>
  </OverviewBackground>
);

export default BluebottleOverview;
