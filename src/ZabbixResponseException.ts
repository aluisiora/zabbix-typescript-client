import { IZabbixErrorResponse } from './IZabbixErrorResponse';

export class ZabbixResponseException extends Error {
    public reason: string;

    public code: number;

    constructor(error: IZabbixErrorResponse) {
        super(error.data);

        this.reason = error.message;
        this.code = error.code;
    }
}
