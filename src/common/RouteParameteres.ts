class RouteParameters {
    routeParameters?: Array<{ name: string; type?: string }>;
    queryParameters?: Array<{ name: string; mandatory: boolean; type?: string }>;
    body?: string;
}
