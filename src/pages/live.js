/* eslint-disable no-script-url */
import React from 'react';
import {
  HeaderSideNavItems,
  SideNavItems,
  HeaderMenuItem,
  HeaderMenu,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink
} from 'carbon-components-react/lib/components/UIShell';
import { Fade16 } from '@carbon/icons-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import GMap from '../components/GMap';
import '../scss/index.scss';

export default ({ shouldHideHeader }) => (
  <>
    <SEO title="Live" description="See where Bluebottles are at any time – LIVE." />
    <Header shouldHideHeader={shouldHideHeader} />
    <LeftNav shouldHideHeader={shouldHideHeader}>
      <SideNavItems>
        <HeaderSideNavItems hasDivider>
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderSideNavItems>
        <SideNavMenu renderIcon={Fade16} title="Category title">
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu renderIcon={Fade16} title="Category title">
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu renderIcon={Fade16} title="Category title" isActive>
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          <SideNavMenuItem aria-current="page" href="javascript:void(0)">
            Link
          </SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
          Link
        </SideNavLink>
        <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
          Link
        </SideNavLink>
      </SideNavItems>
    </LeftNav>
    <GMap
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </>
);
