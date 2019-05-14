import HttpType from "./HttpType.ts";
import HttpProtocol from "./HttpProtocol.ts";

export default class HttpRequest {
    private _type: HttpType;
    private _protocol: HttpProtocol;
    private _route: string;
    private _host: string;
    private _connection: string;
    private _userAgent: string;
    private _accept: string;
    private _encoding: string;
    private _language: string;
    private _keyValuePairs: Array<Object>;

    get type(): HttpType {
        return this._type;
    }

    get protocol(): HttpProtocol {
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
        headerValues.forEach(vals => {
            const [key, value] = vals.split(":");
            this._keyValuePairs.push({ key, value });
        });

        console.log(header, body);
    }
}

// GET /test HTTP/1.1
// Host: localhost:8080
// Connection: keep-alive
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
// Accept-Encoding: gzip, deflate, br
// Accept-Language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7
