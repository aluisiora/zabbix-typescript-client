import { ZabbixSocket } from './ZabbixSocket';
import { ZabbixAPI } from './ZabbixAPI';
import { ZabbixClient } from './ZabbixClient';

describe('ZabbixClient', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should try to login and return an api object', async () => {
        const token = 'sometoken';
        const username = 'someusername';
        const password = 'somepassword';

        const socketSpy = jest.spyOn(ZabbixSocket.prototype, 'setToken');
        const apiSpy = jest.spyOn(ZabbixAPI.prototype, 'login').mockResolvedValue(token);

        const client = new ZabbixClient('');

        const api = await client.login(username, password);

        expect(apiSpy).toBeCalledWith(username, password);
        expect(socketSpy).toBeCalledWith(token);
        expect(api).toBeInstanceOf(ZabbixAPI);
    });
});
