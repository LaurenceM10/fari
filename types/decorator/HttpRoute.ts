import { Server } from "../Server.ts";

const server = Server.instance();

class FariRoute {
    private static model(constructor: Function): void {}

    private static controller(constructor: Function): void {}

    static get(parameters: any): Function {
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            if (!parameters || !parameters.url) throw new Error(`Error: ${propertyKey} no parameters or url provided`);

            const { urlParameter, queryParameter, body } = parameters;
            server.get(parameters.url, descriptor.value, { urlParameter, queryParameter, body });
        };
    }

    static post(parameters: any): Function {
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            if (!parameters || !parameters.url) throw new Error(`Error: ${propertyKey} no parameters or url provided`);

            const { urlParameter, queryParameter, body } = parameters;
            server.post(parameters.url, descriptor.value, { urlParameter, queryParameter, body });
        };
    }

    static put(parameters: any): Function {
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            if (!parameters || !parameters.url) throw new Error(`Error: ${propertyKey} no parameters or url provided`);

            const { urlParameter, queryParameter, body } = parameters;
            server.put(parameters.url, descriptor.value, { urlParameter, queryParameter, body });
        };
    }

    static delete(parameters: any): Function {
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
            if (!parameters || !parameters.url) throw new Error(`Error: ${propertyKey} no parameters or url provided`);

            const { urlParameter, queryParameter, body } = parameters;
            server.delete(parameters.url, descriptor.value, { urlParameter, queryParameter, body });
        };
    }
}

export default FariRoute;
