# stickyboard-github-calendar
GitHub calendar component for StickyBoard

[![Version](https://img.shields.io/npm/v/@stickyboard/github-calendar.svg)](https://npmjs.org/package/@stickyboard/github-calendar)
[![Downloads/week](https://img.shields.io/npm/dw/@stickyboard/github-calendar.svg)](https://npmjs.org/package/@stickyboard/github-calendar)
[![License](https://img.shields.io/npm/l/@stickyboard/github-calendar.svg)](https://github.com/soaple/@stickyboard/github-calendar/blob/master/package.json)

# Webpack watch
```bsh
$ npm start
```

# Build
```bsh
$ npm run build
```

# Usage example
```javascript
import React from 'react';
import { GitHubCalendar } from '@stickyboard/github-calendar';

const sampleData = [
    { date: '2020-01-01', count: 10 },
    { date: '2020-02-01', count: 20 },
    { date: '2020-03-01', count: 30 },
    { date: '2020-04-01', count: 5 },
    { date: '2020-05-01', count: 7 },
    { date: '2020-06-01', count: 12 },
    { date: '2020-07-01', count: 16 },
    { date: '2020-08-01', count: 21 },
    { date: '2020-09-01', count: 19 },
    ...
];

function SampleGitHubCalendar(props) {
    const { colors } = props;

    return (
        <GitHubCalendar
            startDate={'2020-01-01'}
            endDate={'2020-12-31'}
            data={sampleData}
        />
    );
}

export default SampleGitHubCalendar;

```

# License
This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
