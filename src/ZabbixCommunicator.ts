import { AxiosInstance } from 'axios';

export abstract class ZabbixCommunicator {
    private http: AxiosInstance = null;

    private token: string = null;

    protected method: string = '';

    constructor(http: AxiosInstance) {
        this.http = http;
    }

    protected setToken(token: string) {
        this.token = token;
    }

    protected async call(method: string, params?: any) {
        const id = Math.random();

        const data = {
            jsonrpc: '2.0',
            method,
            params,
            id,
            auth: this.token,
        };

        const response = await this.http.post('', data);
        return response.data.result;
    }
}
