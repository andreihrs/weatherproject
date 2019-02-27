import React from 'react';
import Hour from './Hour/Hour';

const periods = [
    {period: 'morning', degrees: 17},
    {period: 'afternoon', degrees: 20},
    {period: 'evening', degrees: 18} 
];

const hourlyForecast = (props) => {
    return (
        <div className="HourlyForecast">
            {periods.map(per => (
                <Hour 
                    period={per.period}
                    degrees={per.degrees}
                    key={per.period}
                />
            ))}
        </div>
    );
};

export default hourlyForecast;