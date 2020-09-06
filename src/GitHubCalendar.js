// src/GitHubCalendar.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import Legends from './Legends';

import '../static/css/style.css';

const Wrapper = styled.div`
    overflow-x: scroll;
    direction: rtl;
`;

class GitHubCalendar extends React.Component {
    constructor(props) {
        super(props);
    }

    calculateCount = (value, largest) => {
        const count = (value.count / largest) * 100;

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
        const countList = data.map((value) => value.count);
        const largest = Math.max.apply(null, countList);

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
                        const count = this.calculateCount(value, largest);
                        return `color-scale-${count}`;
                    }}
                    tooltipDataAttrs={(value) =>
                        value.count && {
                            'data-tip': `(${value.date}) ${value.count}`,
                        }
                    }
                />
                <ReactTooltip />
                <Legends />
            </Wrapper>
        );
    }
}

GitHubCalendar.propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string,
            count: PropTypes.number,
        })
    ),
};

export default GitHubCalendar;
