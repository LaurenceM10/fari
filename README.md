# Fari.js

A [deno](http://deno.land) HTTP/REST server

## TO DO:

-   [ ] handling TCP requests
-   [ ] handling Routes
-   [ ] handling Input types
    -   [ ] handling 400, 404 etc.
-   [ ] leveraging multithread
-   [ ] HTTP/2
-   [ ] tests, tests, tests

## Disired Usage:

Main Script `main.ts`:

```javascript
import { Server } from "https://deno.land/std/fari/mod.ts";
import { Routes } from "./demo.ts";

(async () => {
    const server = new Server("0.0.0.0:8080", Routes);
    server.run();
})();
```

Route Script `demo.ts`:

```javascript
import { Route, RequestType, KeyValuePair } from "https://deno.land/std/fari/mod.ts";

class Demo{

}

function getDemo(args: Array<KeyValuePair>): void {

}

function createDemo(args: Array<KeyValuePair>, body: Demo): void {

}

const Routes = [
    new Route("/demo", RequestType.GET, getDemo),
    new Route("/demo", RequestType.PUT, createDemo)
]
export Routes
```

`localhost:8080/test` should then return

```JSON
{ "Test" : "Test" }
```
