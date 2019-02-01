import { AxiosInstance } from 'axios';
import { Host } from './methods/host/Host';
import { User } from './methods/user/User';

export class ZabbixMethod {
    private http: AxiosInstance;

    constructor(http: AxiosInstance) {
        this.http = http;
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
                return new Host(this.http) as any;
            case 'user':
                return new User(this.http) as any;
            default:
                throw new Error('what?');
        }
    }
}
