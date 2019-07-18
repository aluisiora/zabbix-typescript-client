import { ZabbixAPI } from './ZabbixAPI';
import { ZabbixSocket } from './ZabbixSocket';
import { ZabbixResponseException } from './ZabbixResponseException';

export class ZabbixClient {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    /**
     * Login to enable further api calls
     *
     * @param username
     * @param password
     */
    public async login(username: string, password: string, relogin: boolean = false): Promise<ZabbixAPI> {
        const socket = new ZabbixSocket(this.url);
        const api = new ZabbixAPI(socket);
        const token = await api.login(username, password);
        socket.setToken(token);
        if (relogin) this.ajustLogin(api, username, password);
        return Promise.resolve(api);
    }

    private ajustLogin(api: ZabbixAPI, username: string, password: string) {
        const http = api.getHttpSocket();
        const interceptor: number = http.interceptors.response.use(
            async response => {
                if (response.data && response.data.error) {
                    const error = response.data.error;
                    if (error.data.toLowerCase().includes('re-login')) {
                        try {
                            const client = new ZabbixClient(this.url);
                            const newApi = await client.login(username, password);
                            api.getSocket().setToken(newApi.getSocket().getToken());

                            const data = JSON.parse(response.config.data);
                            data.auth = api.getSocket().getToken();
                            response.config.data = JSON.stringify(data);

                            return http.request(response.config);
                        } catch (error) {
                            throw new ZabbixResponseException(error.message, response.config);
                        }
                    }
                }

                return response;
            },
            error => error,
        );
        api.setReloginInterceptor(interceptor);
    }
}
