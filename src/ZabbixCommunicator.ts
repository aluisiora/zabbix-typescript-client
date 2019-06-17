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
    public async call<T>(params?: any, noAuth?: boolean): Promise<T> {
        let response: any = {};

        try {
            response = await this.socket.call(this.method, params, noAuth);

            if (response.data && response.data.error) {
                throw new ZabbixResponseException(response.data.error, response.config);
            }

            return response.data.result;
        } catch (error) {
            throw new ZabbixResponseException(error.message, response.config);
        }
    }
}
