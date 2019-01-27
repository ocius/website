import React from "react";
import Nav from "../components/nav";
import Title from "../components/title";

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Nav />
    <Title />
    {children}
  </div>
);
