import { ZabbixSocket } from 'ZabbixSocket';
import { Host } from './methods/host/Host';
import { User } from './methods/user/User';
import { Item } from './methods/item/Item';
import { Trigger } from 'methods/trigger/Trigger';
import { Template } from 'methods/template/Template';

export class ZabbixAPI {
    private socket: ZabbixSocket;

    constructor(socket: ZabbixSocket) {
        this.socket = socket;
    }

    public user(): User {
        return new User(this.socket);
    }

    public host(): Host {
        return new Host(this.socket);
    }

    public item(): Item {
        return new Item(this.socket);
    }

    public trigger(): Trigger {
        return new Trigger(this.socket);
    }

    public template(): Template {
        return new Template(this.socket);
    }
}
