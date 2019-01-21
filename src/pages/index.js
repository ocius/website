import React from "react";
import { Link } from "gatsby";
import Title from "../components/title";

export default () => (
    <div style={{ color: `blue`}}>
        <Link to="/">Home</Link>
        <Link to="/science">Science</Link>
        <Link to="/news">News</Link>
        <Title />
        <p>Satellites of the Sea</p>
        <img src="https://www.business.gov.au/-/media/Business/RDTI/Images/Occius.jpg" alt="Ocius ocean drone: a blue boat sailing on the ocean at Sydney harbour"/>
    </div>
);
