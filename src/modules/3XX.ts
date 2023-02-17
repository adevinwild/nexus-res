import {
  createHttpResponse,
  WithoutStatusAndMessage,
} from '../core/HttpResponse';
/**
 * ## 300 Multiple Choices
 * The request has more than one possible response. The user-agent or user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300
 */
export const MultipleChoices = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 300,
    message: '',
  });
};

/**
 * ## 301 Moved Permanently
 * The URL of the requested resource has been changed permanently. The new URL is given in the response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301
 */
export const MovedPermanently = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 301,
    message: '',
  });
};

/**
 * ## 302 Found
 * This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
 */
export const Found = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 302,
    message: '',
  });
};

/**
 * ## 303 See Other
 * The server sent this response to direct the client to get the requested resource at another URI with a GET request.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303
 */
export const SeeOther = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 303,
    message: '',
  });
};

/**
 * ## 304 Not Modified
 * This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
 */
export const NotModified = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 304,
    message: '',
  });
};

/**
 * ## 305 Use Proxy
 * Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305
 */
export const UseProxy = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 305,
    message: '',
  });
};

/**
 * ## 306 Switch Proxy
 * No longer used. Originally meant "Subsequent requests should use the specified proxy."
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306
 */
export const TemporaryRedirect = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 307,
    message: '',
  });
};

/**
 * ## 307 Temporary Redirect
 * The request and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
 */
export const PermanentRedirect = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 308,
    message: '',
  });
};

/**
 * ## 308 Permanent Redirect
 * The request and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308
 */
export const TooManyRedirects = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 310,
    message: '',
  });
};
