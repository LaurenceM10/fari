import { RequestProtocol, HttpStatusCode } from "../enums/mod.ts";

export default class HttpRequest {
    private _protocol: RequestProtocol;
    private _status: HttpStatusCode;
    private _contentLength: string;
    private _content: string;

    get protocol(): RequestProtocol {
        return this._protocol;
    }

    set protocol(protocol: RequestProtocol) {
        this._protocol = protocol;
    }

    get status(): HttpStatusCode {
        return this._status;
    }

    set status(status: HttpStatusCode) {
        this._status = status;
    }

    get contentLength(): string {
        return this._contentLength;
    }

    get content(): string {
        return this._content;
    }

    set content(content: string) {
        this._contentLength = content.length.toString();
        this._content = content;
    }

    constructor() {}

    toResponseString() {
        return `${this._protocol} ${this._status.split("/")[0]} ${this._status.split("/")[1]}\r\nContent-Length: ${this._contentLength}\r\n\r\n${
            this._content
        }\n`;
    }

    toUint8Array() {
        return new TextEncoder().encode(this.toResponseString());
    }
}
