var utils = require('./helpers/utils');

function lightCtrlApp (cserver) {
    cserver.on('ind', function (msg) {
        var cnode = msg.cnode;
        
        switch (msg.type) {
            case 'devIncoming':
                // 裝置加入網路
                // 你可以開始操作入網裝置    
                if (cnode.clientName === 'my_first_node') {
                    cnode.observeReq('lightCtrl/0/onOff');
                } else if (cnode.clientName === 'my_second_node') {
                    cnode.observeReq('illuminance/0/sensorValue');
                }
                break;

            case 'devNotify':
                var pathArray = utils.pathSlashParser(msg.data.path),
                    gad = utils.getGadInfo(pathArray[0], pathArray[1], pathArray[2], msg.data.value),
                    lightCtrlNode;

                if (gad) {
                    switch (gad.type) {
                        case 'Illuminance':
                            lightCtrlNode = cserver.find('my_first_node');

                            if (gad.value < 300 && lightCtrlNode) {
                                lightCtrlNode.writeReq('lightCtrl/0/onOff', true);
                            } else if (gad.value >= 300 && lightCtrlNode) {
                                lightCtrlNode.writeReq('lightCtrl/0/onOff', false);
                            }
                            break;
                        default:
                            break;
                    }
                }
                break;
                
            default:
                break;
        }
    });
}

module.exports = lightCtrlApp;
