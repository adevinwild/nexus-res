import HttpResponseBase from '../core/HttpResponse';
import { HttpResponseWithDefaults } from '../core/interface';

/**
 * Class representing a premade HTTP 400 Bad Request response.
 * @extends HttpResponseBase
 * @class InternalServerError
 * @example
 * import { InternalServerError } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const internalServerError = new InternalServerError()
 *   res.status(internalServerError.statusCode).json(internalServerError);
 * };
 */
export class InternalServerError extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 500,
      message: 'Internal server error',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 501 Not Implemented response.
 * @extends HttpResponseBase
 * @class NotImplemented
 * @example
 * import { NotImplemented } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const notImplemented = new NotImplemented()
 *   res.status(notImplemented.statusCode).json(notImplemented);
 * };
 *
 */
export class NotImplemented extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 501,
      message: 'Not implemented',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 502 Bad Gateway response.
 * @extends HttpResponseBase
 * @class BadGateway
 * @example
 * import { BadGateway } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const badGateway = new BadGateway()
 *   res.status(badGateway.statusCode).json(badGateway);
 *
 */
export class BadGateway extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 502,
      message: 'Bad gateway',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 503 Service Unavailable response.
 * @extends HttpResponseBase
 * @class ServiceUnavailable
 * @example
 * import { ServiceUnavailable } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const serviceUnavailable = new ServiceUnavailable()
 *   res.status(serviceUnavailable.statusCode).json(serviceUnavailable);
 *
 */
export class ServiceUnavailable extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 503,
      message: 'Service unavailable',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 504 Gateway Timeout response.
 * @extends HttpResponseBase
 * @class GatewayTimeout
 * @example
 * import { GatewayTimeout } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const gatewayTimeout = new GatewayTimeout()
 *   res.status(gatewayTimeout.statusCode).json(gatewayTimeout);
 *
 */
export class GatewayTimeout extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 504,
      message: 'Gateway timeout',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 505 HTTP Version Not Supported response.
 * @extends HttpResponseBase
 * @class HttpVersionNotSupported
 * @example
 * import { HttpVersionNotSupported } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const httpVersionNotSupported = new HttpVersionNotSupported()
 *   res.status(httpVersionNotSupported.statusCode).json(httpVersionNotSupported);
 *
 */
export class HttpVersionNotSupported extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 505,
      message: 'HTTP version not supported',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 506 Variant Also Negotiates response.
 * @extends HttpResponseBase
 * @class VariantAlsoNegotiates
 * @example
 * import { VariantAlsoNegotiates } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const variantAlsoNegotiates = new VariantAlsoNegotiates()
 *   res.status(variantAlsoNegotiates.statusCode).json(variantAlsoNegotiates);
 *
 */
export class VariantAlsoNegotiates extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 506,
      message: 'Variant also negotiates',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 507 Insufficient Storage response.
 * @extends HttpResponseBase
 * @class InsufficientStorage
 * @example
 * import { InsufficientStorage } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const insufficientStorage = new InsufficientStorage()
 *   res.status(insufficientStorage.statusCode).json(insufficientStorage);
 *
 */
export class InsufficientStorage extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 507,
      message: 'Insufficient storage',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 508 Loop Detected response.
 * @extends HttpResponseBase
 * @class LoopDetected
 * @example
 * import { LoopDetected } from 'nexus-res';
 * export default async (req, res) => {
 *   const loopDetected = new LoopDetected()
 *   res.status(loopDetected.statusCode).json(loopDetected);
 *
 */
export class LoopDetected extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 508,
      message: 'Loop detected',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 510 Not Extended response.
 * @extends HttpResponseBase
 * @class NotExtended
 * @example
 * import { NotExtended } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const notExtended = new NotExtended()
 *   res.status(notExtended.statusCode).json(notExtended);
 *
 */
export class NotExtended extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 510,
      message: 'Not extended',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 511 Network Authentication Required response.
 * @extends HttpResponseBase
 * @class NetworkAuthenticationRequired
 * @example
 * import { NetworkAuthenticationRequired } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const networkAuthenticationRequired = new NetworkAuthenticationRequired()
 *   res.status(networkAuthenticationRequired.statusCode).json(networkAuthenticationRequired);
 *
 */
export class NetworkAuthenticationRequired extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 511,
      message: 'Network authentication required',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 520 Unknown Error response.
 * @extends HttpResponseBase
 * @class UnknownError
 * @example
 * import { UnknownError } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   const unknownError = new UnknownError()
 *   res.status(unknownError.statusCode).json(unknownError);
 *
 */
export class UnknownError extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 520,
      message: 'Unknown error',
      ...options,
    });
  }
}
