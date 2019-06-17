import { ZabbixSocket } from './ZabbixSocket';
import { ZabbixCommunicator } from './ZabbixCommunicator';
import { ZabbixResponseException } from './ZabbixResponseException';

describe('ZabbixCommunicator', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call through the socket with params without error', async () => {
        const response: any = {
            data: {
                result: 'ok',
            },
        };
        const method = 'somemethod';
        const params = {
            somekey: 'somevalue',
        };

        const call = jest.spyOn(ZabbixSocket.prototype, 'call').mockResolvedValue(response);

        const socket = new ZabbixSocket('');
        const comm = new ZabbixCommunicator(socket, method);

        const res = await comm.call(params);

        expect(call).toBeCalledWith(method, params, undefined);
        expect(res).toBe(response.data.result);
    });

    it('should call through the socket with error', async () => {
        const errorResponse: any = {
            data: {
                error: 'yeah, got an error alright',
            },
        };

        const method = 'somemethod';

        const call = jest.spyOn(ZabbixSocket.prototype, 'call').mockResolvedValue(errorResponse);

        const socket = new ZabbixSocket('');
        const comm = new ZabbixCommunicator(socket, method);

        await expect(comm.call()).rejects.toThrow(ZabbixResponseException);

        expect(call).toBeCalledWith(method, undefined, undefined);
    });
});
