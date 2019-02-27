import React, { Component } from 'react';
import './App.css';
import Weather from './containers/Weather/Weather';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={Weather}/>
        <Route path='/hourly' component={HourlyForecast}/>
      </Switch>
      </div>
    );
  }
}

export default App;
