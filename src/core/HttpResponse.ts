import { IHttpResponse, StatusCode } from './interface';

/**
 * Base class for a premade HTTP response.
 * @abstract
 * @class HttpResponseBase
 */
export default abstract class HttpResponseBase implements IHttpResponse {
  /**
   * The HTTP status code.
   *
   * @readonly
   * @type {StatusCode}
   */
  readonly statusCode: StatusCode;

  /**
   * The response message.
   *
   * @readonly
   * @type {string}
   */
  readonly message: string;

  /**
   * **The optional cause of the response**.
   *
   * @readonly
   * @type {string}
   */
  readonly cause?: string;

  /**
   * **Custom metadata to be included in the response.**
   *
   * @example
   * import { BadRequest } from 'nexus-res';
   *
   * export default async (req, res) => {
   *  res.status(400).json(new BadRequest("Invalid request format.", { userId: 123 }));
   * };
   *
   * @readonly
   * @type {any}
   **/
  readonly metadata?: any;

  /**
   * The optional reference to more detailed documentation or information about the response.
   *
   * @readonly
   * @type {string}
   */
  readonly reference?: string;

  /**
   * The optional request ID for tracking and debugging purposes.
   *
   * @readonly
   * @type {string}
   */
  readonly requestId?: string;

  /**
   * Creates a new HTTP response.
   * @constructor
   * @param {Object} options - Options object.
   * @param {Object} [options.metadata] - Additional metadata.
   * @param {string} [options.cause] - Reason for the error.
   * @param {string} [options.reference] - URL to documentation or helpful resources.
   * @param {string} [options.requestId] - ID of the request for tracking purposes.
   */
  constructor(response: IHttpResponse) {
    this.statusCode = response.statusCode;
    this.message = response.message;
    this.metadata = response.metadata;
    this.cause = response.cause;
    this.reference = response.reference;
    this.requestId = response.requestId;
  }
}
