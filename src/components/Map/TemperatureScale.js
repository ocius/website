import React from 'react';
import styled from 'styled-components';
import VSBar from './VerticalStackedBar'

const ChartBarWrapper = styled.div`
    position: absolute;
    right: 0;
    height: 100%;
    z-index: 1;
    background: white;
`;

const TemperatureScale = () => {
    return (
        <ChartBarWrapper>
            <VSBar
                showTextDown
                data={[
                    { value: 1, description: "28\u2103", color: "#ff9bff" },
                    { value: 1, description: "27\u2103", color: '#ff00ff' },
                    { value: 1, description: "26\u2103", color: '#FF8000' },
                    { value: 1, description: "25\u2103", color: '#FF0000' },
                    { value: 1, description: "24\u2103", color: '#ea3d25' },
                    { value: 1, description: "23\u2103", color: '#ff6600' },
                    { value: 1, description: "22\u2103", color: '#ffab01' },
                    { value: 1, description: "21\u2103", color: '#ffff00' },
                    { value: 1, description: "20\u2103", color: '#b5ff45' },
                    { value: 1, description: "19\u2103", color: '#79b831' },
                    { value: 1, description: "18\u2103", color: '#00aa00' },
                    { value: 1, description: "17\u2103", color: '#018c64' },
                    { value: 1, description: "16\u2103", color: '#00c3ac' },
                    { value: 1, description: "15\u2103", color: '#00ffff' },
                    { value: 1, description: "14\u2103", color: '#348fff' },
                    { value: 1, description: "13\u2103", color: '#0245ff' },
                    { value: 1, description: "12\u2103", color: '#33007f' },
                    { value: 1, description: "11\u2103", color: '#800080' },
                    { value: 1, description: "10\u2103", color: '#805880' }
                ]}
            />
        </ChartBarWrapper>);
}

export default TemperatureScale;