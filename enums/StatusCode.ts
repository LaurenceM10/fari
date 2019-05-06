enum StatusCode {
    Continue = 100,
    "Switching Protocols" = 101,
    Processing = 102,
    OK = 200,
    Created = 201,
    Accepted = 202,
    "Non-Authoritative" = 203,
    "No Content" = 204,
    "Reset Content" = 205,
    "Partial Content" = 206,
    "Multi-Status" = 207,
    "Already Reported" = 208,
    "IM Used" = 226,
    "Multiple Choices" = 300,
    "Moved Permanently" = 301,
    "Found (Moved Temporarily)" = 302,
    "See Other" = 303,
    "Not Modified" = 304,
    "Use Proxy" = 305,
    "Temporary Redirect" = 306,
    "Permanent Redirect" = 308
}

export default StatusCode;
