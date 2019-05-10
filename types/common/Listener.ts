import { Server } from "../Server.ts";
import HttpCode from "../HTTP/HttpCode.ts";
import HttpRequest from "../HTTP/HttpRequest.ts";
import HttpResponse from "../HTTP/HttpResponse.ts";

export default class Listener {
    private _addr: string;
    private _denoListener: Deno.Listener;
    private _server: Server;

    get addr(): string {
        return this._addr;
    }

    constructor(addr: string) {
        this._addr = addr;
    }

    private async _handle(conn: Deno.Conn): Promise<void> {
        const buffer = new Uint8Array(1024);
        const response = new HttpResponse();
        try {
            while (true) {
                const r = await conn.read(buffer);
                const request = new HttpRequest(buffer);
                await this._server.handleRequest(request, response);
                await conn.write(response.toUint8Array());
            }
        } catch (e) {
            response.status = HttpCode.InternalServerError;
            response.content = e.toString();
            await conn.write(response.toUint8Array());
        } finally {
            conn.close();
        }
    }

    async listen(server: Server) {
        this._server = server;
        this._denoListener = Deno.listen("tcp", this._addr);
        while (true) {
            const conn = await this._denoListener.accept();
            this._handle(conn);
        }
    }

    async stopListen() {
        this._denoListener.close();
    }
}
