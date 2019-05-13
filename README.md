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

class Demo {
    @HttpRoute({ method: "GET", url: "/demo/{0}" })
    getDemo(@UrlParameter id: string) {}

    @HttpRoute({ method: "PUT", url: "/demo" })
    createDemo(@Body Demo: DemoModel) {}

    @HttpRoute({ method: "POST", url: "/demo?ex={ex}" })
    updateDemo(@QueryParameter ex: string, @Body Demo: DemoModel) {}

    @HttpRoute({ method: "DELETE", url: "/demo/{id}" })
    deleteDemo(@UrlParameter args: string) {}
}
```

Using pure JavaScript
`demo.ts`:

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

`DemoModel.js`

```javascript
@HttpRoute({modelName: 'DemoModel'})
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
