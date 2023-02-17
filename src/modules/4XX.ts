import {
  createHttpResponse,
  WithoutStatusAndMessage,
} from '../core/HttpResponse';
/**
 * ## 400 Bad Request
 * The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
 */
export const BadRequest = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 400,
    message: 'Bad Request',
  });
};

/**
 * ## 401 Unauthorized
 * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */
export const Unauthorized = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 401,
    message: 'Unauthorized',
  });
};

/**
 * ## 402 Payment Required
 * Reserved for future use.
 * The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 */
export const PaymentRequired = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 402,
    message: 'Payment Required',
  });
};

/**
 * ## 403 Forbidden
 * The request was valid, but the server is refusing action.
 * The user might not have the necessary permissions for a resource, or may need an account of some sort.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export const Forbidden = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 403,
    message: 'Forbidden',
  });
};
/**
 * ## 404 Not Found
 * The requested resource could not be found but may be available in the future.
 * Subsequent requests by the client are permissible.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
 */
export const NotFound = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 404,
    message: 'Not Found',
  });
};

/**
 * ## 405 Method Not Allowed
 * A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
 */
export const MethodNotAllowed = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 405,
    message: 'Method Not Allowed',
  });
};

/**
 * ## 406 Not Acceptable
 * The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
 */
export const NotAcceptable = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 406,
    message: 'Not Acceptable',
  });
};

/**
 * ## 407 Proxy Authentication Required
 * The client must first authenticate itself with the proxy.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 */
export const ProxyAuthenticationRequired = <T>(
  options: WithoutStatusAndMessage<T>
) => {
  return createHttpResponse({
    ...options,
    statusCode: 407,
    message: 'Proxy Authentication Required',
  });
};

/**
 * ## 408 Request Timeout
 * The server timed out waiting for the request.
 * According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait.
 * The client MAY repeat the request without modifications at any later time."
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
 */
export const RequestTimeout = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 408,
    message: 'Request Timeout',
  });
};

/**
 * ## 409 Conflict
 * Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple updates.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
 */
export const Conflict = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 409,
    message: 'Conflict',
  });
};

/**
 * ## 410 Gone
 * Indicates that the resource requested is no longer available and will not be available again.
 * This should be used when a resource has been intentionally removed and the resource should be purged.
 * Upon receiving a 410 status code, the client should not request the resource in the future.
 * Clients such as search engines should remove the resource from their indices.
 * Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
 */
export const Gone = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({ ...options, statusCode: 410, message: 'Gone' });
};

/**
 * ## 411 Length Required
 * The request did not specify the length of its content, which is required by the requested resource.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
 */
export const LengthRequired = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 411,
    message: 'Length Required',
  });
};

/**
 * ## 412 Precondition Failed
 * The server does not meet one of the preconditions that the requester put on the request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
 */
export const PreconditionFailed = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 412,
    message: 'Precondition Failed',
  });
};

/**
 * ## 413 Payload Too Large
 * The request is larger than the server is willing or able to process.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 */
export const PayloadTooLarge = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 413,
    message: 'Payload Too Large',
  });
};

/**
 * ## 414 URI Too Long
 * The URI provided was too long for the server to process.
 * Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
 */
export const URITooLong = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 414,
    message: 'URI Too Long',
  });
};

/**
 * ## 415 Unsupported Media Type
 * The request entity has a media type which the server or resource does not support.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
 */
export const Unsupported = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 415,
    message: 'Unsupported Media Type',
  });
};

/**
 * ## 416 Range Not Satisfiable
 * The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
 * For example, if the client asked for a part of the file that lies beyond the end of the file.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 */
export const RangeNotSatisfiable = <T>(
  options?: WithoutStatusAndMessage<T>
) => {
  return createHttpResponse({
    ...options,
    statusCode: 416,
    message: 'Range Not Satisfiable',
  });
};

/**
 * ## 417 Expectation Failed
 * The server cannot meet the requirements of the Expect request-header field.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
 */
export const ExpectationFailed = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 417,
    message: 'Expectation Failed',
  });
};

/**
 * ## 418 I'm a teapot
 * Just a joke status code.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
 */
export const ImATeapot = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 418,
    message: "I'm a teapot",
  });
};
/**
 * ## 421 Misdirected Request
 * The request was directed at a server that is not able to produce a response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421
 */
export const MisdirectedRequest = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 421,
    message: 'Misdirected Request',
  });
};

/**
 * ## 422 Unprocessable Entity
 * The request was well-formed but was unable to be followed due to semantic errors.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
 */
export const UnprocessableEntity = <T>(
  options?: WithoutStatusAndMessage<T>
) => {
  return createHttpResponse({
    ...options,
    statusCode: 422,
    message: 'Unprocessable Entity',
  });
};

/**
 * ## 423 Locked
 * The resource that is being accessed is locked.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423
 */
export const Locked = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({ ...options, statusCode: 423, message: 'Locked' });
};

/**
 * ## 424 Failed Dependency
 * The request failed due to failure of a previous request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424
 */
export const FailedDependency = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 424,
    message: 'Failed Dependency',
  });
};

/**
 * ## 425 Too Early
 * Indicates that the server is unwilling to risk processing a request that might be replayed.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425
 */
export const TooEarly = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 425,
    message: 'Too Early',
  });
};

/**
 * ## 426 Upgrade Required
 * The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
 */
export const UpgradeRequired = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 426,
    message: 'Upgrade Required',
  });
};

/**
 * ## 428 Precondition Required
 * The origin server requires the request to be conditional.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
 */
export const PreconditionRequired = <T>(
  options?: WithoutStatusAndMessage<T>
) => {
  return createHttpResponse({
    ...options,
    statusCode: 428,
    message: 'Precondition Required',
  });
};

/**
 * ## 429 Too Many Requests
 * The user has sent too many requests in a given amount of time.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 */
export const TooManyRequests = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 429,
    message: 'Too Many Requests',
  });
};

/**
 * ## 431 Request Header Fields Too Large
 * The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
 */
export const RequestHeaderFieldsTooLarge = <T>(
  options: WithoutStatusAndMessage<T>
) => {
  return createHttpResponse({
    ...options,
    statusCode: 431,
    message: 'Request Header Fields Too Large',
  });
};

/**
 * ## 451 Unavailable For Legal Reasons
 * A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
 */
export const UnavailableForLegalReasons = <T>(
  options: WithoutStatusAndMessage<T>
) => {
  return createHttpResponse({
    ...options,
    statusCode: 451,
    message: 'Unavailable For Legal Reasons',
  });
};
