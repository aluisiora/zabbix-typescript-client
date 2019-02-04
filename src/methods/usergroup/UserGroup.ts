import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { ZabbixSocket } from '../../ZabbixSocket';
import { IUserGroupCreateParams } from './IUserGroupCreateParams';
import { IUserGroupResponse } from './IUserGroupResponse';
import { IUserGroup } from './IUserGroup';
import { IUserGroupGetParams } from './IUserGroupGetParams';
import { IUserGroupUpdateParams } from './IUserGroupUpdateParams';

export class Trigger extends ZabbixCommunicator {
    constructor(socket: ZabbixSocket) {
        super(socket);
        this.method = 'usergroup.';
    }

    public async get(params?: IUserGroupGetParams): Promise<IUserGroup[]> {
        return await this.call('get', params);
    }

    public async create(params: IUserGroupCreateParams): Promise<IUserGroupResponse> {
        return await this.call('create', params);
    }

    public async update(params: IUserGroupUpdateParams): Promise<IUserGroupResponse> {
        return await this.call('update', params);
    }

    public async delete(params: string[] | number[]): Promise<IUserGroupResponse> {
        return await this.call('delete', params);
    }
}
