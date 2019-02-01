import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { ZabbixSocket } from '../../ZabbixSocket';
import { IItemCreateParams } from './IItemCreateParams';
import { IItemResponse } from './IItemResponse';
import { IItemGetParams } from './IItemGetParams';
import { IItemUpdateParams } from './IItemUpdateParams';

export class Item extends ZabbixCommunicator {
    constructor(socket: ZabbixSocket) {
        super(socket);
        this.method = 'item.';
    }

    public async get(params?: IItemGetParams): Promise<IItemResponse[]> {
        return await this.call('get', params);
    }

    public async create(params: IItemCreateParams): Promise<IItemResponse> {
        return await this.call('create', params);
    }

    public async update(params: IItemUpdateParams): Promise<IItemResponse> {
        return await this.call('update', params);
    }

    public async delete(params: string[] | number[]): Promise<IItemResponse> {
        return await this.call('delete', params);
    }

    public async isreadable(params: string[] | number[]): Promise<IItemResponse> {
        return await this.call('isreadable', params);
    }

    public async iswritable(params: string[] | number[]): Promise<IItemResponse> {
        return await this.call('iswritable', params);
    }
}
