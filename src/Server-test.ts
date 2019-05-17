import Fari, { FariRoute } from "../mod.ts";
import HttpRequest from "./HTTP/HttpRequest.ts";
import HttpResponse from "./HTTP/HttpResponse.ts";
import HttpCode from "./HTTP/HttpCode.ts";

const writeError = message => {
    console.error(message);
};

// start/stop listen
let testName = "start/stop listen";
(async () => {
    const listenOn = "0.0.0.0:8080";

    Fari.server.get("/", (req, res) => {
        try {
            res.status = HttpCode.OK;
            res.content = JSON.stringify({ test: "test" });
        } catch (err) {
            res.status = HttpCode.InternalServerError;
            res.content = "Something went wrong!";
        }
    });

    Fari.server.listen(listenOn);

    let res = await fetch(`http://localhost:8080`);
    if (res.status != 200) writeError(`Test ${testName} Failed`);

    let resJson = await res.json();
    if (JSON.stringify(resJson) !== JSON.stringify({ test: "test" })) writeError(`Test ${testName} Failed`);

    Fari.server.stopListen(listenOn);

    try {
        res = await fetch(`http://localhost:8080`);
        writeError(`Test ${testName} Failed`);
    } catch (err) {}
})();

// // deno run --config ./tsconfig.json --allow-net ./test/basic.ts

// class TestModel {
//     test: string;
// }

// class TestAPI {
//     @FariRoute.get({
//         url: "/test/{0}",
//         urlParameter: [
//             {
//                 name: "id",
//                 index: 0,
//                 mandatory: true,
//                 type: "string"
//             }
//         ]
//     })
//     async getTest(req: HttpRequest, res: HttpResponse) {}

//     @FariRoute.put({
//         url: "/test",
//         body: {
//             type: "TestModel"
//         }
//     })
//     async createTest(req: HttpRequest, res: HttpResponse) {}

//     @FariRoute.post({
//         url: "/test?ex={0}",
//         queryParameter: [
//             {
//                 name: "ex",
//                 mandatory: false,
//                 type: "string"
//             }
//         ],
//         body: {
//             type: "TestModel"
//         }
//     })
//     async updateTest(req: HttpRequest, res: HttpResponse) {}

//     @FariRoute.delete({
//         url: "/test/{0}"
//     })
//     async deleteTest(req: HttpRequest, res: HttpResponse) {}
// }

// (() => {
//     Fari.server.listen("0.0.0.0:8080");
//     //    TestAPI.getTest("21");
// })();
