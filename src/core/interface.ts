/**
 * Interface for a premade HTTP response.
 * @interface IHttpResponse<T>
 */
export interface IHttpResponse<T> {
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
}

export type HttpResponseWithDefaults<T> = Omit<
  IHttpResponse<T>,
  'statusCode' | 'message'
>;

export type ConfigFile = {
  serverType: 'http' | 'express' | 'fastify' | 'koa' | 'hapi';
};

export type ExpressRes = {
  status: (code: number) => ExpressRes;
  json: (data: any) => any;
};

export type HttpRes = {
  writeHead: (code: number, headers: Record<string, string>) => HttpRes;
  end: (data: any) => any;
};

export type FastifyRes = {
  code: (code: number) => FastifyRes;
  send: (data: any) => any;
};

export type KoaRes = {
  status: number;
  body: any;
};

export type HapiRes = {
  response: (data: any) => HapiRes;
  code: (code: number) => HapiRes;
};
