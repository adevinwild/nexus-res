import ConfigFileFetcher from './ConfigFileFetcher';

export type HttpResponseOptions<T> = {
  /**
   * The HTTP status code.
   * @type { number }
   */
  statusCode: number;

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
   */
  metadata?: T;

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
};

export class HttpResponse<T> {
  readonly statusCode: number;
  readonly message: string;
  readonly cause?: string;
  readonly metadata?: T;
  readonly reference?: string;
  readonly requestId?: string;

  constructor(response: HttpResponseOptions<T>) {
    this.statusCode = response.statusCode;
    this.message = response.message;
    this.metadata = response.metadata;
    this.requestId = response.requestId;
    this.cause = response.cause;
    this.reference = response.reference;
  }

  public async send(serverResponse: unknown) {
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

export function createHttpResponse<T>(response: HttpResponseOptions<T>) {
  return new HttpResponse(response);
}

export type WithoutStatusAndMessage<T> = Omit<
  HttpResponseOptions<T>,
  'statusCode' | 'message'
>;

export type ExpressRes = {
  status: (code: number) => ExpressRes;
  json: <T>(data: T) => any;
};

export type HttpRes = {
  writeHead: (code: number, headers: Record<string, string>) => HttpRes;
  end: (data: any) => any;
};

export type FastifyRes = {
  code: (code: number) => FastifyRes;
  send: <T>(data: T) => any;
};

export type KoaRes = {
  status: number;
  body: unknown | HttpResponse<unknown>;
};

export type HapiRes = {
  response: <T>(data: T) => HapiRes;
  code: (code: number) => HapiRes;
};
