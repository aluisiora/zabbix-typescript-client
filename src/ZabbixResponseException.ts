import { IZabbixErrorResponse } from './IZabbixErrorResponse';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export class ZabbixResponseException extends Error {
    public reason: string;

    public code: number;

    public config: AxiosRequestConfig;

    constructor(error: IZabbixErrorResponse, config: AxiosRequestConfig) {
        super(error.data);

        this.reason = error.message;
        this.code = error.code;
        this.config = config;
    }
}
