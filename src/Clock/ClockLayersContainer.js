import React, { Component } from 'react';
import Grunge from './Grunge';
import ClockFace from './ClockFace';
import SecondsFace from './SecondsFace';
import HourMarks from './HourMarks';
import NumbersLayer from './NumbersLayer';
import HandsContainer from './Hands/HandsContainer';

class ClockLayersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
    }
  
    // with thx to dan abramov https://codepen.io/gaearon/pen/amqdNA
    componentDidMount() {  
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
          date: new Date(),
          seconds: this.state.date.getSeconds(),
          minutes: this.state.date.getMinutes(),
          hours: this.state.date.getHours()
        });
      }
    

    render() {
        return (
            <div className="clock-container">
            <ClockFace />
            <SecondsFace />
            <HourMarks />
            <NumbersLayer />
            <HandsContainer hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
            <Grunge />
            </div>
          )
        }
      }

export default ClockLayersContainer;