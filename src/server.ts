const { listen } = Deno;
const response = new TextEncoder().encode("HTTP/1.1 200 OK\r\nContent-Length: 12\r\n\r\nHello World\n");

async function main(addr: string) {
    const listener = listen("tcp", addr);
    while (true) {
        const conn = await listener.accept();
        handle(conn);
    }
}

async function handle(conn: Deno.Conn): Promise<void> {
    const buffer = new Uint8Array(1024);
    try {
        while (true) {
            const r = await conn.read(buffer);
            const res = new TextDecoder("utf-8").decode(buffer);
            console.log(res);
            if (r.eof) {
                break;
            }
            await conn.write(response);
        }
    } catch (e) {
        throw e;
    } finally {
        conn.close();
    }
}

main("0.0.0.0:8080");
