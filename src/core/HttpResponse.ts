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

  public toString() {
    return JSON.stringify(this);
  }

  public send(res: any) {
    const config = readConfigFile();
    if (!config) {
      throw new Error('⛔️ NexusRes | No config file found.');
    }

    const { serverType } = config;

    const serverResponses: Record<ConfigFile['serverType'], () => any> = {
      http: () =>
        res
          .writeHead(this.statusCode, { 'Content-Type': 'application/json' })
          .end(JSON.stringify(this)),
      express: () => res.status(this.statusCode).json(this),
      fastify: () => res.code(this.statusCode).send(this),
      koa: () => {
        res.status = this.statusCode;
        res.body = this;
      },
      hapi: () => res.response(this).code(this.statusCode),
    };

    if (!serverResponses[serverType]) {
      throw new Error(
        `⛔️ NexusRes | Server type "${serverType}" not supported.`
      );
    }

    return serverResponses[serverType]();
  }

  public test() {}
}
