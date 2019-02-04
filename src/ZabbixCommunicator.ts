import { ZabbixSocket } from './ZabbixSocket';
import { ZabbixResponseException } from './ZabbixResponseException';

export class ZabbixCommunicator {
    private socket: ZabbixSocket;

    protected method: string;

    constructor(socket: ZabbixSocket, method: string) {
        this.socket = socket;
        this.method = method;
    }

    /**
     * Call the zabbix backend with the params provided,
     * must match with the method defined.
     *
     * @param params
     */
    public async call<T>(params?: any): Promise<T> {
        const response = await this.socket.call(this.method, params);

        if (response.data.error) {
            throw new ZabbixResponseException(response.data.error);
        }

        return response.data.result;
    }
}
