import HttpType from "./HttpType.ts";
import HttpProtocol from "./HttpProtocol.ts";

export default class HttpRequest {
    private _type: HttpType;
    private _protocol: HttpProtocol;
    private _route: string;
    private _keyValuePairs: Array<{ key: string; value: string }>;
    private _body: string;

    get type(): HttpType {
        return this._type;
    }

    get protocol(): HttpProtocol {
        return this._protocol;
    }

    get route(): string {
        return this._route;
    }

    get body(): string {
        return this._body;
    }

    getHeader(key: string) {
        return this._keyValuePairs.find(keyValPair => keyValPair.key === key);
    }

    constructor(message: Uint8Array) {
        message = message.filter(part => !!part);
        const resText = new TextDecoder("utf-8").decode(message);

        // Split Body and Header
        const [header, body] = resText.split("\r\n\r\n");

        // Take first line: GET /test HTTP/1.1 and set them in request
        const headerValues = header.split("\r\n");
        const httpStarter = headerValues.shift().split(" ");
        this._type = HttpType[httpStarter[0]];
        this._route = httpStarter[1];
        this._protocol = HttpProtocol[httpStarter[2].replace(/[\/\.]/g, "")];

        // Set Header Key Value pairs
        this._keyValuePairs = [];
        headerValues.forEach(vals => {
            const [key, value] = vals.split(":");
            this._keyValuePairs.push({ key, value });
        });

        this._body = body;
    }
}
