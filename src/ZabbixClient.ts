import { ZabbixAPI } from './ZabbixAPI';
import { ZabbixSocket } from './ZabbixSocket';

export class ZabbixClient {
    private url: string;

    private reloginTries: number = 0;

    private isReloging: boolean = false;

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
                    if (
                        error.data.toLowerCase().includes('re-login') ||
                        error.data.toLowerCase().includes('not authorised')
                    ) {
                        if (this.isReloging) {
                            await new Promise(resolve => setTimeout(resolve, 3000));
                        } else {
                            this.reloginTries++;
                            this.isReloging = true;

                            if (this.reloginTries > 3) {
                                if (this.reloginTries > 60) this.reloginTries = 60;
                                await new Promise(resolve => setTimeout(resolve, 1000 * this.reloginTries));
                            }

                            try {
                                const token = await api.login(username, password);
                                api.getSocket().setToken(token);
                                this.isReloging = false;
                            } catch (error) {}
                        }

                        const data = JSON.parse(response.config.data);
                        data.auth = api.getSocket().getToken();
                        response.config.data = JSON.stringify(data);

                        return http.request(response.config);
                    }
                }

                this.reloginTries = 0;
                return response;
            },
            error => error,
        );
        api.setReloginInterceptor(interceptor);
    }
}
