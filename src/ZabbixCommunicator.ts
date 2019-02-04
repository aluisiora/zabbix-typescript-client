import { ZabbixSocket } from './ZabbixSocket';
import { ZabbixResponseException } from './ZabbixResponseException';

export class ZabbixCommunicator {
    private socket: ZabbixSocket;

    protected method: string;

    constructor(socket: ZabbixSocket, method: string) {
        this.socket = socket;
        this.method = method;
    }

    public async call(params?: any): Promise<any> {
        const response = await this.socket.call(this.method, params);

        if (response.data.error) {
            throw new ZabbixResponseException(response.data.error);
        }

        return response.data.result;
    }
}
