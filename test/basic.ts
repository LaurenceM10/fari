import Fari, { HttpRoute } from "../mod.ts";

(() => {
    Fari.server.listen("0.0.0.0:8080");
})();

@HttpRoute({ modelName: "TestModel" })
class TestModel {
    test: string;
}

class TestAPI {
    @HttpRoute({method:'GET', url: '/test/{id}'})
    function getTest(@HttpRoute({ urlParams: ['id'] }) args: []) {
    }

    @HttpRoute({method:'PUT', url: '/demo'})
    function createDemo(@HttpRoute({ bodyOfType: 'DemoModel' }) Demo: DemoModel) {
    }

    @HttpRoute({method:'POST', url: '/demo?ex={ex}'})
    function updateDemo(@HttpRoute({ queryParams: ['ex']}) args: [], @HttpRoute({ bodyOfType: 'DemoModel' }) Demo: DemoModel) {
    }

    @HttpRoute({method:'DELETE', url: '/demo/{id}'})
    function deleteDemo(@HttpRoute({ urlParams: ['id'] }) args: []): HttpResponse {
    }
}