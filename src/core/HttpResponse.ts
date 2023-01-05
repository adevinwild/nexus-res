import { ConfigFile, IHttpResponse, StatusCode } from './interface';
import { readConfigFile } from './utils';

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

  public send(res: any) {
    let config = readConfigFile();

    if (!config) {
      config = {
        serverType: 'express', // Default to express
      };
    }

    const serverResponses: Record<ConfigFile['serverType'], () => any> = {
      http: () =>
        res
          .writeHead(this.statusCode, { 'Content-Type': 'application/json' })
          .end(this.toString()),
      express: () => res.status(this.statusCode).json(this),
      fastify: () => res.code(this.statusCode).send(this),
      koa: () => {
        res.status = this.statusCode;
        res.body = this;
      },
      hapi: () => res.response(this).code(this.statusCode),
    };

    if (!serverResponses[config.serverType]) {
      throw new Error(`Server type "${config.serverType}" not supported.`);
    }

    return serverResponses[config.serverType]();
  }

  public toString() {
    return JSON.stringify(this);
  }
}
