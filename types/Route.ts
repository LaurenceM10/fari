namespace Fari {
    class Route {
        private _path: string;
        private _reqType: Fari.HttpType;
        private _func: object;

        get path(): string {
            return this._path;
        }

        get requestType(): Fari.HttpType {
            return this._reqType;
        }

        get func(): object {
            return this._func;
        }

        constructor(path: string, requestType: Fari.HttpType, func: object) {
            this._path = path;
            this._reqType = requestType;
            this._func = func;
        }
    }
}