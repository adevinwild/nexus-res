import ConfigFileFetcher from './ConfigFileFetcher';
import {
  ExpressRes,
  FastifyRes,
  HapiRes,
  HttpRes,
  IHttpResponse,
  KoaRes,
} from './interface';

/**
 * Base class for a premade HTTP response.
 * @abstract
 * @class HttpResponseBase
 * @implements {IHttpResponse<T>}
 */
export default abstract class HttpResponseBase<T> {
  readonly statusCode: number;
  readonly message: string;
  readonly cause?: string;
  readonly metadata?: T;
  readonly reference?: string;
  readonly requestId?: string;

  constructor(response: IHttpResponse<T>) {
    this.statusCode = response.statusCode;
    this.message = response.message;
    this.metadata = response.metadata;
    this.requestId = response.requestId;
    this.cause = response.cause;
    this.reference = response.reference;
  }

  public async send(serverResponse: unknown): Promise<unknown> {
    const config = await new ConfigFileFetcher().fetchConfig();

    switch (config.serverType) {
      case 'http': {
        const res = serverResponse as HttpRes;
        return res
          .writeHead(this.statusCode, { 'Content-Type': 'application/json' })
          .end(this.toString());
      }
      case 'express': {
        const res = serverResponse as ExpressRes;
        return res.status(this.statusCode).json(this);
      }
      case 'fastify': {
        const res = serverResponse as FastifyRes;
        return res.code(this.statusCode).send(this);
      }
      case 'koa': {
        const res = serverResponse as KoaRes;
        res.status = this.statusCode;
        res.body = this;
        return res;
      }
      case 'hapi': {
        const res = serverResponse as HapiRes;
        return res.response(this).code(this.statusCode);
      }
      default: {
        throw new Error(`Server type "${config.serverType}" not supported.`);
      }
    }
  }

  public toString() {
    return JSON.stringify(this);
  }
}
