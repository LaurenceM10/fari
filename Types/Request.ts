import { RequestType } from "./RequestType";

class Request {
    constructor(message: string) {}
    private _type: RequestType;

    //     GET /test HTTP/1.1
    // Host: localhost:8080
    // Connection: keep-alive
    // Cache-Control: max-age=0
    // Upgrade-Insecure-Requests: 1
    // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36
    // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
    // Accept-Encoding: gzip, deflate, br
    // Accept-Language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7

    // GET /favicon.ico HTTP/1.1
    // Host: localhost:8080
    // Connection: keep-alive
    // Pragma: no-cache
    // Cache-Control: no-cache
    // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36
    // Accept: image/webp,image/apng,image/*,*/*;q=0.8
    // Referer: http://localhost:8080/test
    // Accept-Encoding: gzip, deflate, br
    // Accept-Language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7

    // anguage: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7
}
