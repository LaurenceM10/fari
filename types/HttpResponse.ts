import { RequestProtocol, StatusCode } from "../enums/mod.ts";

export default class HttpRequest {
    private _protocol: RequestProtocol;
    private _status: StatusCode;
    private _contentLength: string;
    private _content: string;

    get protocol(): RequestProtocol {
        return this._protocol;
    }

    constructor(protocol: RequestProtocol) {
        this._status = StatusCode.BadRequest;
    }
}
