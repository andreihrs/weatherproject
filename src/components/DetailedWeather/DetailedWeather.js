import React from 'react';

const detailedWeather = (props) => {
    return (
          <div>
            <p> Today are min {props.min} and max {props.max} degrees </p>
            <img src={require(`../../images/${props.weather.toLowerCase()}.svg`)} width='100px' height='100px' alt='Today weather'/>
          </div>
      );  
  }

export default detailedWeather;