import { ZabbixSocket } from 'ZabbixSocket';
import { Host } from './methods/host/Host';
import { User } from './methods/user/User';

export class ZabbixAPI {
    private socket: ZabbixSocket;

    constructor(socket: ZabbixSocket) {
        this.socket = socket;
    }

    public user(): User {
        return this.factory<User>('user');
    }

    public host() {
        return this.factory<Host>('host');
    }

    private factory<T>(method: string): T {
        switch (method) {
            case 'host':
                return new Host(this.socket) as any;
            case 'user':
                return new User(this.socket) as any;
            default:
                throw new Error('what?');
        }
    }
}
