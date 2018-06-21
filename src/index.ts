class HCRefreshStatesClient {
    ip: string;
    user: string;
    password: string;

    constructor(ip: string, user: string, password: string) {
        this.ip = ip;
        this.user = user;
        this.password;
    }

    getRefreshStates(last: number = 1) {
        let url: string = "";
    }
}

var config = {
    "ip":"192.168.1.11",
    "user": "admin",
    "password": "Testing123"
}

let clinet = new HCRefreshStatesClient(config.ip, config.user, config.password);



