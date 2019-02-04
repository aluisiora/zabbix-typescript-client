# Zabbix API Client for NodeJS And Browsers

This is a Zabbix API Client for NodeJS and Browsers written in Typescript to interact with a Zabbix Server using the API methods.

## Getting started

Install this lib with npm:

```bash
npm install --save zabbix-client
```

All parameters used within this lib can be found in the [Zabbix API documentation itself](https://www.zabbix.com/documentation/4.0/manual/api).

Parameters like `jsonrpc`, `id` and etc are abstracted within this lib.

## Usage examples

Creating the object then logging in:

```javascript
const { ZabbixClient } = require("zabbix-client");

// No calls are made here yet
const client = new ZabbixClient("http://company.com/zabbix/api_jsonrpc.php");

// A token will be fetched and saved for further use
const api = await client.login("theusername", "thepassword");
```

After the login, we get an `api` object which is an instance of `ZabbixAPI` class that enables us to call other zabbix methods as we wish, you can find all methods in the [Zabbix API Methods reference](https://www.zabbix.com/documentation/4.0/manual/api/reference).

Let's get the api info:

```javascript
const { ZabbixClient } = require("zabbix-client");

const client = new ZabbixClient("http://company.com/zabbix/api_jsonrpc.php");

const api = await client.login("theusername", "thepassword");

const version = await api.method("apiinfo.version").call();

console.log(version); // 4.0.0
```

The raw response from zabbix is abstracted and only the `result` is returned by the `call` method.

In case we need to call a method and send params with it (example taken from [this](https://www.zabbix.com/documentation/4.0/manual/api/reference/host/create) zabbix documentation page):

```javascript
const hosts = await api.method("host.create").call({
    host: "Linux server",
    interfaces: [
        {
            type: 1,
            main: 1,
            useip: 1,
            ip: "192.168.3.1",
            dns: "",
            port: "10050"
        }
    ],
    groups: [
        {
            groupid: "50"
        }
    ],
    templates: [
        {
            templateid: "20045"
        }
    ],
    macros: [
        {
            macro: "{$USER_ID}",
            value: "123321"
        }
    ],
    inventory_mode: 0,
    inventory: {
        macaddress_a: "01234",
        macaddress_b: "56768"
    }
});

console.log(hosts); // { hostids: ["107819"] }
```

In case of an error during the call, an instance of `ZabbixResponseException` will be thrown, so if you are using async/await, you can catch it like this:

```javascript
try {
    const result = api.method("thismethod.doesnotexist").call();
} catch (err) {
    err instanceof ZabbixResponseException; // true
    console.log(err.message); // Incorrect method "thismethod.doesnotexist"
}

// It is also thrown if login fails
try {
    const api = client.login("wrongusername", "wrongpassword");
} catch (err) {
    err instanceof ZabbixResponseException; // true
    console.log(err.message); // Login name or password is incorrect.
}
```

Or else, just do a then/catch:

```javascript
api.method("thismethod.doesnotexist")
    .call()
    .then(result => {
        // the result, but this will fail
    })
    .catch(err => {
        err instanceof ZabbixResponseException; // true
        console.log(err.message); // Incorrect method "thismethod.doesnotexist"
    });
```

## Note

Remember to always logout after you finish using the api:

```javascript
await api.logout();
```

# License

MIT License

Copyright (c) 2019 Aluísio Rodrigues Amaral

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
