import React from "react";
import Title from "../components/title";
import Header from "../components/header";

export default () => (
    <div>
        <Title />
        <Header content="Not found" />
        <p>We can't find that page</p>
        <img src="https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg" alt="An empty ocean"/>
    </div>
);