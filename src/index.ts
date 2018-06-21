import { HCRefreshStatesClient } from './HCRefreshStatesClient';

interface IRefreshStatesChangesFilter {
    deviceId?: Array<number>;
    property?: Array<string>;
}

interface IProperty {
    name: string,
    value: any
}

interface IRefreshStatesDeviceChanges {
    deviceId: number, 
    properties: Array<IProperty>
}

function printChanges(data: any, filter: IRefreshStatesChangesFilter = null) {
    let changes: Array<IRefreshStatesDeviceChanges>;

    for(let change of data.changes) {
        if(!filter || !filter.deviceId || filter.deviceId.indexOf(change.id) > -1) {
            console.log(change);
        }
    }
}

var config = {
    "ip":"192.168.1.11",
    "user": "admin",
    "password": "admin"
}

let filter: IRefreshStatesChangesFilter = {
    deviceId: [5]
}

let client = new HCRefreshStatesClient(config.ip, config.user, config.password);

client.getRefreshStates(1, function(data) {
    printChanges(data, filter);
});



