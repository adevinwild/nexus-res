import { createHttpResponse, HttpResponseOptions } from '../core/HttpResponse';

/**
 * ## 100 Continue
 * The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100
 */
export const Continue = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 100,
    message: 'Continue',
  });
};

/**
 * ## 101 Switching Protocols
 * The requester has asked the server to switch protocols and the server has agreed to do so.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101
 */
export const SwitchingProtocols = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 101,
    message: 'Switching Protocols',
  });
};

/**
 * ## 102 Processing
 * A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102
 */
export const Processing = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 102,
    message: 'Processing',
  });
};

/**
 * ## 103 Early Hints
 * Used to return some response headers before final HTTP message.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103
 */
export const EarlyHints = <T>(options: HttpResponseOptions<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 103,
    message: 'Early Hints',
  });
};
