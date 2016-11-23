import React from 'react';

export default function (props) {
    return (
        <div style={{position: "absolute", top: "0", bottom: "0", left: "0", right: "0", margin: "auto", width: '60%', height: '60%'}}>
            <svg style={props.style} fill={props.fill} height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <g>
                        <path d="M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75"/>
                    </g>
                </g>
                <path d="M0 0h24v24H0z" fill="none"/>
    <path transform="translate(24), scale(-0.7, 0.7)" d="M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 7z"/>            </svg>
        </div>
    );
};
