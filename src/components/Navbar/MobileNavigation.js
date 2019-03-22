import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import font from '../../common/font';
import mq from '../../common/mq';
import iconFromString from '../../common/iconFromString';

const colors = {
  background: '#f9e3ae',
  background1: '#faefde',
  outline: '#8d6c9f'
};

const Wrapper = styled.div`
  font-family: ${font('grotesk')};
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-top: 1px solid #f6edfa;
  background: #ffffff;
  height: 60px;
  padding-bottom: 0;

  @media (min-width: ${mq.min[768]}) {
    display: none;
  }
`;

const Link = styled(GatsbyLink)`
  color: #125192;
  border-radius: 2px;
  font-size: 1rem;
  flex-shrink: 0;
  line-height: 1;
  width: 64px;
  padding: 0.5rem;
  text-decoration: none;
  text-align: center;
  -webkit-font-smoothing: antialiased;

  :hover,
  &[data-active] {
    text-decoration: none;
    font-weight: bold;

    .support-outline,
    .about-outline,
    .briefcase-outline,
    .idea-outline,
    .news-outline {
      fill: ${colors.outline};
    }

    .briefcase-lock,
    .support-background,
    .idea-background,
    .about-background1 {
      fill: ${colors.background};
    }

    .news-background,
    .about-letter,
    .idea-background1 {
      fill: ${colors.background1};
    }

    .news-background1 {
      fill: #efd8be;
    }

    .news-background2 {
      fill: #cda1a7;
    }

    .news-top {
      fill: #fff7f0;
    }

    .news-topline {
      fill: #eb9697;
    }

    .about-background {
      fill: #85cbf8;
    }

    .about-background2 {
      fill: #f6d397;
    }

    .briefcase-background {
      fill: #cda1a7;
    }

    .briefcase-background1 {
      fill: #c4939c;
    }

    .briefcase-accent {
      fill: #dbb2ba;
    }

    .support-background1 {
      fill: #acb7d0;
    }

    .support-background2 {
      fill: #f6d397;
    }

    .support-background3 {
      fill: #8b8e98;
    }

    .support-background4 {
      fill: #c2cde7;
    }

    .idea-background2 {
      fill: #acb7d0;
    }

    .idea-background3 {
      fill: #c2cde7;
    }
  }

  & svg {
    margin: 0 auto;

    .support-background,
    .support-background1,
    .support-background2,
    .support-background3,
    .support-background4,
    .idea-background,
    .idea-background1,
    .idea-background2,
    .idea-background3,
    .briefcase-background1,
    .briefcase-background,
    .briefcase-accent,
    .briefcase-lock,
    .about-background,
    .about-background1,
    .about-background2,
    .news-top,
    .news-background2,
    .news-background1,
    .news-background {
      fill: #ffffff;
    }

    path,
    line,
    polygon {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

const getProps = ({ isPartiallyCurrent }) => {
  return {
    ...(isPartiallyCurrent
      ? {
          'data-active': true
        }
      : {})
  };
};

const MobileNavItem = ({ linkTo, label, icon }) => (
  <Link getProps={getProps} to={linkTo}>
    {iconFromString(icon, { width: '32px' })}
    <div>{label}</div>
  </Link>
);

const MobileNavigation = () => (
  <>
    <Wrapper>
      <MobileNavItem linkTo="/bluebottle/" label="Overview" icon="About" />
      <MobileNavItem linkTo="/#solutions" label="Solutions" icon="Idea" />
      <MobileNavItem linkTo="/news/" label="News" icon="News" />
      <MobileNavItem linkTo="/contact/" label="Contact" icon="Support" />
      <MobileNavItem linkTo="/careers/" label="Careers" icon="Briefcase" />
    </Wrapper>
  </>
);

export default MobileNavigation;
