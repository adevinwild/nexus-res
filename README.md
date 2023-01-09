<p align="center">
  <a href="https://www.npmjs.com/package/nexus-res">
    <img alt="nexus-res" src="./assets/logo.png" width="192" />
  </a>
</p>
<h1 align="center">
  nexus-res
</h1>
<br />
<p align="center" style="max-width:50%;margin:0 auto;">
  <code>nexus-res</code> is a lightweight and dependency-free library that provides a <b>structured</b> and <b>easy-to-use</b> way to generate consistent and informative HTTP responses for your Node.js applications.
</p>
<br />
<p align="center">
  <a href="https://github.com/adevinwild/nexus-res/actions/workflows/main.yml" title="CI">
    <img src="https://github.com/adevinwild/nexus-res/actions/workflows/main.yml/badge.svg?branch=main" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="nexus-res is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
</p>

---

<br />

## Main features

- 📦 Contains all necessary HTTP response codes
- 🌳 Tree-shakeable
- 🤌 Dependency-free
- 🪶 Lightweight
- 🔵 Written in TypeScript
- 🤖 Compatible with `node >= 14`
- 🛠 Configurable

<br />

## Installation

To install NexusRes, simply run the following command in your terminal:

```bash
npm install nexus-res
```

**Or with `yarn`**

```bash
yarn add nexus-res
```

<br />

## Usage

To use NexusRes in your Node.js application, import the desired response class and use it to generate an HTTP response:

**Example with an Express.js like route**

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

  return ok.send(res);
  // ☝️ This will send the response with the appropriate status code, reducing boilerplate code
};
```

<br />

## 🤝 Contributing

We welcome contributions to `nexus-res`! If you'd like to contribute, please fork the repository and submit a pull request. Your changes will be reviewed by the maintainers before being merged.
