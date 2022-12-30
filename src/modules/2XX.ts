import HttpResponseBase from '../core/HttpResponse';

/**
 * Class representing a premade HTTP 200 OK response.
 * @extends HttpResponseBase
 * @class Ok
 * @example
 * import { Ok } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(200).json(new Ok("Everything is fine.", "https://example.com/docs/ok", "#ref-123"));
 * };
 */
export class Ok extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 200,
      message: 'OK',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}
/**
 * Class representing a premade HTTP 201 OK response.
 * @extends HttpResponseBase
 * @class Created
 * @example
 * import { Created } from 'nexus-res';
 *
 * export default async (req, res) => {
 *  res.status(201).json(new Created("User created!.", "https://example.com/docs/users", "#ref-123"));
 * };
 */
export class Created extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 201,
      message: 'Created',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 202 Accepted response.
 * @extends HttpResponseBase
 * @class Accepted
 * @example
 * import { Accepted } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(202).json(new Accepted("Request was accepted for processing.", "https://example.com/docs/accepted", "#ref-123"));
 * };
 */
export class Accepted extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 202,
      message: 'Accepted',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 203 Non-Authoritative Information response.
 * @extends HttpResponseBase
 * @class NonAuthoritativeInformation
 * @example
 * import { NonAuthoritativeInformation } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(203).json(new NonAuthoritativeInformation("Information may not be from the original source.", "https://example.com/docs/non-authoritative-information", "#ref-123"));
 * };
 */
export class NonAuthoritativeInformation extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 203,
      message: 'Non-Authoritative Information',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 204 No Content response.
 * @extends HttpResponseBase
 * @class NoContent
 * @example
 * import { NoContent } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(204).json(new NoContent("Request was successful, but there is no additional information to send back.", "https://example.com/docs/no-content", "#ref-123"));
 * };
 */
export class NoContent extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 204,
      message: 'No Content',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 205 Reset Content response.
 * @extends HttpResponseBase
 * @class ResetContent
 * @example
 * import { ResetContent } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(205).json(new ResetContent("Request was successful, but the client should reset the document view.", "https://example.com/docs/reset-content", "#ref-123"));
 * };
 */
export class ResetContent extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 205,
      message: 'Reset Content',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 206 Partial Content response.
 * @extends HttpResponseBase
 * @class PartialContent
 * @example
 * import { PartialContent } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(206).json(new PartialContent("Request was successful, and the response includes only a part of the resource.", "https://example.com/docs/partial-content", "#ref-123"));
 * };
 */
export default class PartialContent extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 206,
      message: 'Partial Content',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}

/**
 * Class representing a premade HTTP 207 Multi-Status response.
 * @extends HttpResponseBase
 * @class MultiStatus
 * @example
 * import { MultiStatus } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(207).json(new MultiStatus("Request was successful, and the response includes multiple statuses.", "https://example.com/docs/multi-status", "#ref-123"));
 * };
 */
export class MultiStatus extends HttpResponseBase {
  constructor(
    cause?: string,
    metadata?: any,
    reference?: string,
    requestId?: string
  ) {
    super({
      statusCode: 207,
      message: 'Multi-Status',
      cause,
      metadata,
      reference,
      requestId,
    });
  }
}
