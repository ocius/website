import React from "react";
import Nav from "../components/nav";
import Title from "../components/title";
import Helmet from "react-helmet";

export default () => (
    <div>
        <Helmet title="Ocius Technology"/>
        <Nav />
        <Title />
        <p>Satellites of the Sea</p>
        <img src="https://ocius.com.au/wp-content/uploads/2017/09/wallpaperocius-768x432.jpg" alt="Ocius ocean drone: a blue boat sailing on the ocean at Sydney harbour"/>
    </div>
);
