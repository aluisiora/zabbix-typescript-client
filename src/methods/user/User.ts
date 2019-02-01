import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { ZabbixSocket } from '../../ZabbixSocket';

export class User extends ZabbixCommunicator {
    constructor(socket: ZabbixSocket) {
        super(socket);
        this.method = 'user.';
    }

    public async login(username: string, password: string): Promise<string> {
        const token = await this.call('login', {
            user: username,
            password,
        });
        return Promise.resolve(token);
    }

    public async logout(): Promise<boolean> {
        const success = await this.call('logout');
        return Promise.resolve(success);
    }
}
