import HttpCode from "./HttpCode.ts";
import HttpProtocol from "./HttpProtocol.ts";

export default class HttpResponse {
    private _protocol: HttpProtocol;
    private _status: HttpCode;
    private _content: string;
    private _keyValuePairs: Array<{ key: string; value: string }>;

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

    get content(): string {
        return this._content;
    }

    set content(content: string) {
        this.addHeader("Content-Length", content.length.toString());
        this._content = content;
    }

    constructor() {
        this._keyValuePairs = [];
        this._keyValuePairs.push({ key: "Content-Length", value: "0" });
        this._keyValuePairs.push({ key: "Content-Type", value: "text" });
    }

    addHeader(key, value) {
        let existing = this._keyValuePairs.find(pair => pair.key === key);
        if (existing) {
            existing.value = value;
        } else {
            this._keyValuePairs.push({ key, value });
        }
    }

    toResponseString() {
        let responseString = `${this._protocol} ${this._status.split("/")[0]} ${this._status.split("/")[1]}\r\n`;
        this._keyValuePairs.forEach(pair => {
            responseString += `${pair.key}: ${pair.value}\r\n`;
        });
        responseString += `\r\n`;
        responseString += `${this._content}\n`;
        return responseString;
    }

    toUint8Array() {
        return new TextEncoder().encode(this.toResponseString());
    }
}
