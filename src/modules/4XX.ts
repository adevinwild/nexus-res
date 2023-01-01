import HttpResponseBase from '../core/HttpResponse';
import { HttpResponseWithDefaults } from '../core/interface';

/**
 * Class representing a premade HTTP 400 Bad Request response.
 * @extends HttpResponseBase
 * @class BadRequest
 * @example
 * import { BadRequest } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(400).json(new BadRequest("Invalid request format.", "https://example.com/docs/bad-request", "#ref-123", { userId: 123 }));
 * };
 */
export class BadRequest extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 400,
      message: 'Bad Request',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 401 Unauthorized response.
 * @extends HttpResponseBase
 * @class Unauthorized
 * @example
 * import { Unauthorized } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(401).json(new Unauthorized("Invalid API key.", { userId: 123 }, "https://docs.myapi.com/errors/unauthorized", "#ref-123"));
 * };
 */
export class Unauthorized extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 401,
      message: 'Unauthorized',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 402 Payment Required response.
 * @extends HttpResponseBase
 * @class PaymentRequired
 * @example
 * import { PaymentRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(402).json(new PaymentRequired("API key has reached its monthly request limit.", { userId: 123 }, "https://docs.myapi.com/errors/payment-required", "#ref-123"));
 * };
 */
export class PaymentRequired extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 402,
      message: 'Payment Required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 403 Forbidden response.
 * @extends HttpResponseBase
 * @class Forbidden
 * @example
 * import { Forbidden } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(403).json(new Forbidden("You do not have permission to access this resource.", { userId: 123 }, "https://docs.myapi.com/errors/payment-required", "#ref-123"));
 * };
 */
export class Forbidden extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 403,
      message: 'Forbidden',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 404 Not Found response.
 * @extends HttpResponseBase
 * @class NotFound
 * @example
 * import { NotFound } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(404).json(new NotFound("The requested resource was not found.", { userId : 123 }, " https://docs.myapi.com/errors/not-found", "#ref-123"));
 * };
 */
export class NotFound extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 404,
      message: 'Not Found',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 405 Method Not Allowed response.
 * @extends HttpResponseBase
 * @class MethodNotAllowed
 * @example
 * import { MethodNotAllowed } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(405).json(new MethodNotAllowed("The requested method is not allowed.", { userId: 123 }, "https://docs.myapi.com/errors/method-not-allowed", "#ref-123"));
 * };
 *
 */
export class MethodNotAllowed extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 405,
      message: 'Method Not Allowed',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 406 Not Acceptable response.
 * @extends HttpResponseBase
 * @class NotAcceptable
 * @example
 * import { NotAcceptable } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(406).json(new NotAcceptable("The requested resource is not available in the requested format.", { userId: 123 }, "https://docs.myapi.com/errors/not-acceptable", "#ref-123"));
 * };
 *
 */

export class NotAcceptable extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 406,
      message: 'Not Acceptable',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 407 Proxy Authentication Required response.
 * @extends HttpResponseBase
 * @class ProxyAuthenticationRequired
 * @example
 * import { ProxyAuthenticationRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(407).json(new ProxyAuthenticationRequired("You must authenticate with a proxy server before accessing this resource.", { userId : 123 }, " https://docs.myapi.com/errors/proxy-authentication-required", "#ref-123"));
 * };
 *
 */
export class ProxyAuthenticationRequired extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 407,
      message: 'Proxy Authentication Required',
      ...options,
    });
  }
}

/**
 *  Class representing a premade HTTP 408 Request Timeout response.
 * @extends HttpResponseBase
 * @class RequestTimeout
 * @example
 * import { RequestTimeout } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(408).json(new RequestTimeout("The server timed out waiting for the request.", { userId: 123 }, "https://docs.myapi.com/errors/request-timeout", "#ref-123"));
 * };
 *
 */
export class RequestTimeout extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 408,
      message: 'Request Timeout',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 409 Conflict response.
 * @extends HttpResponseBase
 * @class Conflict
 * @example
 * import { Conflict } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(409).json(new Conflict("The request could not be completed due to a conflict with the current state of the resource.", { userId : 123 }, "https://docs.myapi.com/errors/conflict", "#ref-123"));
 * };
 *
 */
export class Conflict extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 409,
      message: 'Conflict',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 410 Gone response.
 * @extends HttpResponseBase
 * @class Gone
 * @example
 * import { Gone } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(410).json(new Gone("The requested resource is no longer available and will not be available again.", { userId:123 }, "https://docs.myapi.com/errors/gone", "#ref-123"));
 * };
 *
 */
export class Gone extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 410,
      message: 'Gone',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 411 Length Required response.
 * @extends HttpResponseBase
 * @class LengthRequired
 * @example
 * import { LengthRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(411).json(new LengthRequired("The request did not specify the length of its content, which is required by the requested resource.", { userId: 123 }, "https://docs.myapi.com/errors/length-required", "#ref-123"));
 * };
 *
 */
export class LengthRequired extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 411,
      message: 'Length Required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 412 Precondition Failed response.
 * @extends HttpResponseBase
 * @class PreconditionFailed
 * @example
 * import { PreconditionFailed } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(412).json(new PreconditionFailed("The server does not meet one of the preconditions that the requester put on the request.", { userId : 123 }, "https://docs.myapi.com/errors/precondition-failed", "#ref-123"));
 * };
 *
 */
export class PreconditionFailed extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 412,
      message: 'Precondition Failed',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 413 Payload Too Large response.
 * @extends HttpResponseBase
 * @class PayloadTooLarge
 * @example
 * import { PayloadTooLarge } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(413).json(new PayloadTooLarge("The request is larger than the server is willing or able to process.", { userId : 123 }, "https://docs.myapi.com/errors/payload-too-large", "#ref-123"));
 * };
 *
 */
export class PayloadTooLarge extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 413,
      message: 'Payload Too Large',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 414 URI Too Long response.
 * @extends HttpResponseBase
 * @class URITooLong
 * @example
 * import { URITooLong } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(414).json(new URITooLong("The URI provided was too long for the server to process.", { userId : 123 }, "https://docs.myapi.com/errors/uri-too-long", "#ref-123"));
 * };
 *
 */
export class URITooLong extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 414,
      message: 'URI Too Long',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 415 Unsupported Media Type response.
 * @extends HttpResponseBase
 * @class Unsupported
 * @example
 * import { Unsupported } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(415).json(new Unsupported("The request entity has a media type which the server or resource does not support.", { userId : 123 }, "https://docs.myapi.com/errors/unsupported", "#ref-123"));
 * };
 *
 */
export class Unsupported extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 415,
      message: 'Unsupported Media Type',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 416 Range Not Satisfiable response.
 * @extends HttpResponseBase
 * @class RangeNotSatisfiable
 * @example
 * import { RangeNotSatisfiable } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(416).json(new RangeNotSatisfiable("The client has asked for a portion of the file, but the server cannot supply that portion.", { userId : 123 }, "https://docs.myapi.com/errors/range-not-satisfiable", "#ref-123"));
 * };
 *
 */
export class RangeNotSatisfiable extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 416,
      message: 'Range Not Satisfiable',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 417 Expectation Failed response.
 * @extends HttpResponseBase
 * @class ExpectationFailed
 * @example
 * import { ExpectationFailed } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(417).json(new ExpectationFailed("The server cannot meet the requirements of the Expect request-header field.", { userId : 123 }, "https://docs.myapi.com/errors/expectation-failed", "#ref-123"));
 * };
 *
 */
export class ExpectationFailed extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 417,
      message: 'Expectation Failed',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 418 I'm a teapot response.
 * @extends HttpResponseBase
 * @class ImATeapot
 * @example
 * import { ImATeapot } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(418).json(new ImATeapot("The server refuses the attempt to brew coffee with a teapot. 🫖");
 * };
 *
 */
export class ImATeapot extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 418,
      message: "I'm a teapot",
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 421 Misdirected Request response.
 * @extends HttpResponseBase
 * @class MisdirectedRequest
 * @example
 * import { MisdirectedRequest } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(421).json(new MisdirectedRequest("The request was directed at a server that is not able to produce a response. (for example because of a connection reuse)", { userId : 123 },
 * "https://docs.myapi.com/errors/misdirected-request", "#ref-123"));
 * };
 *
 */
export class MisdirectedRequest extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 421,
      message: 'Misdirected Request',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 422 Unprocessable Entity response.
 * @extends HttpResponseBase
 * @class UnprocessableEntity
 * @example
 * import { UnprocessableEntity } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(422).json(new UnprocessableEntity("The request was well-formed but was unable to be followed due to semantic errors.", { userId : 123 },
 * "https://docs.myapi.com/errors/unprocessable-entity", "#ref-123"));
 * };
 *
 */
export class UnprocessableEntity extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 422,
      message: 'Unprocessable Entity',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 423 Locked response.
 * @extends HttpResponseBase
 * @class Locked
 * @example
 * import { Locked } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(423).json(new Locked("The resource that is being accessed is locked.", { userId : 123 },
 * "https://docs.myapi.com/errors/locked", "#ref-123"));
 * };
 *
 */
export class Locked extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 423,
      message: 'Locked',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 424 Failed Dependency response.
 * @extends HttpResponseBase
 * @class FailedDependency
 * @example
 * import { FailedDependency } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(424).json(new FailedDependency("The request failed due to failure of a previous request.", { userId : 123 },
 * "https://docs.myapi.com/errors/failed-dependency", "#ref-123"));
 * };
 *
 */
export class FailedDependency extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 424,
      message: 'Failed Dependency',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 425 Too Early response.
 * @extends HttpResponseBase
 * @class TooEarly
 * @example
 * import { TooEarly } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(425).json(new TooEarly("Indicates that the server is unwilling to risk processing a request that might be replayed.", { userId : 123 },
 * "https://docs.myapi.com/errors/too-early", "#ref-123"));
 *
 */
export class TooEarly extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 425,
      message: 'Too Early',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 426 Upgrade Required response.
 * @extends HttpResponseBase
 * @class UpgradeRequired
 * @example
 * import { UpgradeRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(426).json(new UpgradeRequired("The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.", { userId : 123 },
 * "https://docs.myapi.com/errors/upgrade-required", "#ref-123"));
 *
 */
export class UpgradeRequired extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 426,
      message: 'Upgrade Required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 428 Precondition Required response.
 * @extends HttpResponseBase
 * @class PreconditionRequired
 * @example
 * import { PreconditionRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(428).json(new PreconditionRequired("The origin server requires the request to be conditional.", { userId : 123 },
 * "https://docs.myapi.com/errors/precondition-required", "#ref-123"));
 *
 */
export class PreconditionRequired extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 428,
      message: 'Precondition Required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 429 Too Many Requests response.
 * @extends HttpResponseBase
 * @class TooManyRequests
 * @example
 * import { TooManyRequests } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(429).json(new TooManyRequests("The user has sent too many requests in a given amount of time.", { userId : 123 },
 * "https://docs.myapi.com/errors/too-many-requests", "#ref-123"));
 *
 */
export class TooManyRequests extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 429,
      message: 'Too Many Requests',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 431 Request Header Fields Too Large response.
 * @extends HttpResponseBase
 * @class RequestHeaderFieldsTooLarge
 * @example
 * import { RequestHeaderFieldsTooLarge } from 'nexus-res';
 * export default async (req, res) => {
 * res.status(431).json(new RequestHeaderFieldsTooLarge("The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.", { userId : 123 },
 * "https://docs.myapi.com/errors/request-header-fields-too-large", "#ref-123"));
 *
 */
export class RequestHeaderFieldsTooLarge extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 431,
      message: 'Request Header Fields Too Large',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 451 Unavailable For Legal Reasons response.
 * @extends HttpResponseBase
 * @class Unavailable
 * @example
 * import { UnavailableForLegalReasons } from 'nexus-res';
 *
 * export default async (req, res) => {
 * res.status(451).json(new UnavailableForLegalReasons("A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.", { userId : 123 },
 * "https://docs.myapi.com/errors/unavailable-for-legal-reasons", "#ref-123"));
 *
 */
export class UnavailableForLegalReasons extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 451,
      message: 'Unavailable For Legal Reasons',
      ...options,
    });
  }
}
