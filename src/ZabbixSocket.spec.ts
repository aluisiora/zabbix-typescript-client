import axios from 'axios';
import { ZabbixSocket } from './ZabbixSocket';

describe('ZabbixSocket', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call remote zabbix server without token', async () => {
        const url = 'http://localhost';
        const method = 'somemethod';
        const params = { something: 'avalue' };

        jest.spyOn(axios, 'create').mockImplementation((data: any) => {
            expect(data.baseURL).toBe(url);
            expect(data.headers).toHaveProperty('Accept', 'application/json');
            return {
                post: async (path: string, zparams?: any): Promise<boolean> => {
                    expect(path).toBe('');
                    expect(zparams).toHaveProperty('jsonrpc', '2.0');
                    expect(zparams).toHaveProperty('method', method);
                    expect(zparams).toHaveProperty('params', params);
                    expect(zparams).toHaveProperty('id');
                    expect(zparams).toHaveProperty('auth', null);
                    return true;
                },
            };
        });

        const socket = new ZabbixSocket(url);
        const res = await socket.call(method, params);
        expect(res).toBe(true);
    });

    it('should call remote zabbix server with token', async () => {
        const url = 'http://localhost';
        const method = 'somemethod';
        const token = 'sometoken';
        const params = { something: 'avalue' };

        jest.spyOn(axios, 'create').mockImplementation((data: any) => {
            expect(data.baseURL).toBe(url);
            expect(data.headers).toHaveProperty('Accept', 'application/json');
            return {
                post: async (path: string, zparams?: any): Promise<boolean> => {
                    expect(path).toBe('');
                    expect(zparams).toHaveProperty('jsonrpc', '2.0');
                    expect(zparams).toHaveProperty('method', method);
                    expect(zparams).toHaveProperty('params', params);
                    expect(zparams).toHaveProperty('id');
                    expect(zparams).toHaveProperty('auth', token);
                    return true;
                },
            };
        });

        const socket = new ZabbixSocket(url);
        socket.setToken(token);
        const res = await socket.call(method, params);
        expect(res).toBe(true);
    });
});
