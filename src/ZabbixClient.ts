import { ZabbixAPI } from './ZabbixAPI';
import { ZabbixSocket } from './ZabbixSocket';

export class ZabbixClient {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public async login(username: string, password: string): Promise<ZabbixAPI> {
        const socket = new ZabbixSocket(this.url);
        const api = new ZabbixAPI(socket);
        const token = await api.user().login(username, password);
        socket.setToken(token);
        return Promise.resolve(api);
    }
}
