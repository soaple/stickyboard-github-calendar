import React from 'react';
import styled from 'styled-components';

const LegendsWrapper = styled.div`
    position: fixed;
    padding: 0 15px;
    text-align: right;
`;

const Color = styled.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    margin: 0 2px;
    border: 1px solid rgba(27, 31, 35, 0.04);
    border-radius: 2px;
`;

const Text = styled.span`
    margin: 0 4px;
    font-size: 12px;
    color: #767676;
    vertical-align: text-top;
`;

const colors = ['#eeeeee', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

function Legends() {
    return (
        <LegendsWrapper>
            <Text>Less</Text>
            {colors.map((color, index) => (
                <Color key={index} style={{ backgroundColor: color }}></Color>
            ))}
            <Text>More</Text>
        </LegendsWrapper>
    );
}

export default Legends;
