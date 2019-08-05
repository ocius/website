import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  font-size: 1.5rem;
  width: 100%;
  overflow: hidden;
  border: 0;

  caption {
    font-size: 2.1rem;
    margin: 0.5em 0 0.75em;
  }

  thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  tr {
    background-color: #f3f3f3;
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  td {
    border-bottom: 1px solid #ddd;
    display: block;
    text-align: right;
  }

  td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  td:last-child {
    border-bottom: 0;
  }
`;

const AISInfo = () => {
  return (
    <>
      <StyledTable>
        <caption>AIS Info</caption>
        <thead>
          <tr>
            <th scope="col">MMSI</th>
            <th scope="col">Name</th>
            <th scope="col">Range</th>
            <th scope="col">Brng</th>
            <th scope="col">Speed</th>
            <th scope="col">Hgd</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="MMSI">503083490</td>
            <td data-label="Name">BOB-UNMANNED</td>
            <td data-label="Range">4</td>
            <td data-label="Brng">332</td>
            <td data-label="Speed">1</td>
            <td data-label="Hgd">83</td>
          </tr>
          <tr>
            <td data-label="MMSI">503058730</td>
            <td data-label="Name">BRUCE-UNMANNED</td>
            <td data-label="Range">42</td>
            <td data-label="Brng">94</td>
            <td data-label="Speed">0</td>
            <td data-label="Hgd">92</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Range</th>
            <th>Brng</th>
            <th>Speed</th>
            <th>Hgd</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="ID">2</td>
            <td data-label="Name">undefined</td>
            <td data-label="Range">24</td>
            <td data-label="Brng">121</td>
            <td data-label="Speed">0</td>
            <td data-label="Hgd">221</td>
          </tr>
          <tr>
            <td data-label="ID">3</td>
            <td data-label="Name">undefined</td>
            <td data-label="Range">4649</td>
            <td data-label="Brng">33</td>
            <td data-label="Speed">0</td>
            <td data-label="Hgd">18</td>
          </tr>
          <tr>
            <td data-label="ID">82</td>
            <td data-label="Name">undefined</td>
            <td data-label="Range">114013</td>
            <td data-label="Brng">21</td>
            <td data-label="Speed">0</td>
            <td data-label="Hgd">324</td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
};

export default AISInfo;
