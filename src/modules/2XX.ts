import HttpResponseBase from '../core/HttpResponse';
import { HttpResponseWithDefaults } from '../core/interface';

/**
 * Class representing a premade HTTP 200 OK response.
 * @<T> extends HttpResponseBase<T>
 * @class Ok
 */
export class Ok<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 200,
      message: 'OK',
      ...options,
    });
  }
}
/**
 * Class representing a premade HTTP 201 OK response.
 * @<T> extends HttpResponseBase<T>
 * @class Created
 */
export class Created<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 201,
      message: 'Created',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 202 Accepted response.
 * @extends HttpResponseBase<T>
 * @class Accepted
 */
export class Accepted<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 202,
      message: 'Accepted',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 203 Non-Authoritative Information response.
 * @<T> extends HttpResponseBase<T>
 * @class NonAuthoritativeInformation
 */
export class NonAuthoritativeInformation<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 203,
      message: 'Non-Authoritative Information',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 204 No Content response.
 * @<T> extends HttpResponseBase<T>
 * @class NoContent
 * @example
 * import { NoContent } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const noContent = new NoContent()
 *   res.status(noContent.statusCode).json(noContent);
 * };
 */
export class NoContent<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 204,
      message: 'No Content',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 205 Reset Content response.
 * @<T> extends HttpResponseBase<T>
 * @class ResetContent
 * @example
 * import { ResetContent } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const resetContent = new ResetContent()
 *   res.status(resetContent.statusCode).json(resetContent);
 * };
 */
export class ResetContent<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 205,
      message: 'Reset Content',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 206 Partial Content response.
 * @<T> extends HttpResponseBase<T>
 * @class PartialContent
 * @example
 * import { PartialContent } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const partialContent = new PartialContent()
 *   res.status(partialContent.statusCode).json(partialContent);
 * };
 */
export default class PartialContent<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 206,
      message: 'Partial Content',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 207 Multi-Status response.
 * @<T> extends HttpResponseBase<T>
 * @class MultiStatus
 * @example
 * import { MultiStatus } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const multiStatus = new MultiStatus()
 *   res.status(multiStatus.statusCode).json(multiStatus);
 * };
 */
export class MultiStatus<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 207,
      message: 'Multi-Status',
      ...options,
    });
  }
}
