import axios from 'axios';
import * as actionTypes from './actionTypes';
const api_key = '0b158e22634b52fdf4b482f36af0de45';

export const fetchDayFailed = () => {
    return {
        type: actionTypes.FETCH_DAYS_FAILED
    };
};

export const setDay = (min, max, forecast) => {
    return {
        type: actionTypes.SET_MAIN_DAY,
        min_temp: min,
        max_temp: max,
        weather: forecast
    };
};

export const initDay = () => {
    return dispatch => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Bucharest,ro&APPID=${api_key}`)
            .then( res => {
                let min = parseInt(res.data.main.temp_min - 273.15);
                let max = parseInt(res.data.main.temp_max - 273.15);
                let forecast = res.data.weather[0].main;
                dispatch(setDay(min, max, forecast));
            })  
            .catch(error => {
                dispatch(fetchDayFailed());
            });
    };
};

