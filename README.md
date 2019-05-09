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

`main.ts`:

```javascript
import { server } from 'fari'

(() => {
    server.listen('0.0.0.0:8080');
})()
```

`demo.ts`:

```javascript

@Route
class Demo {

    @GET({url: '/demo/{id}'})
    function getDemo(@urlParameter id: number){
    }
    
    @PUT({url: '/demo'})
    function createDemo(@body Demo: Type<DemoModel>){
    }
    
    @POST({url: '/demo?ex={ex}'})
    function updateDemo(@urlParameter ex: string, @body Demo: Type<DemoModel>){
    }
    
    @DELETE({url: '/demo'})
    function deleteDemo(){
    }
}

```
