<p align="center">
  <img src="./assets/banner.png" width="512px">

</p>

<p align="center">
  <a href="https://github.com/adevinwild/nexus-res/actions/workflows/main.yml" title="CI">
    <img src="https://github.com/adevinwild/nexus-res/actions/workflows/main.yml/badge.svg?branch=main" />
  </a>
  <img src="https://img.shields.io/node/v/nexus-res">
  <img src="https://img.shields.io/npm/types/nexus-res">
  
</p>

<h2 align="center">📦 NexusRes</h2>
<p align="center">
  <code>NexusRes</code> is a lightweight library that <b>provides a structured and easy-to-use way to generate consistent and informative HTTP responses for your Node.js applications.
</p>

---

## 🚀 Features

- Contains all necessary HTTP response codes
- Lightweight and easy to use
- Written in TypeScript for added type safety and improved developer experience
- Compatible with Node >= 14

## 🤝 Contributing

We welcome contributions to NexusRes! If you'd like to contribute, please fork the repository and submit a pull request. Your changes will be reviewed by the maintainers before being merged.

## 💾 Installation

To install NexusRes, simply run the following command in your terminal:

```bash
npm install nexus-res
```

**Or with `yarn`**

```bash
yarn add nexus-res
```

## 💻 Usage

To use NexusRes in your Node.js application, import the desired response class and use it to generate an HTTP response:

```ts
import { Ok } from 'nexus-res';

export default async (req, res) => {
  const user = req.user;

  // 🎉 Create a new Ok response
  const ok = new Ok({
    // The cause of the OK response, add a custom message here
    cause: 'Everything is fine.',
    // Add metadata to your response
    metadata: user,
    // The URL of the documentation for this response.
    reference: 'https://example.com/docs/ok',
    // A request identifier for debugging purposes.
    requestId: '#ref-123',
  });

  res.status(ok.statusCode).json(ok);
};
```

## 💬 Sample response

```json
{
  "statusCode": 200,
  "message": "OK",
  "metadata": {
    "userId": 1,
    "username": "john_doe123"
  },
  "cause": "Everything is fine!",
  "reference": "https://example.com/docs/get-user",
  "requestId": "#ref-123"
}
```

## 📖 Documentation

The following HTTP status codes are supported by this library:

### 📍 1XX

- **100** Continue
- **101** SwitchingProtocols
- **102** Processing
- **103** EarlyHints

### 📍 2XX

- **200** OK
- **201** Created
- **202** Accepted
- **203** NonAuthoritativeInformation
- **204** NoContent
- **205** ResetContent
- **206** PartialContent
- **207** MultiStatus
- **208** AlreadyReported

### 📍 3XX

- **300** MultipleChoices
- **301** MovedPermanently
- **302** Found
- **303** SeeOther
- **304** NotModified
- **305** UseProxy
- **306** SwitchProxy
- **307** TemporaryRedirect
- **308** PermanentRedirect

### 📍 4XX

- **400** BadRequest
- **401** Unauthorized
- **402** PaymentRequired
- **403** Forbidden
- **404** NotFound
- **405** MethodNotAllowed
- **406** NotAcceptable
- **407** ProxyAuthenticationRequired
- **408** RequestTimeout
- **409** Conflict
- **410** Gone
- **411** LengthRequired
- **412** PreconditionFailed
- **413** PayloadTooLarge
- **414** URITooLong
- **415** Unsupported
- **416** RangeNotSatisfiable
- **417** ExpectationFailed
- **418** ImATeapot
- **421** MisdirectedRequest
- **422** UnprocessableEntity
- **423** Locked
- **424** FailedDependency
- **425** TooEarly
- **426** UpgradeRequired
- **428** PreconditionRequired
- **429** TooManyRequests
- **431** RequestHeaderFieldsTooLarge
- **451** UnavailableForLegalReasons

### 📍 **5XX**

- **500** InternalServerError
- **501** NotImplemented
- **502** BadGateway
- **503** ServiceUnavailable
- **504** GatewayTimeout
- **505** HttpVersionNotSupported
- **506** VariantAlsoNegotiates
- **507** InsufficientStorage
- **508** LoopDetected
- **510** NotExtended
- **511** NetworkAuthenticationRequired
- **520** UnknownError
