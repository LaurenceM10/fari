namespace Fari {
    class HttpResponse {
        private _protocol: Fari.HttpProtocol;
        private _status: Fari.HttpCode;
        private _contentLength: string;
        private _content: string;

        get protocol(): Fari.HttpProtocol {
            return this._protocol;
        }

        set protocol(protocol: Fari.HttpProtocol) {
            this._protocol = protocol;
        }

        get status(): Fari.HttpCode {
            return this._status;
        }

        set status(status: Fari.HttpCode) {
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
}