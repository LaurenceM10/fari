# Fari.js

A [deno](http://deno.land) HTTP/REST server

## TO DO:


-   [ ] Detailed Feature list http/1.1 http/2
-   [ ] Prioritacing Features
-   [ ] handling TCP requests
-   [ ] handling Routes
-   [ ] handling Input types
    -   [ ] handling 400, 404 etc.
-   [ ] leveraging multithread
-   [ ] HTTP/2
-   [ ] tests, tests, tests

## Disired Usage:

See [http://blog.wolksoftware.com/decorators-reflection-javascript-typescript](http://blog.wolksoftware.com/decorators-reflection-javascript-typescript)

`main.ts`:

```javascript
import { server } from 'fari'

(() => {
    server.listen('0.0.0.0:8080');
    // May follow some additional settings
})()
```

`demo.ts`:

```javascript

@Route
class Demo {

    @Route({method:'GET', url: '/demo/{id}'})
    function getDemo(@Route({ urlParams: ['id'] }) args: []){
    }

    @Route({{method:'PUT', url: '/demo'})
    function createDemo(@Route({ bodyOfType: 'DemoModel' }) Demo: DemoModel){
    }

    @Route({{method:'POST', url: '/demo?ex={ex}'})
    function updateDemo(@Route({ queryParams: ['ex']}) args: [], @Route({ bodyOfType: 'DemoModel' }) Demo: DemoModel){
    }

    @Route({{method:'DELETE', url: '/demo/{id}'})
    function deleteDemo(@Route({ urlParams: ['id'] }) args: []){
    }
}

```
