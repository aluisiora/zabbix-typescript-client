import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IZabbixResponse } from './IZabbixResponse';

export class ZabbixSocket {
    private http: AxiosInstance;

    private token: string = null;

    constructor(url: string) {
        this.http = axios.create({
            baseURL: url,
            headers: {
                Accept: 'application/json',
            },
        });
    }

    public setToken(token: string): string {
        this.token = token;
        return this.token;
    }

    public async call(method: string, params?: any, noAuth: boolean = false): Promise<AxiosResponse<IZabbixResponse>> {
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

        if (noAuth) data.auth = null;

        return await this.http.post<IZabbixResponse>('', data);
    }
}
