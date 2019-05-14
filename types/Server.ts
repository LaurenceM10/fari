import Listener from "./common/Listener.ts";
import HttpRequest from "./HTTP/HttpRequest.ts";
import HttpResponse from "./HTTP/HttpResponse.ts";
import HttpType from "./HTTP/HttpType.ts";

export class Server {
    private static _instance: Server;
    private _listeners: Array<Listener>;
    private _endPoints: Array<EndPoint>;

    private constructor() {
        this._listeners = [];
        this._endPoints = [];
    }

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

    get(url: string, func: Function, httpParameters?: any): void {
        this._endPoints.push(new EndPoint(url, func, HttpType.GET, httpParameters));
    }

    post(url: string, func: Function, httpParameters?: any): void {
        this._endPoints.push(new EndPoint(url, func, HttpType.POST, httpParameters));
    }

    put(url: string, func: Function, httpParameters?: any): void {
        this._endPoints.push(new EndPoint(url, func, HttpType.PUT, httpParameters));
    }

    delete(url: string, func: Function, httpParameters?: any): void {
        this._endPoints.push(new EndPoint(url, func, HttpType.DELETE, httpParameters));
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

class EndPoint {
    private _url: string;
    private _httpType: HttpType;
    private _func: Function;
    private _httpParameters: Object;

    get url(): string {
        return this._url;
    }

    get func(): Function {
        return this._func;
    }

    get httpType(): HttpType {
        return this._httpType;
    }

    constructor(url: string, func: Function, type: HttpType, httpParameters?: Object) {
        this._url = url;
        this._httpParameters = httpParameters;
    }

    run(args: any[]): void {
        try {
            // this._validators.forEach(val => val(...args));
        } catch (e) {
            console.log(e);
        } finally {
            this._func(...args);
        }
    }
}

const Fari = { server: Server.instance() };
export default Fari;
