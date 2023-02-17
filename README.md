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
  <a href="https://github.com/adevinwild/nexus-res/actions/workflows/test.yml" title="UNIT TESTS">
    <img src="https://github.com/adevinwild/nexus-res/actions/workflows/test.yml/badge.svg?branch=main" alt="nexus-res units tests" />
  </a>

  <a href="https://www.npmjs.com/package/nexus-res" title="VERSION">
    <img src="https://img.shields.io/npm/v/nexus-res" alt="nexus-res version" />
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

## Configuration ⚙️

<kbd>nexus-res</kbd> can be configured to match your server environment.
You can configure the following properties for now inside the <kbd>package.json</kbd> :

> By default the serverType is set to "express", this means that the `send` function will use the `res.json` method

```json
{
  "serverType": "express" // | "fastify" | "koa" | "hapi"
}
```

## Usage 📖

To use <kbd>nexus-res</kbd> in your Node.js application, import the desired response class and use it to generate an HTTP response:

**Example with an Express.js like route (JS)**

```js
const { Ok } = require('nexus-res');

export default async (req, res) => {
  const user = req.user;

  // 🎉 Create a new Ok response with the new version
  return Ok({
    metadata: user,
  }).send(res);
};
```

**Example with an Express.js like route (TS)**

```ts
import { Ok } from 'nexus-res';
import { User } from './types';

export default async (req, res) => {
  const user: User = req.user;

  // 🎉 Create a new Ok response with the new version
  return Ok<User>({
    metadata: user, // 👈 The type of the metadata is inferred from the generic type
  }).send(res);
};
```

<br />

## 📖 Documentation (WIP)

## You access the documentation [by clicking here](https://github.com/adevinwild/nexus-res/wiki/Wiki-nexus-res) 👈
