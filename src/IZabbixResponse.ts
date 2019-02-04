import { IZabbixErrorResponse } from './IZabbixErrorResponse';

export interface IZabbixResponse {
    jsonrpc: string;
    result?: any;
    error?: IZabbixErrorResponse;
    id: string;
}
