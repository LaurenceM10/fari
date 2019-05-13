import Fari, { FariRoute } from "../mod.ts";

@FariRoute.model
class TestModel {
    test: string;
}

@FariRoute.controller
class TestAPI {
    @FariRoute.get("/test/{0}")
    async getTest(@FariRoute.urlParameter id: string) {}

    @FariRoute.put("/demo")
    async createTest(@FariRoute.body Demo: TestModel) {}

    @FariRoute.post("/demo?ex={ex}")
    async updateTest(@FariRoute.queryParameter ex: string, @FariRoute.body Demo: TestModel) {}

    @FariRoute.delete("/demo/{id}")
    async deleteTest(@FariRoute.urlParameter args: string) {}
}

(() => {
    Fari.server.listen("0.0.0.0:8080");
    //    TestAPI.getTest("21");
})();
