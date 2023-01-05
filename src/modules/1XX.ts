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
 *   const continue = new Continue()
 *   res.status(continue.statusCode).json(continue);
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
 *   const switchingProtocols = new SwitchingProtocols()
 *   res.status(switchingProtocols.statusCode).json(switchingProtocols);
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
 *   const processing = new Processing()
 *   res.status(processing.statusCode).json(processing);
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
 *  const earlyHints = new EarlyHints()
 *  res.status(earlyHints.statusCode).json(earlyHints);
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
