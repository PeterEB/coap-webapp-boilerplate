import React from 'react';

export default function (props) {
    return (
        <div style={{position: "absolute", top: "0", bottom: "0", left: "0", right: "0", margin: "auto", width: '60%', height: '60%'}}>
            <svg style={props.style} fill={props.fill} height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
    			<path d="M0 0h24v24H0z" fill="none"/>
    			<path d="M3.55 95zM4 10.5H1v2h0v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 7.66l1.79 1.8z"/>
            </svg>
        </div>
    );
};
