import React from 'react';
import './DailyForecasts.css';
import DailyForecast from './DailyForecast/DailyForecast';
import sunclouds from '../../images/sunny.svg';
import cloudy from '../../images/clouds.svg';
import rainy from '../../images/drop.svg';
import sunny from '../../images/clear.svg';
//import { Link } from 'react-router-dom';

const forecasts = [
    {weather: sunclouds, loTemp: 10, hiTemp: 18, day: "Mon"},
    {weather: cloudy, loTemp: 0, hiTemp: 12, day: "Tue"},
    {weather: rainy, loTemp: 3, hiTemp: 12, day: "Wed"},
    {weather: sunny, loTemp: 4, hiTemp: 10, day: "Thu"},
    {weather: sunny, loTemp: 9, hiTemp: 15, day: "Fri"},
    {weather: sunclouds, loTemp: 2, hiTemp: 13, day: "Sat"},
    {weather: cloudy, loTemp: 4, hiTemp: 8, day: "Sun"}
];
// <Link to='/hourly' key={forc.day}>
// 
// {/*</Link>*/}
const dailyForecasts = (props) => (
    <div className="DailyForecasts">
        {forecasts.map(forc => (
        <DailyForecast
            key={forc.day}
            img={forc.weather} 
            high={forc.hiTemp}
            low={forc.loTemp} />
        ))}
    </div>
);

export default dailyForecasts;