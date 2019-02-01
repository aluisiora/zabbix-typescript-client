import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class ZabbixSocket {
    private http: AxiosInstance;

    private token: string;

    constructor(url: string) {
        this.http = axios.create({
            baseURL: url,
            headers: {
                Accept: 'application/json',
            },
        });
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public async call(method: string, params?: any): Promise<AxiosResponse> {
        const id = Math.random()
            .toString()
            .substr(3);

        const data = {
            jsonrpc: '2.0',
            method,
            params,
            id,
            auth: this.token,
        };

        return await this.http.post('', data);
    }
}
