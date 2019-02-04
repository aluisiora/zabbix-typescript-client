import { ZabbixSocket } from './ZabbixSocket';
import { ZabbixCommunicator } from './ZabbixCommunicator';

/**
 * The API link which can login, logout and set a method to use
 */
export class ZabbixAPI {
    private socket: ZabbixSocket;

    constructor(socket: ZabbixSocket) {
        this.socket = socket;
    }

    /**
     * Login and set the access token for further api calls
     * @param username
     * @param password
     */
    public async login(username: string, password: string): Promise<string> {
        return await this.method('user.login').call({
            user: username,
            password,
        });
    }

    /**
     * Logout and unset the access token, no api call can be made
     * without logging again
     */
    public async logout() {
        const result = await this.method('user.logout').call();
        this.socket.setToken(null);
        return result;
    }

    /**
     * Set the zabbix method to use. Ex: 'host.get'
     * @param method
     */
    public method(method: string): ZabbixCommunicator {
        return new ZabbixCommunicator(this.socket, method);
    }
}
