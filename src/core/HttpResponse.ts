import { IHttpResponse, StatusCode } from './interface';

/**
 * Base class for a premade HTTP response.
 * @abstract
 * @class HttpResponseBase
 */
export default abstract class HttpResponseBase implements IHttpResponse {
  readonly statusCode: StatusCode;
  readonly message: string;
  readonly cause?: string;
  readonly metadata?: any;
  readonly reference?: string;
  readonly requestId?: string;

  constructor(response: IHttpResponse) {
    this.statusCode = response.statusCode;
    this.message = response.message;
    this.metadata = response.metadata;
    this.requestId = response.requestId;
    this.cause = response.cause;
    this.reference = response.reference;
  }
}
