import React from 'react';

const SecondsHand = () => {
    return (
            <svg onChange={this.onChangeHandler} className="secondshand-svg" stroke="#000" fill="none" viewBox="220 140 60 220">
                <ellipse id="center-hinge" cx="250" cy="250" strokeWidth="6" rx="3" ry="3" />
                <path id="sec-hand-path" stroke="maroon" strokeWidth="1px" d="M250 155v95" />
            </svg>
        )
    }

export default SecondsHand;