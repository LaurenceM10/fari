import { Server, Route, Routes } from "../src/fari";

async function main() {
    const server = new Server("0.0.0.0:8080");
    server.addRoutes();
}
