import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";

export default () => (
  <div>
    <Helmet title="About page for Ocius website"/>
    <Nav />
    <Header content="About" />
    <p>About Ocius</p>
  </div>
);
