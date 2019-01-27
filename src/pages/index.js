import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default () => (
  <Layout>
    <Helmet>
      <title>My App's Second Title</title>
    </Helmet>
    <p>Satellites of the Sea</p>
    <img
      src="https://ocius.com.au/wp-content/uploads/2017/09/wallpaperocius-768x432.jpg"
      alt="Ocius ocean drone: a blue boat sailing on the ocean at Sydney harbour"
    />
  </Layout>
);
