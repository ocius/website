/* eslint-disable no-script-url */
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import StyledDropdown from '../components/carbon/Dropdown';
import Header from '../components/carbon/Header';
import LeftNav from '../components/carbon/LeftNav';
import GMap from '../components/GMap';
import '../scss/index.scss';

// Google Maps key
const apiKey = `AIzaSyC18SYECJZXKTOG6Ljm8W68mENW1uEmTAg`;

const FormWrapper = styled.div`
  padding: 1rem;
  flex: 1 1;

  hr {
    border: 0;
    height: 1px;
    background: #8c8c8c;
    margin: 2rem 0;
  }

  .bx--label {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.32px;
    color: #565656;
    font-weight: 400;
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: 0.5rem;
    line-height: 1rem;
    pointer-events: none;
  }
`;

const FormItem = styled.div`
  font-size: 0.9rem;
  margin: 0 0 1rem;
`;

const items = [
  {
    id: 'option-1',
    text: 'Option 1'
  },
  {
    id: 'option-2',
    text: 'Option 2'
  },
  {
    id: 'option-3',
    text: 'Option 3'
  },
  {
    id: 'option-4',
    text: 'Option 4'
  }
];

export default ({ shouldHideHeader }) => (
  <>
    <SEO title="Live" description="See where Bluebottles are at any time – LIVE." />
    <Header shouldHideHeader={shouldHideHeader} />
    <LeftNav shouldHideHeader={shouldHideHeader}>
      <FormWrapper>
        <FormItem>
          <StyledDropdown
            id="carbon-dropdown-example"
            type="default"
            label="MAVLink"
            ariaLabel="Dropdown"
            titleText="Link Type:"
            items={items}
            itemToString={item => (item ? item.text : '')}
          />
        </FormItem>
        <FormItem>
          <StyledDropdown
            id="carbon-dropdown-example"
            type="default"
            label="Bob"
            ariaLabel="Dropdown"
            titleText="Vessel:"
            items={items}
            itemToString={item => (item ? item.text : '')}
          />
        </FormItem>
        <FormItem>
          <StyledDropdown
            id="carbon-dropdown-example"
            type="default"
            label="1Hz"
            ariaLabel="Dropdown"
            titleText="Frequency:"
            items={items}
            itemToString={item => (item ? item.text : '')}
          />
        </FormItem>
        <FormItem>
          <StyledDropdown
            id="carbon-dropdown-example"
            type="default"
            label="Vessel Status"
            ariaLabel="Dropdown"
            titleText="Chart Mode:"
            items={items}
            itemToString={item => (item ? item.text : '')}
          />
        </FormItem>
        <hr />
        <FormItem>Latitude: -33.90594</FormItem>
        <FormItem>Longitude: 151.23461</FormItem>
        <FormItem>Num Sats: 10</FormItem>
        <FormItem>HDOP: 1.10</FormItem>
        <FormItem>Heading: 287.3</FormItem>
      </FormWrapper>
    </LeftNav>
    <GMap
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </>
);
