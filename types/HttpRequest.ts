import { RequestType, RequestProtocol } from "../enums/mod.ts";

export default class HttpRequest {
    private _type: RequestType;
    private _protocol: RequestProtocol;
    private _route: string;
    private _host: string;
    private _connection: string;
    private _userAgent: string;
    private _accept: string;
    private _encoding: string;
    private _language: string;

    get type(): RequestType {
        return this._type;
    }

    get protocol(): RequestProtocol {
        return this._protocol;
    }

    get route(): string {
        return this._route;
    }

    get host(): string {
        return this._host;
    }

    get connection(): string {
        return this._connection;
    }

    get userAgent(): string {
        return this._userAgent;
    }

    get accept(): string {
        return this._accept;
    }

    get encoding(): string {
        return this._encoding;
    }

    get language(): string {
        return this._language;
    }

    constructor(message: Uint8Array) {
        message = message.filter(part => !!part);
        const res = new TextDecoder("utf-8").decode(message).split("\r\n");
        const head = res[0].split(" ");
        this._type = RequestType[head[0]];
        this._route = head[1];
        this._protocol = RequestProtocol[head[2].replace(/[\/\.]/g, "")];
        console.log(res);
    }
}
