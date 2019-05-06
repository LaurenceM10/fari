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

```javascript

import { Server, Route } from "https://deno.land/std/fari/mod.ts";

function getTest(id: string): any {
    if (id === "12") {
        return { Test: "Test" };
    }
    return null;
}

(async () => {
    const routes = new Array<Route>();
    routes.push(new Route("/test", getTest));
    const server = new Server("0.0.0.0:8080", routes);
    server.run();
})()

```

`localhost:8080/test` should then return

```JSON
{ "Test" : "Test" }
```
