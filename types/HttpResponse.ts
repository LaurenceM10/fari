import { RequestProtocol, StatusCode } from "../enums/mod";

export class HttpRequest {
    private _protocol: RequestProtocol;
    private _status: StatusCode;
    private _contentLength: string;
    private _content: string;

    get protocol(): RequestProtocol {
        return this._protocol;
    }

    constructor(protocol: RequestProtocol) {
        this._status = StatusCode["Non-Authoritative"];
    }
}
