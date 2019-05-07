export default class Route {
    private _path: string;
    private _func: object;

    get path(): string {
        return this._path;
    }

    get func(): object {
        return this._func;
    }

    constructor(path: string, func: object) {
        this._path = path;
        this._func = func;
    }
}
