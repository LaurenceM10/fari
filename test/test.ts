import { Server, Route, RequestType } from "../mod.ts";

function getTest(id: string): any {
    if (id === "12") {
        return { Test: "Test" };
    }
    return null;
}

function getTest2(id: string): any {
    if (id === "11") {
        return { Test: "Test" };
    }
    return null;
}

(() => {
    const routes = new Array<Route>();
    routes.push(new Route("/test", RequestType.GET, getTest));
    const server = new Server("0.0.0.0:8080", routes);
    server.addRoute(new Route("/test2", RequestType.POST, getTest2));
    server.run();
})();
