import React from 'react';

export default function (props) {
    return (
        <div style={{position: "absolute", top: "0", bottom: "0", left: "0", right: "0", margin: "auto", width: '60%', height: '60%'}}>
            <svg style={props.style} fill={props.fill} height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <g>
                        <path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"/>
                    </g>
                </g>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path transform="translate(15), scale(0.5, 0.5)" d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
        </div>
    );
};
