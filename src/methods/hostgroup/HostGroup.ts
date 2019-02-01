import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { ZabbixSocket } from '../../ZabbixSocket';
import { IHostGroupCreateParams } from './IHostGroupCreateParams';
import { IHostGroupResponse } from './IHostGroupResponse';
import { IHostGroup } from './IHostGroup';
import { IHostGroupGetParams } from './IHostGroupGetParams';
import { IHostGroupMassaddParams } from './IHostGroupMassaddParams';
import { IHostGroupMassremoveParams } from './IHostGroupMassremoveParams';
import { IHostGroupMassupdateParams } from './IHostGroupMassupdateParams';
import { IHostGroupUpdateParams } from './IHostGroupUpdateParams';

export class HostGroup extends ZabbixCommunicator {
    constructor(socket: ZabbixSocket) {
        super(socket);
        this.method = 'hostgroup.';
    }

    public async get(params?: IHostGroupGetParams): Promise<IHostGroup[]> {
        return await this.call('get', params);
    }

    public async create(params: IHostGroupCreateParams): Promise<IHostGroupResponse> {
        return await this.call('create', params);
    }

    public async update(params: IHostGroupUpdateParams): Promise<IHostGroupResponse> {
        return await this.call('update', params);
    }

    public async delete(params: string[] | number[]): Promise<IHostGroupResponse> {
        return await this.call('delete', params);
    }

    public async isreadable(params: string[] | number[]): Promise<IHostGroupResponse> {
        return await this.call('isreadable', params);
    }

    public async iswritable(params: string[] | number[]): Promise<IHostGroupResponse> {
        return await this.call('iswritable', params);
    }

    public async massadd(params: IHostGroupMassaddParams): Promise<IHostGroupResponse> {
        return await this.call('massadd', params);
    }

    public async massupdate(params: IHostGroupMassupdateParams): Promise<IHostGroupResponse> {
        return await this.call('massupdate', params);
    }

    public async massremove(params: IHostGroupMassremoveParams): Promise<IHostGroupResponse> {
        return await this.call('massremove', params);
    }
}
