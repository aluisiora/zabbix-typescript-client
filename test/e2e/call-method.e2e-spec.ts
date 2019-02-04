import { start, stop, testuser, applicationGetData } from '../pseudo-server';
import { ZabbixClient } from '../../src/ZabbixClient';
import { ZabbixAPI } from '../../src/ZabbixAPI';
import { ZabbixResponseException } from '../../src/ZabbixResponseException';

let api: ZabbixAPI;

describe('Authentication Tests', function() {
    this.timeout = 10000;

    beforeAll(async () => {
        const port = 23457;
        const url = 'http://localhost:' + port;

        await start(port);

        const client = new ZabbixClient(url);
        api = await client.login(testuser.user, testuser.password);
    });

    it('should call an existing method', async () => {
        const data = await api.method('application.get').call();
        expect(data).toMatchObject(applicationGetData);
    });

    it('should call a non-existing method', async () => {
        const q = api.method('someunknownmethod').call();
        await expect(q).rejects.toThrow(ZabbixResponseException);
    });

    afterAll(async () => {
        await stop();
    });
});
