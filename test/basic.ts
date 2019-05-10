import Fari, { FariRoute } from "../mod.ts";

@FariRoute.model({ modelName: "TestModel" })
class TestModel {
    test: string;
}

@FariRoute.controller
class TestAPI {
    @FariRoute.get({ url: "/test/{0}" })
    async getTest(@FariRoute.urlParameter id: string) {}

    @FariRoute.put({ url: "/demo" })
    async createTest(@FariRoute.body Demo: TestModel) {}

    @FariRoute.post({ url: "/demo?ex={ex}" })
    async updateTest(@FariRoute.queryParameter ex: string, @FariRoute.body Demo: TestModel) {}

    @FariRoute.delte({ url: "/demo/{id}" })
    async deleteTest(@FariRoute.urlParameter args: string) {}
}

(() => {
    Fari.server.listen("0.0.0.0:8080");
    //    TestAPI.getTest("21");
})();
