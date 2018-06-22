import axios from 'axios';

export class HCRefreshStatesClient {
    constructor(private ip: string, 
        private user: string, 
        private password: string) {}

    getRefreshStates(last: number = 1, callback?: Function): void {
        const url: string = "http://" + this.ip + "/api/refreshStates?last=" + last;

        axios.get(url, {
            withCredentials: true,
            auth: {
                username: this.user,
                password: this.password
            }
        })
        .then(response => {
            console.log('last:' + response.data.last);
            callback(response.data);
            this.getRefreshStates(response.data.last, callback);
        })
        .catch(error => {
            console.log("error: ", error)
        });
    }
}
