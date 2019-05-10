import Fari, { HttpRoute } from "../mod.ts";

(() => {
    Fari.server.listen("0.0.0.0:8080");
})();

@HttpRoute({ modelName: "TestModel" })
class TestModel {
    test: string;
}

class TestAPI {
    @HttpRoute({ method: "GET", url: "/test/{id}" })
    getTest(@HttpRoute({ urlParams: ["id"] }) args: []) {}

    @HttpRoute({ method: "PUT", url: "/demo" })
    createDemo(@HttpRoute({ bodyOfType: "TestModel" }) Demo: TestModel) {}

    @HttpRoute({ method: "POST", url: "/demo?ex={ex}" })
    updateDemo(@HttpRoute({ queryParams: ["ex"] }) args: [], @HttpRoute({ bodyOfType: "DemoModel" }) Demo: TestModel) {}

    @HttpRoute({ method: "DELETE", url: "/demo/{id}" })
    deleteDemo(@HttpRoute({ urlParams: ["id"] }) args: []) {}
}
