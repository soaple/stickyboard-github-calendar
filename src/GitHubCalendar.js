// src/GitHubCalendar.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarHeatmap from 'react-calendar-heatmap';

import 'react-calendar-heatmap/dist/styles.css';
import '../static/css/style.css';

const Wrapper = styled.div``;

class GitHubCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Wrapper>
                <CalendarHeatmap
                    startDate={new Date('2020-01-01')}
                    endDate={new Date('2020-12-31')}
                    gutterSize={3}
                    values={[
                        { date: '2020-01-02', count: 1 },
                        { date: '2020-01-22', count: 2 },
                        { date: '2020-01-30', count: 3 },
                        { date: '2020-02-11', count: 4 },
                        { date: '2020-02-30', count: 2 },
                        { date: '2020-03-20', count: 1 },
                        { date: '2020-05-24', count: 4 },
                    ]}
                    classForValue={(value) => {
                        if (!value) {
                            return 'color-empty';
                        }
                        return `color-scale-${value.count}`;
                    }}
                />
            </Wrapper>
        );
    }
}

GitHubCalendar.propTypes = {};

export default GitHubCalendar;
