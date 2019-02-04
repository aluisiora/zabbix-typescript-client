import { IZabbixErrorResponse } from './IZabbixErrorResponse';

export interface IZabbixResponse {
    readonly jsonrpc: string;
    readonly result: any;
    readonly error: IZabbixErrorResponse;
    readonly id: string;
}
