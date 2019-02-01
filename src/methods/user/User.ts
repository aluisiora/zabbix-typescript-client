import { ZabbixCommunicator } from 'ZabbixCommunicator';
import { AxiosInstance } from 'axios';

export class User extends ZabbixCommunicator {
    constructor(http: AxiosInstance) {
        super(http);
        this.method = 'user.';
    }

    public async login(username: string, password: string): Promise<void> {
        const token = await this.call(this.method + 'login', {
            user: username,
            password,
        });
        this.setToken(token);
        return Promise.resolve();
    }

    public async logout(): Promise<void> {
        const success = await this.call('user.logout');
        if (success) this.setToken(null);
        return Promise.resolve();
    }
}
