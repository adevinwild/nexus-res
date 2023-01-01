import HttpResponseBase from '../core/HttpResponse';
import { HttpResponseWithDefaults } from '../core/interface';
/**
 * Class representing a premade HTTP 100 Continue response.
 * @extends HttpResponseBase
 * @class Continue
 * @example
 * import { Continue } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(100).json(new Continue("The client should continue with its request.", "https://example.com/docs/continue", "#ref-123"));
 * };
 */
export class Continue extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 100,
      message: 'Continue',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 101 Switching Protocols response.
 * @extends HttpResponseBase
 * @class SwitchingProtocols
 * @example
 * import { SwitchingProtocols } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(101).json(new SwitchingProtocols("The server is switching to a new protocol.", "https://example.com/docs/switching-protocols", "#ref-123"));
 * };
 */
export class SwitchingProtocols extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 101,
      message: 'Switching Protocols',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 102 Processing response.
 * @extends HttpResponseBase
 * @class Processing
 * @example
 * import { Processing } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(102).json(new Processing("The server is still processing the request.", "https://example.com/docs/processing", "#ref-123"));
 * };
 */
export class Processing extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 102,
      message: 'Processing',
      ...options,
    });
  }
}
/**
 * Class representing a premade HTTP 103 Early Hints response.
 * @extends HttpResponseBase
 * @class EarlyHints
 * @example
 * import { EarlyHints } from 'nexus-res';
 *
 * export default async (req, res) => {
 *   res.status(103).json(new EarlyHints("The server is providing early hints about the response.", "https://example.com/docs/early-hints", "#ref-123"));
 * };
 */
export class EarlyHints extends HttpResponseBase {
  constructor(options?: HttpResponseWithDefaults) {
    super({
      statusCode: 103,
      message: 'Early Hints',
      ...options,
    });
  }
}
