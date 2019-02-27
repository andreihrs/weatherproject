import * as actionTypes from './actionTypes';

const initialState = {
    selDay: null,
    min_temp: 0,
    max_temp: 0,
    weather: null,
    error: false
};

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case actionTypes.SEL_DAY:
            return {
                ...state,
                min_temp: action.payload.min,
                max_temp: action.payload.max,
                weather: action.payload.forc
            }
        case actionTypes.SET_MAIN_DAY:
            return {
                ...state,
                min_temp: action.min_temp,
                max_temp: action.max_temp,
                weather: action.weather,
                error: false
            }
        case actionTypes.FETCH_DAYS_FAILED:
            return {
                ...state,
                error: true
            }
        default: 
            return state;
    }
};

export default reducer;