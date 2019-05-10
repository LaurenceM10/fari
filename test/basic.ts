import Fari, { HttpRoute, UrlParameter, QueryParameter, Body } from "../mod.ts";

@HttpRoute({ modelName: "TestModel" })
class TestModel {
    test: string;
}

@HttpRoute
class TestAPI {
    @HttpRoute({ method: "GET", url: "/test/{0}" })
    async getTest(@UrlParameter id: string) {}

    @HttpRoute({ method: "PUT", url: "/demo" })
    async createTest(@Body Demo: TestModel) {}

    @HttpRoute({ method: "POST", url: "/demo?ex={ex}" })
    async updateTest(@QueryParameter ex: string, @Body Demo: TestModel) {}

    @HttpRoute({ method: "DELETE", url: "/demo/{id}" })
    async deleteTest(@UrlParameter args: string) {}
}

(() => {
    Fari.server.listen("0.0.0.0:8080");
    //    TestAPI.getTest("21");
})();
