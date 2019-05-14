import Fari, { FariRoute } from "../mod.ts";
import HttpRequest from "../types/HTTP/HttpRequest.ts";
import HttpResponse from "../types/HTTP/HttpResponse.ts";

// deno run --config ./tsconfig.json --allow-net ./test/basic.ts

class TestModel {
    test: string;
}

class TestAPI {
    @FariRoute.get({
        url: "/test/{0}",
        urlParameter: [
            {
                name: "id",
                index: 0,
                mandatory: true,
                type: "string"
            }
        ]
    })
    async getTest(req: HttpRequest, res: HttpResponse) {}

    @FariRoute.put({
        url: "/test",
        body: {
            type: "TestModel"
        }
    })
    async createTest(req: HttpRequest, res: HttpResponse) {}

    @FariRoute.post({
        url: "/test?ex={0}",
        queryParameter: [
            {
                name: "ex",
                mandatory: false,
                type: "string"
            }
        ],
        body: {
            type: "TestModel"
        }
    })
    async updateTest(req: HttpRequest, res: HttpResponse) {}

    @FariRoute.delete({
        url: "/test/{0}"
    })
    async deleteTest(req: HttpRequest, res: HttpResponse) {}
}

(() => {
    Fari.server.listen("0.0.0.0:8080");
    //    TestAPI.getTest("21");
})();
