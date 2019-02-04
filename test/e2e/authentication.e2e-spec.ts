import { start, stop, testuser } from '../pseudo-server';
import { ZabbixClient } from '../../src/ZabbixClient';
import { ZabbixAPI } from '../../src/ZabbixAPI';
import { ZabbixResponseException } from '../../src/ZabbixResponseException';

let api: ZabbixAPI;
let client: ZabbixClient;

describe('Authentication Tests', () => {
    beforeAll(async () => {
        const port = 23456;
        const url = 'http://localhost:' + port;

        await start(port);

        client = new ZabbixClient(url);
    });

    it('should login', async () => {
        api = await client.login(testuser.user, testuser.password);
        expect(api).toBeInstanceOf(ZabbixAPI);
    });

    it('should fail to login', async () => {
        const q = client.login('wronguser', 'wrongpassword');
        await expect(q).rejects.toThrow(ZabbixResponseException);
    });

    it('should logout', async () => {
        const val = await api.logout();
        expect(val).toBeTruthy();
    });

    afterAll(async () => {
        await stop();
    });
});
