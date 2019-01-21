import React from "react";
import Header from "../components/header";
import Title from "../components/title";
import Nav from "../components/nav";

export default () => (
  <div style={{ color: `white` }}>
    <Nav />
    <Title />
    <Header content="Science" />

    <p>Live Ocean Conditions</p>
    <p>Tsnuami Detection</p>
    <p>Whale and fish monitoring</p>

  </div>
);
