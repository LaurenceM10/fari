import { Server } from "../Server.ts";

class FariRoute {
    static model(constructor: Function): void {
        console.log(constructor)
    }

    static controller(constructor: Function): void {
        console.log(constructor)
    }

    static get(url: string): Function {
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            console.log(url, target, propertyKey, descriptor)
        }
    }

    static post(url: string): Function {
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            console.log(url, target, propertyKey, descriptor)
        }
    }

    static put(url: string): Function {
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            console.log(url, target, propertyKey, descriptor)
        }
    }

    static delete(url: string): Function {
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            console.log(url, target, propertyKey, descriptor)
        }
    }

    static urlParameter(target: Object, propertyKey: string | symbol, parameterIndex: number): void {
        console.log(target, propertyKey, parameterIndex)
    }

    static queryParameter(target: Object, propertyKey: string | symbol, parameterIndex: number): void {
        console.log(target, propertyKey, parameterIndex)
    }

    static body(target: Object, propertyKey: string | symbol, parameterIndex: number): void {
        console.log(target, propertyKey, parameterIndex)
    }
}

export default FariRoute;