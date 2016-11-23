import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import _ from 'busyman';

var NavBar = React.createClass({
    propTypes: {
        title: PropTypes.string.isRequired,
        timeLeft: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
    },

    render: function () {
        let permitTimeLeft = this.props.timeLeft;
        let iconRight = (permitTimeLeft !== 0 && !_.isObject(permitTimeLeft)) ?
                    <LinearProgress style={{position: "absolute", top: "50%", bottom: "0", left: "80%", right: "0", margin: "0", marginRight: "30", width: '120px'}} color='#F2784B' mode="determinate" max={60} value={permitTimeLeft}/> : 
                    <FlatButton style={{position: "absolute", top: "10%", bottom: "0", left: "80%", right: "0", margin: "0", fontFamily: 'Lato'}} label="Permit join" onClick={this.props.onClick}/>;

        return (
            <AppBar
                title={this.props.title}
                titleStyle={{fontFamily: 'Lato', fontWeight:'bold', textAlign: 'center'}}
                iconElementLeft={<div/>}
                iconElementRight = {iconRight}
                style={{backgroundColor: '#2C3E50'}}
            />
        );
    }
});

export default NavBar
