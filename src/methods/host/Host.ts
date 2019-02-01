import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { IHost } from './IHost';
import { IHostGetParams } from './IHostGetParams';
import { IHostCreateParams } from './IHostCreateParams';
import { IHostResponse } from './IHostResponse';
import { IHostUpdateParams } from './IHostUpdateParams';
import { IHostMassAddParams } from './IHostMassAddParams';
import { IHostMassUpdateParams } from './IHostMassUpdateParams';
import { IHostMassRemoveParams } from './IHostMassRemoveParams';
import { ZabbixSocket } from '../../ZabbixSocket';

export class Host extends ZabbixCommunicator {
    constructor(socket: ZabbixSocket) {
        super(socket);
        this.method = 'host.';
    }

    public async get(params?: IHostGetParams): Promise<IHost[]> {
        return await this.call('get', params);
    }

    public async create(params: IHostCreateParams): Promise<IHostResponse> {
        return await this.call('create', params);
    }

    public async update(params: IHostUpdateParams): Promise<IHostResponse> {
        return await this.call('update', params);
    }

    public async delete(params: string[] | number[]): Promise<IHostResponse> {
        return await this.call('delete', params);
    }

    public async massadd(params: IHostMassAddParams): Promise<IHostResponse> {
        return await this.call('massadd', params);
    }

    public async massupdate(params: IHostMassUpdateParams): Promise<IHostResponse> {
        return await this.call('massupdate', params);
    }

    public async massremove(params: IHostMassRemoveParams): Promise<IHostResponse> {
        return await this.call('massremove', params);
    }
}
