import {
  createHttpResponse,
  WithoutStatusAndMessage,
} from '../core/HttpResponse';
/**
 * ## 200 OK
 * The request has succeeded.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
 */
export const Ok = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    metadata: options?.metadata,
    cause: options?.cause,
    reference: options?.reference,
    requestId: options?.requestId,
    statusCode: 200,
    message: 'Ok',
  });
};

/**
 * ## 201 Created
 * The request has succeeded and a new resource has been created as a result.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
 */
export const Created = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 201,
    message: 'Created',
  });
};

/**
 * ## 202 Accepted
 * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202
 */
export const Accepted = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 202,
    message: 'Accepted',
  });
};

/**
 * ## 203 Non-Authoritative Information
 * The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203
 */
export const NonAuthoritativeInformation = <T>(
  options: WithoutStatusAndMessage<T>
) => {
  return createHttpResponse({
    ...options,
    statusCode: 203,
    message: 'Non-Authoritative Information',
  });
};
/**
 * ## 204 No Content
 * The server successfully processed the request and is not returning any content.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
 */
export const NoContent = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 204,
    message: '',
  });
};

/**
 * ## 205 Reset Content
 * The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205
 */
export const ResetContent = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 205,
    message: 'Reset Content',
  });
};

/**
 * ## 206 Partial Content
 * The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206
 */
export const PartialContent = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 206,
    message: 'Partial Content',
  });
};

/**
 * ## 207 Multi-Status
 * The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207
 */
export const MultiStatus = <T>(options?: WithoutStatusAndMessage<T>) => {
  return createHttpResponse({
    ...options,
    statusCode: 207,
    message: 'Multi-Status',
  });
};
