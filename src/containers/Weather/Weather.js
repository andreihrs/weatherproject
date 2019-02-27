import React, { Component } from 'react';

import Spinner from './../../components/UI/Spinner/Spinner';
import DetailedWeather from './../../components/DetailedWeather/DetailedWeather';
import DailyForecasts from './../../components/DailyForecasts/DailyForecasts';
import WeatherGraphic from './../../components/WeatherGraphic/WeatherGraphic';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';



class Weather extends Component {
    state = {
        //min_temp: 0, 
       // max_temp: 0,
        // error: false,
        //weather: null
    }

    componentDidMount() {
        console.log(this.props);
        this.props.onInitDay(); 
      }    
    
    render() {
        const verif = this.props.forecast;
        const loading = verif === null;
        let weather = loading ? <Spinner /> : 
            <DetailedWeather 
                min={this.props.minTemp} 
                max={this.props.maxTemp} 
                weather={this.props.forecast}
            />;
        if(this.props.error)
             weather = null; 
            
        return(
            <div>
                {weather}
                <WeatherGraphic />
                <DailyForecasts chooseDay={this.chooseDayHandler}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        minTemp: state.min_temp,
        maxTemp: state.max_temp,
        forecast: state.weather
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitDay: () => dispatch(actions.initDay())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);