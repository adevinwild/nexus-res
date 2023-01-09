import HttpResponseBase from '../core/HttpResponse';
import { HttpResponseWithDefaults } from '../core/interface';
/**
 * Class representing a premade HTTP 100 Continue response.
 * @<T> extends HttpResponseBase<T>
 * @class Continue
 */
export class Continue<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 100,
      message: 'Continue',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 101 Switching Protocols response.
 * @<T> extends HttpResponseBase<T>
 * @class SwitchingProtocols
 */
export class SwitchingProtocols<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 101,
      message: 'Switching Protocols',
      ...options,
    });
  }
}

/**
 * Class representing a premade HTTP 102 Processing response.
 * @<T> extends HttpResponseBase<T>
 * @class Processing
 */
export class Processing<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 102,
      message: 'Processing',
      ...options,
    });
  }
}
/**
 * Class representing a premade HTTP 103 Early Hints response.
 * @<T> extends HttpResponseBase<T>
 * @class EarlyHints
 */
export class EarlyHints<T> extends HttpResponseBase<T> {
  constructor(options?: HttpResponseWithDefaults<T>) {
    super({
      statusCode: 103,
      message: 'Early Hints',
      ...options,
    });
  }
}
