// src/GitHubCalendar.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import '../static/css/style.css';

const Wrapper = styled.div`
    overflow-x: scroll;
    direction: rtl;
`;

class GitHubCalendar extends React.Component {
    constructor(props) {
        super(props);
    }

    countList = this.props.data.map((value) => value.count);
    largest = Math.max.apply(null, this.countList);

    calculateCount = (value) => {
        const count = (value.count / this.largest) * 100;

        if (count < 10) {
            return 1;
        }
        if (count < 30) {
            return 2;
        }
        if (count < 70) {
            return 3;
        }
        return 4;
    };

    render() {
        const { startDate, endDate, data } = this.props;

        return (
            <Wrapper>
                <CalendarHeatmap
                    startDate={new Date(startDate)}
                    endDate={new Date(endDate)}
                    gutterSize={3}
                    showOutOfRangeDays={true}
                    values={data}
                    classForValue={(value) => {
                        if (!value) {
                            return 'color-empty';
                        }
                        const count = this.calculateCount(value);
                        return `color-scale-${count}`;
                    }}
                    tooltipDataAttrs={(value) =>
                        value.count && {
                            'data-tip': `(${value.date}) ${value.count}`,
                        }
                    }
                />
                <ReactTooltip />
            </Wrapper>
        );
    }
}

GitHubCalendar.propTypes = {};

export default GitHubCalendar;
