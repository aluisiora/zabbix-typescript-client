import axios from 'axios';
import { ZabbixMethod } from 'ZabbixMethod';

export class ZabbixClient {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public async login(username: string, password: string) {
        const http = axios.create({
            baseURL: this.url,
            headers: {
                Accept: 'application/json',
            },
        });

        const zabbixMethod = new ZabbixMethod(http);

        await zabbixMethod.user().login(username, password);

        return zabbixMethod;
    }
}
