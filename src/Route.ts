import HttpType from "./HTTP/HttpType.ts";

export default class Route {
    private _path: string;
    private _reqType: HttpType;
    private _func: object;

    get path(): string {
        return this._path;
    }

    get requestType(): HttpType {
        return this._reqType;
    }

    get func(): object {
        return this._func;
    }

    constructor(path: string, requestType: HttpType, func: object) {
        this._path = path;
        this._reqType = requestType;
        this._func = func;
    }
}
