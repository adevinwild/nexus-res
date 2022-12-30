import HttpResponseBase from '../core/HttpResponse';

/**
 * Class representing a premade HTTP 300 Multiple Choices response.
 * @extends HttpResponseBase
 * @class MultipleChoices
 * @example
 * import { MultipleChoices } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(300).json(new MultipleChoices("The request has multiple options for the response.", "https://example.com/docs/multiple-choices", "#ref-123"));
 * };
 */
export class MultipleChoices extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 300,
      message: 'Multiple Choices',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 301 Moved Permanently response.
 * @extends HttpResponseBase
 * @class MovedPermanently
 * @example
 * import { MovedPermanently } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(301).json(new MovedPermanently("The request has been permanently moved to a new location.", "https://example.com/docs/moved-permanently", "#ref-123"));
 * };
 */
export class MovedPermanently extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 301,
      message: 'Moved Permanently',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 302 Found response.
 * @extends HttpResponseBase
 * @class Found
 * @example
 * import { Found } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(302).json(new Found("The request has been temporarily moved to a new location.", "https://example.com/docs/found", "#ref-123"));
 * };
 */
export class Found extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 302,
      message: 'Found',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 303 See Other response.
 * @extends HttpResponseBase
 * @class SeeOther
 * @example
 * import { SeeOther } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(303).json(new SeeOther("The request should be redirected to a different location.", "https://example.com/docs/see-other", "#ref-123"));
 * };
 */
export class SeeOther extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 303,
      message: 'See Other',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 304 Not Modified response.
 * @extends HttpResponseBase
 * @class NotModified
 * @example
 * import { NotModified } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(304).json(new NotModified("The request has not been modified since the last request.", "https://example.com/docs/not-modified", "#ref-123"));
 * };
 */
export class NotModified extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 304,
      message: 'Not Modified',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 305 Use Proxy response.
 * @extends HttpResponseBase
 * @class UseProxy
 * @example
 * import { UseProxy } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(305).json(new UseProxy("The request must be made through a proxy.", "https://example.com/docs/use-proxy", "#ref-123"));
 * };
 */
export class UseProxy extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 305,
      message: 'Use Proxy',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}
/**
 * Class representing a premade HTTP 307 Temporary Redirect response.
 * @extends HttpResponseBase
 * @class TemporaryRedirect
 * @example
 * import { TemporaryRedirect } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(307).json(new TemporaryRedirect("The request has been temporarily moved to a new location.", "https://example.com/docs/temporary-redirect", "#ref-123"));
 * };
 */
export class TemporaryRedirect extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 307,
      message: 'Temporary Redirect',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 308 Permanent Redirect response.
 * @extends HttpResponseBase
 * @class PermanentRedirect
 * @example
 * import { PermanentRedirect } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(308).json(new PermanentRedirect("The request has been permanently moved to a new location.", "https://example.com/docs/permanent-redirect", "#ref-123"));
 * };
 */
export class PermanentRedirect extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 308,
      message: 'Permanent Redirect',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 310 Too Many Redirects response.
 * @extends HttpResponseBase
 * @class TooManyRedirects
 * @example
 * import { TooManyRedirects } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(310).json(new TooManyRedirects("The request has been redirected too many times.", "https://example.com/docs/too-many-redirects", "#ref-123"));
 * };
 */
export class TooManyRedirects extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 310,
      message: 'Too Many Redirects',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}
