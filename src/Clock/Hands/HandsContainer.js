import React, { Component } from 'react';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondsHand from './SecondsHand';

const T = TweenMax; // eslint-disable-line



class HandsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hours: props.hours,
            minutes: props.minutes,
            seconds: props.seconds
        }

    }
    secChangeHandler(seconds) {
        const secDeg = seconds * 6;
        if (secDeg === 0) {
            T.to("#sec-hand-path", 0, { rotation: 0, transformOrigin: '50% 100%' });
        }
        T.to("#sec-hand-path", .2, { rotation: secDeg, transformOrigin: '0% 100%', ease: Elastic.easeOut.config(1, .2) }); // eslint-disable-line
    }

    minChangeHandler(minutes) {
        const minDeg = minutes * 6;
        if (minDeg === 0) {
            T.to("#min-hand-path", 0, { rotation: 0, transformOrigin: '50% 100%' });
        }
        T.to("#min-hand-path", .2, { rotation: minDeg, transformOrigin: '50% 100%', ease: Elastic.easeOut.config(1, .2) }); // eslint-disable-line
    }

    hrsChangeHandler(hours, minutes) { // change to onMount??
        const twelveHr = (hours % 12);
        const minDegAddition = minutes * .5;
        const hrDeg = (twelveHr * 30) + minDegAddition;
        if (hrDeg === 0) {
            T.to("#hr-hand-path", 0, { rotation: 0, transformOrigin: '50% 100%' });
        }
        T.to("#hr-hand-path", .2, { rotation: hrDeg, transformOrigin: '50% 100%', ease: Elastic.easeOut.config(1, .2) }); // eslint-disable-line
    }

    render() {
        return (
            <div>
                <svg className="hands-container-svg" viewBox="0 0 220 220">
                    <HourHand hours={this.hrsChangeHandler(this.props.hours, this.props.minutes)} />
                    <MinuteHand minutes={this.minChangeHandler(this.props.minutes)} />
                    <SecondsHand seconds={this.secChangeHandler(this.props.seconds)} />
                </svg>
            </div>
        )
    }
}

export default HandsContainer;

/*


class App extends Component {
  state = {
    text: '',
    length: '',
  };


  charChangeHandler(evt) {
    const text = evt.target.value;
    this.setState({
      text
    })
  }
  deleteItem(idx) {
    const newArray = this.state.text.split('');
    newArray.splice(idx, 1);
    const updatedTxt = newArray.join('');
    this.setState({
      text: updatedTxt
    })
  }

  render() {
    return (
      <div className="App">
        <div className="display">
          <input id="txt-input" type="text" onChange={(evt) => this.charChangeHandler(evt)} />
          <p>{this.state.text.length}</p>
          <Valid len={this.state.text.length} />
          
        </div>
        {this.state.text.length &&
          this.state.text.split('').map((character, idx) => {
            return <Char 
            character={character} 
            key={idx}
            del={()=>this.deleteItem(idx)}/>
          })
        }
      </div>
    );
  }
}

*/