import Listener from "./common/Listener.ts";
import HttpRequest from "./HTTP/HttpRequest.ts";
import HttpResponse from "./HTTP/HttpResponse.ts";

export class Server {
    private _listeners: Array<Listener>;
    private static _instance: Server;

    private constructor() {
        this._listeners = [];
    }

    private async _runFunc(data: string, func: object): Promise<void> {}

    public static instance(): Server {
        if (!this._instance) {
            this._instance = new Server();
        }
        return this._instance;
    }

    async handleRequest(request: HttpRequest, response: HttpResponse): Promise<void> {
        console.log(HttpRequest);
        // response.protocol = req.protocol;
        // const route = this.findRoute(req.route, req.type);
        // if (!route) {
        //     response.status = StatusCode.NotFound;
        //     await conn.write(response.toUint8Array());
        //     break;
        // }

        // Route not found

        // if input type missmatch

        // run route

        // send response

        // await conn.write(response);
    }

    listen(addr: string): void {
        const listener = new Listener(addr);
        this._listeners.push(listener);
        listener.listen(this);
    }

    stopListen(addr: string): void {
        let listenerIndex = -1;
        const listener = this._listeners.find((lis, index) => {
            if (lis.addr === addr) {
                listenerIndex = index;
                return true;
            }

            return false;
        });

        if (listenerIndex < 0) return;

        listener.stopListen();
        this._listeners.splice(listenerIndex, 1);
    }
}

const Fari = { server: Server.instance() };
export default Fari;
