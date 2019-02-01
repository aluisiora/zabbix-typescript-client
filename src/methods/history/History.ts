import { ZabbixCommunicator } from '../../ZabbixCommunicator';
import { ZabbixSocket } from '../../ZabbixSocket';
import { IHistoryGetParams } from './IHistoryGetParams';
import { IHistory } from './IHistory';

export class History extends ZabbixCommunicator {
    constructor(socket: ZabbixSocket) {
        super(socket);
        this.method = 'history.';
    }

    public async get(params?: IHistoryGetParams): Promise<IHistory[]> {
        return await this.call('get', params);
    }
}
