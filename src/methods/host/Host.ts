import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { AxiosInstance } from 'axios';
import { IHost } from './IHost';
import { IHostGetParams } from './IHostGetParams';
import { IHostCreateParams } from './IHostCreateParams';
import { IHostResponse } from './IHostResponse';
import { IHostUpdateParams } from './IHostUpdateParams';
import { IHostMassAddParams } from './IHostMassAddParams';
import { IHostMassUpdateParams } from './IHostMassUpdateParams';
import { IHostMassRemoveParams } from './IHostMassRemoveParams';

export class Host extends ZabbixCommunicator {
    constructor(http: AxiosInstance) {
        super(http);
        this.method = 'host.';
    }

    public async get(params?: IHostGetParams): Promise<IHost[]> {
        return await this.call(this.method + '.get', params);
    }

    public async create(params: IHostCreateParams): Promise<IHostResponse> {
        return await this.call(this.method + '.create', params);
    }

    public async update(params: IHostUpdateParams): Promise<IHostResponse> {
        return await this.call(this.method + '.update', params);
    }

    public async delete(params: string[] | number[]): Promise<IHostResponse> {
        return await this.call(this.method + '.delete', params);
    }

    public async massadd(params: IHostMassAddParams): Promise<IHostResponse> {
        return await this.call(this.method + '.massadd', params);
    }

    public async massupdate(params: IHostMassUpdateParams): Promise<IHostResponse> {
        return await this.call(this.method + '.massupdate', params);
    }

    public async massremove(params: IHostMassRemoveParams): Promise<IHostResponse> {
        return await this.call(this.method + '.massremove', params);
    }
}
