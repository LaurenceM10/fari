class RouteParameters {
    url?: string;
    routeParameters?: Array<{ name: string; index: number; mandatory: boolean; type?: string }>;
    queryParameters?: Array<{ name: string; mandatory: boolean; type: string }>;
    body?: string;
}
