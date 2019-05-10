import { Server } from "../Server.ts";

//http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-3
function HttpRouteOld(...args: any[]) {
    switch (args.length) {
        case 1:
            console.log("class");
            return httpRouteClass.apply(this, args);
        case 2:
            throw new Error("Not valid with Parameters!");
        case 3:
            if (typeof args[2] === "number") {
                throw new Error("Not valid with Properties!");
            }
            console.log("Method");
            return httpRouteMethod.apply(this, args);
        default:
            throw new Error("Not valid Decorator!");
    }
}

class FariRoute {
    static model(...args: any[]): void {}

    static controller(...args: any[]): void {}

    static get(...args: any[]): void {}

    static post(...args: any[]): void {}

    static put(...args: any[]): void {}

    static delete(...args: any[]): void {}

    static urlParameter(...args: any[]): void {}

    static queryParameter(...args: any[]): void {}

    static body(...args: any[]): void {}
}

export default FariRoute;
