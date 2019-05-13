# Fari.js

A [deno](http://deno.land) HTTP/REST server

## TO DO (Sorted by prio):

-   [x] Minimal http features
-   [ ] handling Routes
-   Minimal Feature list http/1.1
    -   [ ] RFC 7230: Message syntax and routing
    -   [ ] RFC 7231: Semantics and Content
    -   [ ] RFC 7232: Conditional Requests
    -   [ ] RFC 7233: Range Requests
    -   [ ] RFC 7234: Caching
    -   [ ] RFC 7235: Authentication
-   [ ] Minimal Feature list http/2
-   Non Minimal Features http/1.1
-   Non Minimal Features http/2
-   [ ] tests, tests, tests
    - [ ] Load tests

## Disired Usage:

deno run --allow-net ./test/basic.ts --config

See [http://blog.wolksoftware.com/decorators-reflection-javascript-typescript](http://blog.wolksoftware.com/decorators-reflection-javascript-typescript)

`main.ts`:

```javascript
import Fari from "fari";

(() => {
    Fari.server.listen("0.0.0.0:8080");
    // May follow some additional settings
})();
```

Using TypeScript Decorators (Experimental)
`demo.ts`:

```javascript
import { HttpRoute } from "Fari";

@FariRoute.controller // use case?
class TestAPI {
    @FariRoute.get("/test/{id}")
    async getTest(@FariRoute.urlParameter id: string) {}

    @FariRoute.put("/demo")
    async createTest(@FariRoute.body Demo: TestModel) {}

    @FariRoute.post("/demo?ex={ex}")
    async updateTest(@FariRoute.queryParameter ex: string, @FariRoute.body Demo: TestModel) {}

    @FariRoute.delete("/demo/{id}")
    async deleteTest(@FariRoute.urlParameter id: string) {}
}

@FariRoute.model  // use case?
class DemoModel {
    private _id: number;
    private _name: string;

    get id(): number { return this._id }
    get name(): number { return this._name }

    constructor (id: number, name: string){
        this._id = id;
        this._name = name;
    }
}

```

Using pure JavaScript
`demo.js`:

```javascript
import Fari from "Fari";

(() => {
    Fari.server.get('/', function (req, res) {
        res.send('Hello World!')
    })

    Fari.server.post('/', function (req, res) {
        res.send('Got a POST request')
    })

    Fari.server.put('/user', function (req, res) {
        res.send('Got a PUT request at /user')
    })

    Fari.server.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user')
    })

})()
```