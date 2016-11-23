import React from 'react';

var fgColor = "#FFF",
    bgColor = "#CDDC39",
    fgColorDisabled = "#EEEEEE",
    bgColorDisabled = "#BDBDBD";

const Illuminance = ({enable, lux}) => {
    enable = !!enable;

    let cardFgColor = enable ? fgColor : fgColorDisabled;
    let cardBgColor = enable ? bgColor : bgColorDisabled;
    let cardValue = enable ? lux : undefined;

    return (
        <div style={{width: "100%", height: "100%", backgroundColor: cardBgColor }}>
            <div style={{float: "left", width: "50%", height: "100%"}}>
                <div style={{position: "relative", top: "15%", left: "15%", width: "70%", height: "70%"}}>
                    <svg fill={cardFgColor} height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
                    </svg>
                </div>
            </div>

            <div style={{float: "left", width: "50%", height: "100%"}}>
                <div style={{position: "absolute", top: "30%", bottom: "0", left: "50%", right: "0", margin: "0", textAlign: "center", fontSize: "1.5em", fontWeight:"bold", color: "white"}}>
                    {cardValue} lx
                </div>
            </div>
        </div>
    );
}

export default Illuminance
