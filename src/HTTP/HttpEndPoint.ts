import HttpType from "./HttpType.ts";

export default class HttpEndPoint {
    private _url: string;
    private _httpType: HttpType;
    private _func: Function;
    private _httpParameters: Object;

    get url(): string {
        return this._url;
    }

    get func(): Function {
        return this._func;
    }

    get httpType(): HttpType {
        return this._httpType;
    }

    constructor(url: string, func: Function, type: HttpType, httpParameters?: Object) {
        this._url = url;
        this._func = func;
        this._httpType = type;
        this._httpParameters = httpParameters;
    }

    run(request, response, args: any[] = []): void {
        try {
            // this._validators.forEach(val => val(...args));
        } catch (e) {
            console.log(e);
        } finally {
            this._func(request, response, ...args);
        }
    }
}
