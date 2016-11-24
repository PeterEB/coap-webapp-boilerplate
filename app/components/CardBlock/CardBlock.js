import React, {PropTypes} from 'react';
import GridLayout from 'react-grid-layout';
import {WidthProvider} from 'react-grid-layout';

import {Illuminance, Light, Weather} from '../Card/Card';

var ReactGridLayout = WidthProvider(GridLayout);

var keyCounter,
    layoutDataGrids;

var CardBlock = React.createClass({
    propTypes: {
        devs: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired,
    },

    getCard: function (type, permAddr, status, auxId, value) {
        var card,
            enable = false,
            cardProps = {};

        if (status === 'online') {
            enable = true;
        }

        switch (type) {
            case 'Illuminance':
                cardProps.key = 'bigCard0';
                cardProps.dataGrid = {x: 2, y: 0, w: 2, h: 2};
                card = (<Illuminance enable={enable} lux={value} />);
                break;
            case 'Light':
                cardProps.key = 'smallCard0';
                cardProps.dataGrid = {x: 4, y: 0, w: 1, h: 2};
                card = (<Light enable={enable} permAddr={permAddr} auxId={auxId} onOff={value} onClick={this.props.onClick} />);
                break;
        }

        return (
            <div key={cardProps.key} data-grid={cardProps.dataGrid}>
                {card}
            </div>
        );
    },

    getRowHeight: function () {
        var rowHeight;

        if (window.matchMedia("(min-width: 1800px)").matches) {
            rowHeight = 70;
        } else if (window.matchMedia("(min-width: 1400px)").matches) {
            rowHeight = 60;
        } else if (window.matchMedia("(min-width: 1000px)").matches) {
            rowHeight = 45;
        } else if (window.matchMedia("(min-width: 600px)").matches) {
            rowHeight = 35;
        } else {
            rowHeight = 20;
        }

        return rowHeight;
    },

    render: function () {
        var allGadRender = [],
            rowHeight = this.getRowHeight();

        for (var permAddr in this.props.devs) {
            for (var auxId in this.props.devs[permAddr].gads) {
                var type = this.props.devs[permAddr].gads[auxId].type,
                    status = this.props.devs[permAddr].status,
                    value = this.props.devs[permAddr].gads[auxId].value,
                    card = this.getCard(type, permAddr, status, auxId, value);

                allGadRender.push(card);
            }
        }

        allGadRender.push(
            <div key='Weather' data-grid={{x: 5, y: 0, w: 2, h: 4}}>
                <Weather />
            </div>
        );

        return (
            <div style={{margin:'1% 0%'}}>
                <ReactGridLayout cols={9} rowHeight={rowHeight} isDraggable={false}>
                    {allGadRender}
                </ReactGridLayout>
            </div>
        );
    }
});

export default CardBlock