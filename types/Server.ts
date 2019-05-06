import Route from "./Route.ts";
import HttpRequest from "./HttpRequest.ts";

const { listen } = Deno;
const response = new TextEncoder().encode("HTTP/1.1 200 OK\r\nContent-Length: 12\r\n\r\nHello World\n");

export class Server {
    private _addr: string;
    private _routes: Array<Route>;

    constructor(addr: string, routes?: Array<Route>) {
        this._addr = addr;
        this._routes = routes;
    }

    private async _handle(conn: Deno.Conn): Promise<void> {
        const buffer = new Uint8Array(1024);
        try {
            while (true) {
                const r = await conn.read(buffer);
                const req = new HttpRequest(buffer);
                if (r.eof) {
                    break;
                }
                await conn.write(response);
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
        this._routes.push(route);
    }

    addRoutes(routes: Array<Route>): void {
        this._routes = { ...this._routes, ...routes };
    }
}
