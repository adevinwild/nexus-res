/**
 * Interface for a premade HTTP response.
 * @interface IHttpResponse
 */
export interface IHttpResponse {
  /**
   * The HTTP status code.
   * @type { StatusCode }
   */
  statusCode: StatusCode;

  /**
   * The response message.
   * @type { string }
   */
  message: string;

  /**
   * **The optional cause message.**
   * @type { string }
   */
  cause?: string;

  /**
   * **Custom metadata to be included in the response.**
   * @member {any} metadata
   * @example
   * import { BadRequest } from 'nexus-res';
   *
   * export default async (req, res) => {
   *
   *  const badRequest = new BadRequest({
   *    metadata: {
   *      foo: 'bar',
   *    }
   *  })
   *
   * res.status(badRequest.statusCode).json(badRequest);
   * };
   */
  metadata?: any;

  /**
   * **The optional reference to more detailed documentation or information about the response.**
   * @type {string}
   */
  reference?: string;

  /**
   * The optional request ID for tracking and debugging purposes.
   * @type {string}
   */
  requestId?: string;
}

export type HttpResponseWithDefaults = Omit<
  IHttpResponse,
  'statusCode' | 'message'
>;

export type StatusCode =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 307
  | 308
  | 310
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511
  | 520;
