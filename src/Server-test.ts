import Fari, { FariRoute } from "../mod.ts";
import HttpRequest from "./HTTP/HttpRequest.ts";
import HttpResponse from "./HTTP/HttpResponse.ts";

const writeError = message => {
    console.error(message);
};

// start/stop listen
let testName = "start/stop listen";
(() => {
    const listenOn = "0.0.0.0:8080";
    Fari.server.listen(listenOn);

    Fari.server.get("/", (req, res) => {
        res.content = "Test OK";
    });

    let res = fetch(`http://localhost:8080`).then(res => {
        console.log(res.json());
        if (res.status != 200) writeError(`Test ${testName} Failed`);
    });
    // if (res.body != "Test OK") writeError(`Test ${testName} Failed`);

    // res = await fetch(`http://localhost:8080/needs404`);
    // if (res.status == 200) writeError(`Test ${testName} Failed`);
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
