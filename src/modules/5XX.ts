import { createHttpResponse, HttpResponseOptions } from '../core/HttpResponse';

/**
 * ## 500 Internal Server Error
 * The server has encountered a situation it doesn't know how to handle.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
 */
export const InternalServerError = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 500,
    message: 'Internal Server Error',
  });
};

/**
 * ## 501 Not Implemented
 * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 */
export const NotImplemented = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 501,
    message: 'Not Implemented',
  });
};

/**
 * ## 502 Bad Gateway
 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
 */
export const BadGateway = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 502,
    message: 'Bad Gateway',
  });
};

/**
 * ## 503 Service Unavailable
 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
 */
export const ServiceUnavailable = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 503,
    message: 'Service Unavailable',
  });
};

/**
 * ## 504 Gateway Timeout
 * This error response is given when the server is acting as a gateway and cannot get a response in time.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */
export const GatewayTimeout = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 504,
    message: 'Gateway Timeout',
  });
};

/**
 * ## 505 HTTP Version Not Supported
 * The HTTP version used in the request is not supported by the server.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
 */
export const HttpVersionNotSupported = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 505,
    message: 'HTTP Version Not Supported',
  });
};

/**
 * ## 506 Variant Also Negotiates
 * Transparent content negotiation for the request results in a circular reference.
 */
export const VariantAlsoNegotiates = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 506,
    message: 'Variant Also Negotiates',
  });
};

/**
 * ## 507 Insufficient Storage
 * The server is unable to store the representation needed to complete the request.
 */
export const InsufficientStorage = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 507,
    message: 'Insufficient Storage',
  });
};

/**
 * ## 508 Loop Detected
 * The server detected an infinite loop while processing the request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
 */
export const LoopDetected = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 508,
    message: 'Loop Detected',
  });
};
/**
 * ## 509 Bandwidth Limit Exceeded
 * This status code, while used by many servers, is not specified in any RFCs.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/509
 */
export const NotExtended = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 510,
    message: 'Not Extended',
  });
};

/**
 * ## 511 Network Authentication Required
 * The 511 status code indicates that the client needs to authenticate to gain network access.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
 */
export const NetworkAuthenticationRequired = <T>(
  options: HttpResponseOptions<T>
) => {
  return createHttpResponse({
    ...options,
    statusCode: 511,
    message: 'Network Authentication Required',
  });
};

/**
 * ## 520 Unknown Error
 * The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/520
 */
export const UnknownError = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 520,
    message: 'Unknown Error',
  });
};
