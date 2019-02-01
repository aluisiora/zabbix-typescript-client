export class ZabbixResponseException extends Error {
    public reason: string;

    public code: number;

    constructor(error: any) {
        super(error.data);

        this.reason = error.message;
        this.code = error.code;
    }
}
