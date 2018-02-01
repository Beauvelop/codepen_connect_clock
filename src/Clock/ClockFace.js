import React from 'react';

const ClockFace = () => {
    return (
            <svg className="face-layers-svg"  viewBox="0 0 220 220">
                <g className="clock-face-layers-grp">
                    <linearGradient id="face-grad" x1="124.5342" x2="-10.5332" y1="350.689" y2="195.3116" gradientTransform="rotate(180 83.5 191.5)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffdaa1" />
                        <stop offset=".9294" stopColor="#fff6ed" />
                    </linearGradient>
                    <circle className="face" cx="110" cy="110" r="102.9" fill="url(#face-grad)" />
                    <circle className="face-ring" cx="110" cy="110" r="102.9" fill="none" stroke="#000" strokeWidth="5" />
                </g>

            </svg>
        

    )
}

export default ClockFace;