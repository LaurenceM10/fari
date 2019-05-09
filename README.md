# Fari.js

A [deno](http://deno.land) HTTP/REST server

## TO DO (Sorted by prio):

-   [X] Minimal http features
-   [ ] handling Routes
-   Minimal Feature list http/1.1
    - [ ] RFC 7230: Message syntax and routing
    - [ ] RFC 7231: Semantics and Content
    - [ ] RFC 7232: Conditional Requests
    - [ ] RFC 7233: Range Requests
    - [ ] RFC 7234: Caching
    - [ ] RFC 7235: Authentication
-   [ ] Minimal Feature list http/2
-   Non Minimal Features http/1.1
-   Non Minimal Features http/2
-   [ ] tests, tests, tests

## Disired Usage:

See [http://blog.wolksoftware.com/decorators-reflection-javascript-typescript](http://blog.wolksoftware.com/decorators-reflection-javascript-typescript)

`main.ts`:

```javascript
import Fari from 'fari'

(() => {
    Fari.server.listen('0.0.0.0:8080');
    // May follow some additional settings
})()
```

`demo.ts`:

```javascript

@HttpRoute
class Demo {

    @HttpRoute({method:'GET', url: '/demo/{id}'})
    function getDemo(@HttpRoute({ urlParams: ['id'] }) args: []){
    }

    @HttpRoute({{method:'PUT', url: '/demo'})
    function createDemo(@HttpRoute({ bodyOfType: 'DemoModel' }) Demo: DemoModel){
    }

    @HttpRoute({{method:'POST', url: '/demo?ex={ex}'})
    function updateDemo(@HttpRoute({ queryParams: ['ex']}) args: [], @HttpRoute({ bodyOfType: 'DemoModel' }) Demo: DemoModel){
    }

    @HttpRoute({{method:'DELETE', url: '/demo/{id}'})
    function deleteDemo(@HttpRoute({ urlParams: ['id'] }) args: []){
    }
}

```
