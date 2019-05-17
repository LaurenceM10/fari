import Listener from "./common/Listener.ts";
import HttpRequest from "./HTTP/HttpRequest.ts";
import HttpResponse from "./HTTP/HttpResponse.ts";
import HttpType from "./HTTP/HttpType.ts";
import HttpCode from "./HTTP/HttpCode.ts";
import HttpEndPoint from "./HTTP/HttpEndPoint.ts";

export class Server {
    private static _instance: Server;
    private _listeners: Array<Listener>;
    private _endPoints: Array<HttpEndPoint>;

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
        response.protocol = request.protocol;
        try {
            response.status = HttpCode.NotFound;
            response.content = "Route not implemented";

            const endPoint = this._endPoints.find(endPoint => endPoint.url === request.route);
            if (endPoint) {
                response.status = HttpCode.Found;
                endPoint.run(request, response);
            }
        } catch (err) {
            response.status = HttpCode.InternalServerError;
            response.content = `Server Error: ${err.message}`;
        }
    }

    get(url: string, func: Function, httpParameters?: any): void {
        this._endPoints.push(new HttpEndPoint(url, func, HttpType.GET, httpParameters));
    }

    post(url: string, func: Function, httpParameters?: any): void {
        this._endPoints.push(new HttpEndPoint(url, func, HttpType.POST, httpParameters));
    }

    put(url: string, func: Function, httpParameters?: any): void {
        this._endPoints.push(new HttpEndPoint(url, func, HttpType.PUT, httpParameters));
    }

    delete(url: string, func: Function, httpParameters?: any): void {
        this._endPoints.push(new HttpEndPoint(url, func, HttpType.DELETE, httpParameters));
    }

    listen(addr: string, callback?: Function): void {
        const listener = new Listener(addr);
        this._listeners.push(listener);
        listener.listen(this);
        if (callback) callback();
    }

    stopListen(addr: string, callback?: Function): void {
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

        if (callback) callback();
    }
}

const Fari = { server: Server.instance() };
export default Fari;
