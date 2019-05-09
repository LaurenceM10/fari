import Route from "./Route.ts";
import HttpRequest from "./HttpRequest.ts";
import HttpResponse from "./HttpResponse.ts";
import { RequestType, StatusCode } from "../enums/mod.ts";
import {Service} from "../ServiceDecorator";
import {Injector} from '../Injector';

const { listen } = Deno;

namespace Fari {
    export class Server {
        private _addr: string;
        private _routes: Array<Route>;

        constructor(addr: string) {
            this._addr = addr;
        }

        private async _runFunc(data: string, func: object): Promise<void> {}

        private async _handle(conn: Deno.Conn): Promise<void> {
            const buffer = new Uint8Array(1024);
            const response = new HttpResponse();
            try {
                while (true) {
                    const r = await conn.read(buffer);
                    const req = new HttpRequest(buffer);
                    response.protocol = req.protocol;
                    const route = this.findRoute(req.route, req.type);

                    if (!route) {
                        response.status = StatusCode.NotFound;
                        await conn.write(response.toUint8Array());
                        break;
                    }

                    // if input type missmatch

                    // run route

                    // send response

                    // await conn.write(response);
                }
            } catch (e) {
                response.status = StatusCode.InternalServerError;
                response.content = e.toString();
                await conn.write(response.toUint8Array());
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
            if (this.findRoute(route.path, route.requestType)) throw `Route: '${route.path}' already    added`;
            this._routes.push(route);
        }

        addRoutes(routes: Array<Route>): void {
            routes.forEach(route => {
                this.addRoute(route);
            });
        }

        findRoute(path: string, requestType: RequestType): Route {
            return this._routes.find(route => route.path === path && route.requestType ===  requestType);
        }
    }
}