import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';    

const imgStyle = {
    width: '60px',
    height: '60px'
};
class DailyForecast extends Component {
    render () {
        let str = this.props.img;
        let val = str.match(/\w+.\w+.svg/g)[0];
        let val2 = val.split('.');
        
        return (
            <div onClick={() => this.props.onDaySelected(this.props.low, this.props.high, val2[0])}>
                <img style={imgStyle} src={this.props.img} alt='Sunny' /> 
                <p>{this.props.low}</p>
                <p>{this.props.high}</p>
            </div>
        );
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onDaySelected: (low, high, img) => dispatch({type: actionTypes.SEL_DAY, payload: {min: low, max: high, forc: img}})
    };
};



export default connect(null, mapDispatchToProps)(DailyForecast);