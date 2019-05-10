import Fari, { HttpRoute, UrlParameter, QueryParameter, Body } from "../mod.ts";

(() => {
    Fari.server.listen("0.0.0.0:8080");
})();

@HttpRoute({ modelName: "TestModel" })
class TestModel {
    test: string;
}

class TestAPI {
    @HttpRoute({ method: "GET", url: "/test/{0}" })
    getTest(@UrlParameter id: string) {}

    @HttpRoute({ method: "PUT", url: "/demo" })
    createTest(@Body Demo: TestModel) {}

    @HttpRoute({ method: "POST", url: "/demo?ex={ex}" })
    updateTest(@QueryParameter ex: string, @Body Demo: TestModel) {}

    @HttpRoute({ method: "DELETE", url: "/demo/{id}" })
    deleteTest(@UrlParameter args: string) {}
}
