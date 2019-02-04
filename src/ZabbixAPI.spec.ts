import { ZabbixCommunicator } from './ZabbixCommunicator';
import { ZabbixSocket } from './ZabbixSocket';
import { ZabbixAPI } from './ZabbixAPI';

describe('ZabbixAPI', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should try to login', async () => {
        const response = 'someresponse';
        const username = 'someusername';
        const password = 'somepass';

        const callSpy = jest.spyOn(ZabbixCommunicator.prototype, 'call').mockResolvedValue(response);

        const socket = new ZabbixSocket('');
        const api = new ZabbixAPI(socket);

        const methodSpy = jest.spyOn(api, 'method');

        const res = await api.login(username, password);

        expect(callSpy).toBeCalledWith({
            user: username,
            password,
        });
        expect(methodSpy).toBeCalledWith('user.login');
        expect(res).toBe(response);
    });

    it('should try to logout', async () => {
        const response = 'someresponse';

        const callSpy = jest.spyOn(ZabbixCommunicator.prototype, 'call').mockResolvedValue(response);

        const socket = new ZabbixSocket('');
        const api = new ZabbixAPI(socket);

        const methodSpy = jest.spyOn(api, 'method');

        const res = await api.logout();

        expect(callSpy).toBeCalledTimes(1);
        expect(methodSpy).toBeCalledWith('user.logout');
        expect(res).toBe(response);
    });

    it('should return a ZabbixCommunicator when defining a method to use', () => {
        const socket = new ZabbixSocket('');
        const api = new ZabbixAPI(socket);

        const comm = api.method('any.method');

        expect(comm).toBeInstanceOf(ZabbixCommunicator);
    });
});
