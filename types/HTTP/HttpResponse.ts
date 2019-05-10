import HttpCode from "./HttpCode.ts";
import HttpProtocol from "./HttpProtocol.ts";

export default class HttpResponse {
    private _protocol: HttpProtocol;
    private _status: HttpCode;
    private _contentLength: string;
    private _content: string;

    get protocol(): HttpProtocol {
        return this._protocol;
    }

    set protocol(protocol: HttpProtocol) {
        this._protocol = protocol;
    }

    get status(): HttpCode {
        return this._status;
    }

    set status(status: HttpCode) {
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
        return `${this._protocol} ${this._status.split("/")[0]} ${this._status.split("/")[1]}   \r\nContent-Length: ${this._contentLength}\r\n\r\n${
            this._content
        }\n`;
    }

    toUint8Array() {
        return new TextEncoder().encode(this.toResponseString());
    }
}
