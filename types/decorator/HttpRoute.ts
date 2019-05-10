import { Server } from "../Server.ts";

//http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-3
export default function HttpRoute(...args: any[]) {
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

export function UrlParameter(...args: any[]) {
    console.log(args);
}

export function QueryParameter(...args: any[]) {
    console.log(args);
}

export function Body(...args: any[]) {
    console.log(args);
}

function httpRouteClass(...args: any[]) {
    console.log(args);
}

function httpRouteMethod(...args: any[]) {
    console.log(args);
}
