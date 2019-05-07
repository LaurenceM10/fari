import Route from "./Route.ts";
import HttpRequest from "./HttpRequest.ts";

const { listen } = Deno;

export default class Server {
    private _addr: string;
    private _routes: Array<Route>;

    constructor(addr: string, routes?: Array<Route>) {
        this._addr = addr;
        if (routes) {
            this._routes = routes;
        } else {
            this._routes = [
                new Route("/", () => {
                    new TextEncoder().encode("HTTP/1.1 200 OK\r\nContent-Length: 12\r\n\r\nHello World\n");
                })
            ];
        }
    }

    private async _runFunc(data: string, func: object): Promise<void> {}

    private async _handle(conn: Deno.Conn): Promise<void> {
        const buffer = new Uint8Array(1024);
        try {
            while (true) {
                const r = await conn.read(buffer);
                const req = new HttpRequest(buffer);
                const route = this.findRoute(req.route);

                // if route === null

                // if input type missmatch

                // run route

                // send response

                // await conn.write(response);
            }
        } catch (e) {
            throw e;
        } finally {
            conn.close();
        }
    }

    async run(): Promise<void> {
        const listener = listen("tcp", this._addr);
        while (true) {
            const conn = await listener.accept();
            this._handle(conn);
        }
    }

    addRoute(route: Route): void {
        if (this.findRoute(route.path)) throw `Route: '${route.path}' already added`;
        this._routes.push(route);
    }

    addRoutes(routes: Array<Route>): void {
        routes.forEach(route => {
            this.addRoute(route);
        });
    }

    findRoute(path: string): Route {
        return this._routes.find(route => route.path === path);
    }
}
