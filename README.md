<p align="center" >
  <a href="https://www.npmjs.com/package/nexus-res">
    <img alt="nexus-res" src="./.r/banner.png" width="100%"  />
  </a>
</p>
<h1 align="center">
  nexus-res
</h1>
<br />
<p align="center" style="max-width:50%;margin:0 auto;">
  <kbd>nexus-res</kbd> is a lightweight and dependency-free library that provides a <b>structured</b> and <b>easy-to-use</b> way to generate consistent and informative HTTP responses for your Node.js applications.
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

- 📦 Contains all necessary HTTP response codes (1XX, 2XX, 3XX, 4XX , 5XX)
- 🌳 Tree-shakeable
- 🤌 Dependency-free
- 🪶 Lightweight
- 🔵 Written in TypeScript
- 🤖 Compatible with `node >= 14`
- 🛠 Configurable

<br />

## Installation 💾

To install <kbd>nexus-res</kbd>, simply run the following command in your terminal:

```bash
npm install nexus-res
```

**Or with `yarn`**

```bash
yarn add nexus-res
```

<br />

## Usage 📖

To use <kbd>nexus-res</kbd> in your Node.js application, import the desired response class and use it to generate an HTTP response:

**Example with an Express.js like route**

```ts
import { Ok } from 'nexus-res';

export default async (req, res) => {
  const user = req.user;

  // 🎉 Create a new Ok response
  const ok = new Ok({
    // The cause of the OK response, add a custom message here (optional)
    cause: 'Everything is fine.',
    // Add metadata to your response (optional)
    metadata: user,
    // The URL of the documentation for this response. (optional)
    reference: 'https://example.com/docs/ok',
    // A request identifier for debugging purposes. (optional)
    requestId: '#ref-123',
  });

  await ok.send(res);
  // ☝️ This will send the response with the appropriate status code based on your config
};
```

<br />

## 📖 Documentation

## You access the documentation [by clicking here](https://github.com/adevinwild/nexus-res/wiki/Wiki-nexus-res) 👈
