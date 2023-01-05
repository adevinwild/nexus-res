import HttpResponseBase from '../core/HttpResponse';
import { HttpResponseWithDefaults } from '../core/interface';

/**
 * Class representing a premade HTTP 300 Multiple Choices response.
 * @extends HttpResponseBase
 * @class MultipleChoices
 * @example
 * import { MultipleChoices } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const multipleChoices = new MultipleChoices()
 *   res.status(multipleChoices.statusCode).json(multipleChoices);
 * };
 */
export class MultipleChoices extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 300,
      message: 'Multiple Choices',
      ...options,
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
 *   const movedPermanently = new MovedPermanently()
 *   res.status(movedPermanently.statusCode).json(movedPermanently);
 * };
 */
export class MovedPermanently extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 301,
      message: 'Moved Permanently',
      ...options,
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
 *   const found = new Found()
 *   res.status(found.statusCode).json(found);
 * };
 */
export class Found extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 302,
      message: 'Found',
      ...options,
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
 *   const seeOther = new SeeOther()
 *   res.status(seeOther.statusCode).json(seeOther);
 * };
 */
export class SeeOther extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 303,
      message: 'See Other',
      ...options,
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
 *   const notModified = new NotModified()
 *   res.status(notModified.statusCode).json(notModified);
 * };
 */
export class NotModified extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 304,
      message: 'Not Modified',
      ...options,
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
 *   const useProxy = new UseProxy()
 *   res.status(useProxy.statusCode).json(useProxy);
 * };
 */
export class UseProxy extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 305,
      message: 'Use Proxy',
      ...options,
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
 *   const temporaryRedirect = new TemporaryRedirect()
 *   res.status(temporaryRedirect.statusCode).json(temporaryRedirect);
 * };
 */
export class TemporaryRedirect extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 307,
      message: 'Temporary Redirect',
      ...options,
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
 *   const permanentRedirect = new PermanentRedirect()
 *   res.status(permanentRedirect.statusCode).json(permanentRedirect);
 * };
 */
export class PermanentRedirect extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 308,
      message: 'Permanent Redirect',
      ...options,
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
 *   const tooManyRedirects = new TooManyRedirects()
 *   res.status(tooManyRedirects.statusCode).json(tooManyRedirects);
 * };
 */
export class TooManyRedirects extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 310,
      message: 'Too Many Redirects',
      ...options,
    });
  }
}
