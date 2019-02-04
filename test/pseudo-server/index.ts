import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Server } from 'http';
import { IZabbixResponse } from '../../src/IZabbixResponse';

const testapp = express();

testapp.use(cors());
testapp.use(bodyParser.json());

let server: Server;

export const testuser = {
    user: 'testuser',
    password: 'thepass',
};

export const applicationGetData = [
    {
        applicationid: '13',
        hostid: '10001',
        name: 'CPU',
        templateids: [],
    },
    {
        applicationid: '5',
        hostid: '10001',
        name: 'Filesystems',
        templateids: [],
    },
    {
        applicationid: '21',
        hostid: '10001',
        name: 'General',
        templateids: [],
    },
    {
        applicationid: '15',
        hostid: '10001',
        name: 'Memory',
        templateids: [],
    },
];

let loginTokens = [];

testapp.post('/', (req, res) => {
    const method = req.body.method;
    const params = req.body.params;

    const result: IZabbixResponse = {
        jsonrpc: req.body.jsonrpc,
        id: req.body.id,
    };

    switch (method) {
        case 'user.login':
            if (params.user === testuser.user && params.password === testuser.password) {
                result.result = Math.random()
                    .toString(36)
                    .substr(3);
                loginTokens.push(result.result);
            } else {
                result.error = {
                    code: -1,
                    message: 'username or password invalid',
                    data: 'invalid params',
                };
            }
            break;

        case 'user.logout':
            const curLength = loginTokens.length;
            loginTokens = loginTokens.filter(token => token !== req.body.auth);
            if (loginTokens.length < curLength) {
                result.result = true;
            } else {
                result.error = {
                    code: -1,
                    message: 'cannot logout',
                    data: 'invalid params',
                };
            }
            break;

        case 'application.get':
            const tokenIdx = loginTokens.findIndex(token => token === req.body.auth);
            if (tokenIdx === -1) {
                result.error = {
                    code: -1,
                    message: 'not authenticated',
                    data: 'invalid params',
                };
            } else {
                result.result = applicationGetData;
            }
            break;

        default:
            result.error = {
                code: 1,
                message: method + ' unknown',
                data: 'invalid params',
            };
            break;
    }

    res.json(result);
});

export const start = async (port: number) => {
    return new Promise(resolve => {
        server = testapp.listen(port, () => {
            console.log(`Test server started at port ${port}`); // tslint:disable-line
            resolve();
        });
    });
};

export const stop = async () => {
    return new Promise(resolve => {
        if (!server) return resolve();
        server.close(() => {
            console.log("Test server stopped"); // tslint:disable-line
            resolve();
        });
    });
};
