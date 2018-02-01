import React from 'react';

const HourMarks = () => {
    return (
        <svg className="hourmarks-svg" viewBox="0 0 220 220">>
            <g className="hour-marks" strokeWidth="1" stroke="#000" strokeMiterlimit="10">
                <path id="hr-1" d="M159.9 26.7l-2.9 2 .2-3.6 2.9-1.9z" />
                <path id="hr-2" d="M194.8 62.8l-3.5.2 2-2.9 3.5-.2z" />
                <path id="hr-3" d="M207.1 111.6l-3.2-1.6 3.2-1.6 3.1 1.6z" />
                <path id="hr-4" d="M193.3 159.9l-2-2.9 3.6.2 1.9 2.9zM12.9 108.4l3.2 1.6-3.2 1.6-3.1-1.6z" />
                <path id="hr-5" d="M157.2 194.9l-.3-3.5 3 1.9.2 3.5z" />
                <path id="hr-7" d="M60.2 193.3l2.8-1.9-.3 3.4-2.8 2z" />
                <path id="hr-6" d="M108.5 207.1l1.5-3.1 1.5 3.1-1.5 3.1z" />
                <path id="hr-8" d="M25.2 157.2l3.4-.2-2 2.8-3.4.3z" />
                <path id="hr-10" d="M26.7 60.1l1.9 2.9-3.5-.2-1.9-2.9z" />
                <path id="hr-11" d="M62.8 25.1l.2 3.5-2.9-1.9-.2-3.5z" />
                <path id="hr-12" d="M111.6 12.9l-1.6 3.2-1.6-3.2 1.6-3.1z" />
            </g>
        </svg>
    )
}

export default HourMarks;