import HttpResponseBase from '../core/HttpResponse';

/**
 * Class representing a premade HTTP 400 Bad Request response.
 * @extends HttpResponseBase
 * @class InternalServerError
 * @example
 * import { InternalServerError } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(500).json(new InternalServerError("An error has occured.", { userId: 123 }, "https://example.com/docs/internal-server-error", "#ref-123"));
 * };
 */
export class InternalServerError extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 500,
      message: 'Internal server error',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 *  res.status(501).json(new NotImplemented("The server does not support the functionality required to fulfill the request.", { userId : 123 }, "https://example.com/docs/not-implemented", "#ref-123"));
 * };
 *
 */
export class NotImplemented extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 501,
      message: 'Not implemented',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(502).json(new BadGateway("The server, while acting as a gateway or proxy, received an invalid response from the upstream server.", { userId :
 * 123 }, "https://example.com/docs/bad-gateway", "#ref-123"));
 *
 */
export class BadGateway extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 502,
      message: 'Bad gateway',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(503).json(new ServiceUnavailable("The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.",
 * { userId : 123 }, "https://example.com/docs/service-unavailable", "#ref-123"));
 *
 */
export class ServiceUnavailable extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 503,
      message: 'Service unavailable',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(504).json(new GatewayTimeout("The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.",
 * { userId : 123 }, "https://example.com/docs/gateway-timeout", "#ref-123"));
 *
 */
export class GatewayTimeout extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 504,
      message: 'Gateway timeout',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(505).json(new HttpVersionNotSupported("The server does not support, or refuses to support, the major version of HTTP that was used in the request message.",
 * { userId : 123 }, "https://example.com/docs/http-version-not-supported", "#ref-123"));
 *
 */
export class HttpVersionNotSupported extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 505,
      message: 'HTTP version not supported',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(506).json(new VariantAlsoNegotiates("The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.",
 * { userId : 123 }, "https://example.com/docs/variant-also-negotiates", "#ref-123"));
 *
 */
export class VariantAlsoNegotiates extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 506,
      message: 'Variant also negotiates',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(507).json(new InsufficientStorage("The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
 * { userId : 123 }, "https://example.com/docs/insufficient-storage", "#ref-123"));
 *
 */
export class InsufficientStorage extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 507,
      message: 'Insufficient storage',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(508).json(new LoopDetected("The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.",
 * { userId : 123 }, "https://example.com/docs/loop-detected", "#ref-123"));
 *
 */
export class LoopDetected extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 508,
      message: 'Loop detected',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(510).json(new NotExtended("Further extensions to the request are required for the server to fulfil it.",
 * { userId : 123 }, "https://example.com/docs/not-extended", "#ref-123"));
 *
 */
export class NotExtended extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 510,
      message: 'Not extended',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(511).json(new NetworkAuthenticationRequired("The client needs to authenticate to gain network access.",
 * { userId : 123 }, "https://example.com/docs/network-authentication-required", "#ref-123"));
 *
 */
export class NetworkAuthenticationRequired extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 511,
      message: 'Network authentication required',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
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
 * res.status(520).json(new UnknownError("The 520 error is used as a "catch-all response for when the origin server returns something unexpected",
 * { userId : 123 }, "https://example.com/docs/unknown-error", "#ref-123"));
 *
 */
export class UnknownError extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 520,
      message: 'Unknown error',
      cause: cause,
      metadata: metadata,
      reference: reference,
      requestId: requestId,
    });
  }
}
