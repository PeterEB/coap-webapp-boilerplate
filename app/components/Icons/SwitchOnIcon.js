import React from 'react';

export default function (props) {
    return (
        <div style={{position: "absolute", top: "0", bottom: "0", left: "0", right: "0", margin: "auto", width: '60%', height: '60%'}}>
            <svg style={props.style} fill={props.fill} height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 24H0V0h24v24z" fill="none"/>
                <circle cx="12" cy="12" fill={props.fill} r="8"/>
            </svg>
        </div>
    );
};
