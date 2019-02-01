import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { ZabbixSocket } from '../../ZabbixSocket';
import { ITriggerAdddependenciesParams } from './ITriggerAdddependenciesParams';
import { ITriggerResponse } from './ITriggerResponse';
import { ITriggerCreateParams } from './ITriggerCreateParams';
import { ITriggerGetParams } from './ITriggerGetParams';
import { ITriggerUpdateParams } from './ITriggerUpdateParams';
import { ITrigger } from './ITrigger';

export class Trigger extends ZabbixCommunicator {
    constructor(socket: ZabbixSocket) {
        super(socket);
        this.method = 'trigger.';
    }

    public async get(params?: ITriggerGetParams): Promise<ITrigger[]> {
        return await this.call('get', params);
    }

    public async create(params: ITriggerCreateParams): Promise<ITriggerResponse> {
        return await this.call('create', params);
    }

    public async update(params: ITriggerUpdateParams): Promise<ITriggerResponse> {
        return await this.call('update', params);
    }

    public async delete(params: string[] | number[]): Promise<ITriggerResponse> {
        return await this.call('delete', params);
    }

    public async isreadable(params: string[] | number[]): Promise<ITriggerResponse> {
        return await this.call('isreadable', params);
    }

    public async iswritable(params: string[] | number[]): Promise<ITriggerResponse> {
        return await this.call('iswritable', params);
    }

    public async addDependencies(params: ITriggerAdddependenciesParams): Promise<ITriggerResponse[]> {
        return await this.call('addDependencies', params);
    }

    public async deleteDependencies(params: { triggerid: string }[]): Promise<ITriggerResponse> {
        return await this.call('deleteDependencies', params);
    }
}
