import { ZabbixSocket } from 'ZabbixSocket';
import { ZabbixResponseException } from './ZabbixResponseException';

export abstract class ZabbixCommunicator {
    private socket: ZabbixSocket;

    protected method: string = '';

    constructor(socket: ZabbixSocket) {
        this.socket = socket;
    }

    protected async call(method: string, params?: any): Promise<any> {
        const response = await this.socket.call(this.method + method, params);

        if (response.data.error) {
            throw new ZabbixResponseException(response.data.error);
        }

        return response.data.result;
    }
}
