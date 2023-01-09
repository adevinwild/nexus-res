import HttpResponseBase from '../core/HttpResponse';
import { HttpResponseWithDefaults } from '../core/interface';

/**
 * Class representing a premade HTTP 400 Bad Request response.
 * @<T> extends HttpResponseBase<T>
 * @class BadRequest
 * @example
 * import { BadRequest } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const badRequest = new BadRequest()
 *   res.status(badRequest.statusCode).json(badRequest);
 * };
 */
export class BadRequest<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 400,
      message: 'Bad Request',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 401 Unauthorized response.
 * @<T> extends HttpResponseBase<T>
 * @class Unauthorized
 * @example
 * import { Unauthorized } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const unauthorized = new Unauthorized()
 *   res.status(unauthorized.statusCode).json(unauthorized);
 * };
 */
export class Unauthorized<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 401,
      message: 'Unauthorized',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 402 Payment Required response.
 * @<T> extends HttpResponseBase<T>
 * @class PaymentRequired
 * @example
 * import { PaymentRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const paymentRequired = new PaymentRequired()
 *   res.status(paymentRequired.statusCode).json(paymentRequired);
 * };
 */
export class PaymentRequired<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 402,
      message: 'Payment Required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 403 Forbidden response.
 * @<T> extends HttpResponseBase<T>
 * @class Forbidden
 * @example
 * import { Forbidden } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const forbidden = new Forbidden()
 *   res.status(forbidden.statusCode).json(forbidden);
 * };
 */
export class Forbidden<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 403,
      message: 'Forbidden',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 404 Not Found response.
 * @<T> extends HttpResponseBase<T>
 * @class NotFound
 * @example
 * import { NotFound } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const notFound = new NotFound()
 *   res.status(notFound.statusCode).json(notFound);
 * };
 */
export class NotFound<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 404,
      message: 'Not Found',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 405 Method Not Allowed response.
 * @<T> extends HttpResponseBase<T>
 * @class MethodNotAllowed
 * @example
 * import { MethodNotAllowed } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const methodNotAllowed = new MethodNotAllowed()
 *   res.status(methodNotAllowed.statusCode).json(methodNotAllowed);
 * };
 *
 */
export class MethodNotAllowed<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 405,
      message: 'Method Not Allowed',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 406 Not Acceptable response.
 * @<T> extends HttpResponseBase<T>
 * @class NotAcceptable
 * @example
 * import { NotAcceptable } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const notAcceptable = new NotAcceptable()
 *   res.status(notAcceptable.statusCode).json(notAcceptable);
 * };
 *
 */

export class NotAcceptable<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 406,
      message: 'Not Acceptable',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 407 Proxy Authentication Required response.
 * @<T> extends HttpResponseBase<T>
 * @class ProxyAuthenticationRequired
 * @example
 * import { ProxyAuthenticationRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const proxyAuthenticationRequired = new ProxyAuthenticationRequired()
 *   res.status(proxyAuthenticationRequired.statusCode).json(proxyAuthenticationRequired);
 * };
 *
 */
export class ProxyAuthenticationRequired<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 407,
      message: 'Proxy Authentication Required',
      ...options,
    });
  }
}

/**
 *  Class representing a premade HTTP 408 Request Timeout response.
 * @<T> extends HttpResponseBase<T>
 * @class RequestTimeout
 * @example
 * import { RequestTimeout } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const requestTimeout = new RequestTimeout()
 *   res.status(requestTimeout.statusCode).json(requestTimeout);
 * };
 *
 */
export class RequestTimeout<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 408,
      message: 'Request Timeout',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 409 Conflict response.
 * @<T> extends HttpResponseBase<T>
 * @class Conflict
 * @example
 * import { Conflict } from 'nexus-res';
 *
 * export default async (req, res) => {
 *    const conflict = new Conflict()
 *    res.status(conflict.statusCode).json(conflict);
 * };
 *
 */
export class Conflict<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 409,
      message: 'Conflict',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 410 Gone response.
 * @<T> extends HttpResponseBase<T>
 * @class Gone
 * @example
 * import { Gone } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const gone = new Gone()
 *   res.status(gone.statusCode).json(gone);
 * };
 *
 */
export class Gone<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 410,
      message: 'Gone',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 411 Length Required response.
 * @<T> extends HttpResponseBase<T>
 * @class LengthRequired
 * @example
 * import { LengthRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const lengthRequired = new LengthRequired()
 *   res.status(lengthRequired.statusCode).json(lengthRequired);
 * };
 *
 */
export class LengthRequired<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 411,
      message: 'Length Required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 412 Precondition Failed response.
 * @<T> extends HttpResponseBase<T>
 * @class PreconditionFailed
 * @example
 * import { PreconditionFailed } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const preconditionFailed = new PreconditionFailed()
 *   res.status(preconditionFailed.statusCode).json(preconditionFailed);
 * };
 *
 */
export class PreconditionFailed<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 412,
      message: 'Precondition Failed',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 413 Payload Too Large response.
 * @<T> extends HttpResponseBase<T>
 * @class PayloadTooLarge
 * @example
 * import { PayloadTooLarge } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const payloadTooLarge = new PayloadTooLarge()
 *   res.status(payloadTooLarge.statusCode).json(payloadTooLarge);
 * };
 *
 */
export class PayloadTooLarge<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 413,
      message: 'Payload Too Large',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 414 URI Too Long response.
 * @<T> extends HttpResponseBase<T>
 * @class URITooLong
 * @example
 * import { URITooLong } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const uriTooLong = new URITooLong()
 *   res.status(uriTooLong.statusCode).json(uriTooLong);
 * };
 *
 */
export class URITooLong<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 414,
      message: 'URI Too Long',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 415 Unsupported Media Type response.
 * @<T> extends HttpResponseBase<T>
 * @class Unsupported
 * @example
 * import { Unsupported } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const unsupported = new Unsupported()
 *   res.status(unsupported.statusCode).json(unsupported);
 * };
 *
 */
export class Unsupported<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 415,
      message: 'Unsupported Media Type',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 416 Range Not Satisfiable response.
 * @<T> extends HttpResponseBase<T>
 * @class RangeNotSatisfiable
 * @example
 * import { RangeNotSatisfiable } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const rangeNotSatisfiable = new RangeNotSatisfiable()
 *   res.status(rangeNotSatisfiable.statusCode).json(rangeNotSatisfiable);
 * };
 *
 */
export class RangeNotSatisfiable<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 416,
      message: 'Range Not Satisfiable',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 417 Expectation Failed response.
 * @<T> extends HttpResponseBase<T>
 * @class ExpectationFailed
 * @example
 * import { ExpectationFailed } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const expectationFailed = new ExpectationFailed()
 *   res.status(expectationFailed.statusCode).json(expectationFailed);
 * };
 *
 */
export class ExpectationFailed<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 417,
      message: 'Expectation Failed',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 418 I'm a teapot response.
 * @<T> extends HttpResponseBase<T>
 * @class ImATeapot
 * @example
 * import { ImATeapot } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const imATeapot = new ImATeapot() 🫖
 *   res.status(imATeapot.statusCode).json(imATeapot);
 * };
 *
 */
export class ImATeapot<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 418,
      message: "I'm a teapot",
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 421 Misdirected Request response.
 * @<T> extends HttpResponseBase<T>
 * @class MisdirectedRequest
 * @example
 * import { MisdirectedRequest } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const misdirectedRequest = new MisdirectedRequest()
 *   res.status(misdirectedRequest.statusCode).json(misdirectedRequest);
 * };
 *
 */
export class MisdirectedRequest<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 421,
      message: 'Misdirected Request',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 422 Unprocessable Entity response.
 * @<T> extends HttpResponseBase<T>
 * @class UnprocessableEntity
 * @example
 * import { UnprocessableEntity } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const unprocessableEntity = new UnprocessableEntity()
 *   res.status(unprocessableEntity.statusCode).json(unprocessableEntity);
 * };
 *
 */
export class UnprocessableEntity<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 422,
      message: 'Unprocessable Entity',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 423 Locked response.
 * @<T> extends HttpResponseBase<T>
 * @class Locked
 * @example
 * import { Locked } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const locked = new Locked()
 *   res.status(locked.statusCode).json(locked);
 * };
 *
 */
export class Locked<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 423,
      message: 'Locked',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 424 Failed Dependency response.
 * @<T> extends HttpResponseBase<T>
 * @class FailedDependency
 * @example
 * import { FailedDependency } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const failedDependency = new FailedDependency()
 *   res.status(failedDependency.statusCode).json(failedDependency);
 * };
 *
 */
export class FailedDependency<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 424,
      message: 'Failed Dependency',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 425 Too Early response.
 * @<T> extends HttpResponseBase<T>
 * @class TooEarly
 * @example
 * import { TooEarly } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const tooEarly = new TooEarly()
 *   res.status(tooEarly.statusCode).json(tooEarly);
 *
 */
export class TooEarly<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 425,
      message: 'Too Early',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 426 Upgrade Required response.
 * @<T> extends HttpResponseBase<T>
 * @class UpgradeRequired
 * @example
 * import { UpgradeRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  const upgradeRequired = new UpgradeRequired()
 *   res.status(upgradeRequired.statusCode).json(upgradeRequired);
 *
 */
export class UpgradeRequired<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 426,
      message: 'Upgrade Required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 428 Precondition Required response.
 * @<T> extends HttpResponseBase<T>
 * @class PreconditionRequired
 * @example
 * import { PreconditionRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const preconditionRequired = new PreconditionRequired()
 *   res.status(preconditionRequired.statusCode).json(preconditionRequired);
 *
 */
export class PreconditionRequired<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 428,
      message: 'Precondition Required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 429 Too Many Requests response.
 * @<T> extends HttpResponseBase<T>
 * @class TooManyRequests
 * @example
 * import { TooManyRequests } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const tooManyRequests = new TooManyRequests()
 *   res.status(tooManyRequests.statusCode).json(tooManyRequests);
 *
 */
export class TooManyRequests<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 429,
      message: 'Too Many Requests',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 431 Request Header Fields Too Large response.
 * @<T> extends HttpResponseBase<T>
 * @class RequestHeaderFieldsTooLarge
 * @example
 * import { RequestHeaderFieldsTooLarge } from 'nexus-res';
 * export default async (req, res) => {
 *   const requestHeaderFieldsTooLarge = new RequestHeaderFieldsTooLarge()
 *   res.status(requestHeaderFieldsTooLarge.statusCode).json(requestHeaderFieldsTooLarge);
 *
 */
export class RequestHeaderFieldsTooLarge<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 431,
      message: 'Request Header Fields Too Large',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 451 Unavailable For Legal Reasons response.
 * @<T> extends HttpResponseBase<T>
 * @class Unavailable
 * @example
 * import { UnavailableForLegalReasons } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const unavailableForLegalReasons = new UnavailableForLegalReasons()
 *   res.status(unavailableForLegalReasons.statusCode).json(unavailableForLegalReasons);
 *
 */
export class UnavailableForLegalReasons<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 451,
      message: 'Unavailable For Legal Reasons',
      ...options,
    });
  }
}
