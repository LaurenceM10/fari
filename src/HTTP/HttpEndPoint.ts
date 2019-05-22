import HttpType from "./HttpType.ts";
import RouteParameters from "../common/RouteParameters.ts";

export default class HttpEndPoint {
    private _url: string;
    private _httpType: HttpType;
    private _func: Function;
    private _httpParameters: RouteParameters;

    get url(): string {
        return this._url;
    }

    get func(): Function {
        return this._func;
    }

    get httpType(): HttpType {
        return this._httpType;
    }

    constructor(url: string, func: Function, type: HttpType, httpParameters: RouteParameters = {}) {
        this._url = url;
        this._func = func;
        this._httpType = type;
        this._httpParameters = httpParameters;
    }

    run(request, response): void {
        const args = [];
        try {
            const endPointParts = this._url.split("/");
            const routeParts = request.route.split("/");
            const parameterParts = request.route.split("?")[1].split("&");

            if (this._httpParameters.routeParameters) {
                this._httpParameters.routeParameters.forEach(parameter => {
                    let index = -1;
                    endPointParts.forEach((part, i) => {
                        if (part === `:${parameter.name}`) index = i;
                    });
                    if (index === -1) {
                        throw new Error(`Parameter not found in URL: ${parameter.name}`);
                    }

                    args.push({ name: parameter.name, value: routeParts[index] });
                });
            }
            if (this._httpParameters.queryParameters) {
            }
            if (this._httpParameters.body) {
            }
            this._func(request, response, ...args);
        } catch (e) {
            console.log(e);
        }
    }
}
