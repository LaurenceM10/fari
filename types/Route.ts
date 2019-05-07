import { RequestType } from "../enums/mod.ts";
export default class Route {
    private _path: string;
    private _reqType: RequestType;
    private _func: object;

    get path(): string {
        return this._path;
    }

    get requestType(): RequestType {
        return this._reqType;
    }

    get func(): object {
        return this._func;
    }

    constructor(path: string, requestType: RequestType, func: object) {
        this._path = path;
        this._reqType = requestType;
        this._func = func;
    }
}
