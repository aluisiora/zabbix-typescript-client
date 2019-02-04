import { ZabbixSocket } from './ZabbixSocket';
import { ZabbixCommunicator } from './ZabbixCommunicator';

export class ZabbixAPI {
    private socket: ZabbixSocket;

    constructor(socket: ZabbixSocket) {
        this.socket = socket;
    }

    public async login(username: string, password: string): Promise<string> {
        return await this.method('user.login').call({
            user: username,
            password,
        });
    }

    public async logout() {
        return await this.method('user.logout').call();
    }

    public method(method: string): ZabbixCommunicator {
        return new ZabbixCommunicator(this.socket, method);
    }
}
