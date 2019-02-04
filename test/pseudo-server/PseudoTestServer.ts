import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Server } from 'http';

const testapp = express();

testapp.use(bodyParser.json());

let server: Server;

testapp.post('/', (req, res) => {
    console.log(req.params); // tslint:disable-line
    res.send('');
});

export const port = 22838;

export const start = async () => {
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
