<p align="center">
<img src="./assets/banner.png" width="50%">
</p>

<h1 align="center">📦 NexusRes</h1>

**NexusRes** is a lightweight library that provides premade HTTP response codes (e.g. `Ok`, `Created`, `Unauthorized`) for use in Node.js applications. It is written in TypeScript and has zero dependencies.

## ⚡️ Features

- Contains all necessary HTTP response codes
- Lightweight and easy to use
- Written in TypeScript for added type safety and improved developer experience
- Compatible with all versions of Node.js

## 🤝 Contributing

We welcome contributions to NexusRes! If you'd like to contribute, please fork the repository and submit a pull request. Your changes will be reviewed by the maintainers before being merged.

## 💾 Installation

To install NexusRes, simply run the following command in your terminal:

```bash
npm install nexus-res
```

## 💻 Usage

To use NexusRes in your Node.js application, import the desired response class and use it to generate an HTTP response:

```ts
import { Ok } from 'nexus-res';

export default async (req, res) => {
  res
    .status(200)
    .json(
      new Ok('Everything is fine.', 'https://example.com/docs/ok', '#ref-123')
    );
};
```

This will generate an HTTP response with a status code of 200 and a message of "OK".

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
