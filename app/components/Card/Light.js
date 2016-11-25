import React, { PropTypes } from 'react';
import LightOnIcon from '../Icons/LightOnIcon'
import LightOffIcon from '../Icons/LightOffIcon'

var fgColor = "#FFF",
    bgColor = '#6C7A89',
    fgColorDisabled = "#EEEEEE",
    bgColorDisabled = "#BDBDBD",
    fgColorOn = "#f9ffa8",
    fgColorOff = "#FFF";

const Light = React.createClass({
    propTypes: {
        enable: PropTypes.bool.isRequired,
        onOff: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    },
    render: function() {
        let enable = !!this.props.enable;
        let onOff = !!this.props.onOff;
        let onClick = enable ? this.props.onClick(this.props.permAddr, this.props.auxId, !onOff) : null;

        // background color 與 fg color 會根據裝置的網路連線狀態有所不同
        // [TODO]

        // icon 會根據裝置的開關狀態有所不同
        // [TODO]

        return (
            <div style={{width: '100%', height: '100%', backgroundColor: cardBgColor }} onClick={onClick}>
                [TODO]
            </div>
        );
    }
});

export default Light
