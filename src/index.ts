import { HCRefreshStatesClient } from './HCRefreshStatesClient';

interface RefreshStatesChangesFilter {
    deviceId?: Array<number>;
    property?: Array<string>;
}

interface Property {
    name: string,
    value: number, string, Object, Array
}

interface RefreshStatesDeviceChanges {
    deviceId: number, 
    properties: Array<Property>
}

function printChanges(data: any, filter: RefreshStatesChangesFilter = null): void {
    let changes: Array<RefreshStatesDeviceChanges>;

    for(let change of data.changes) {
        if(!filter || !filter.deviceId || filter.deviceId.indexOf(change.id) > -1) {
            console.log(change);
        }
    }
}

const config = {
    "ip":"192.168.80.24",
    "user": "admin",
    "password": "admin"
}

const filter: RefreshStatesChangesFilter = {
   deviceId: [7, 12, 44, 56, 70]
}

const client = new HCRefreshStatesClient(config.ip, config.user, config.password);

client.getRefreshStates(1, (data) => {
    printChanges(data, filter);
});



