import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

export class HCRefreshStatesClient {
    ip: string;
    user: string;
    password: string;

    constructor(ip: string, user: string, password: string) {
        this.ip = ip;
        this.user = user;
        this.password = password;
    }

    getRefreshStates(last: number = 1, callback?: Function) {
        let url: string = "http://" + this.ip + "/api/refreshStates?last=" + last;

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
            console.log("error")
        });
    }


}
