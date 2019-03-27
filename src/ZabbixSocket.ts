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
            timeout: 40000,
            // @ts-ignore
            retries: 0,
        });

        // Retry timeout
        this.http.interceptors.response.use(null, error => {
            if (error.code === 'ECONNABORTED' && error.config && error.config.retries < 3) {
                error.config.retries++;
                return this.http.request(error.config);
            }

            return Promise.reject(error);
        });
    }

    public getHttp(): AxiosInstance {
        return this.http;
    }

    public getToken(): string {
        return this.token;
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
