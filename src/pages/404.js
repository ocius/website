import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";

export default () => (
  <Layout>
    <Header content="Not Found" />
    <p>That page does not exist</p>
    <img
      src="https://writerscafe.s3.amazonaws.com/stories/93933e3f3d753a029ec801d9fb2ba426.jpg"
      alt="An empty ocean"
    />
  </Layout>
);
