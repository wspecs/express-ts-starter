<!-- prettier-ignore-start -->
# express-ts-starter

Generate typescript express application
![npm](https://img.shields.io/npm/v/express-ts-starter.svg) ![license](https://img.shields.io/npm/l/express-ts-starter.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/express-ts-starter.svg)

![nodei.co](https://nodei.co/npm/express-ts-starter.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/express-ts-starter.svg)
![stars](https://img.shields.io/github/stars/wspecs/express-ts-starter.svg)
![forks](https://img.shields.io/github/forks/wspecs/express-ts-starter.svg)

![forks](https://img.shields.io/github/forks/wspecs/express-ts-starter.svg)

![](https://david-dm.org/wspecs/express-ts-starter/status.svg)
![](https://david-dm.org/wspecs/express-ts-starter/dev-status.svg)

## Features

- Generate typescript express application
- Support i18n

## Usage
```bash
Usage: express-ts-starter [options] [command]

Options:
  -h, --help  output usage information

Commands:
  start       Generate express application
```

## Sample

```typescript
// lib/routes/landing.ts
// ======
// package-dependency import *  from '@decorators/express';
import { Controller, Get, Response } from '@decorators/express';

@Controller('/')
export class LandingController {
  @Get('/')
  landing(@Response() res: any) {
    console.log();
    res.serve('landing', {
      greetings: res.__('greetings', { name: 'World' }),
      welcome: res.__('welcome')
    });
  }
}

// index.ts 
// ========
import { LandingController } from './lib/routes/landing';
import { BaseApplicationServer } from 'express-starter-config';

class ApplicationServer extends BaseApplicationServer {
  constructor() {
    super();
    this.addControllers(LandingController);
  }
}

// Start the application
new ApplicationServer().start();
```

## Install

```bash
npm install --save express-ts-starter
```

## Scripts

 - **npm run readme** : `node ./node_modules/.bin/node-readme`
 - **npm run build:minify** : `node dist/lib/minify.js --css --js --debug`
 - **npm run build** : `rm -rf dist && tsc && npm run readme`
 - **npm run prod** : `npm run build && node dist/index.js --instance prod`
 - **npm run dev** : `npm run build && node dist/index.js --instance dev --debug`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[@decorators/di](https://www.npmjs.com/package/@decorators/di) | ^1.0.2 | ✖
[@decorators/express](https://www.npmjs.com/package/@decorators/express) | ^2.3.0 | ✖
[args-finder](https://www.npmjs.com/package/args-finder) | 0.0.3 | ✖
[commander](https://www.npmjs.com/package/commander) | ^2.19.0 | ✖
[dot-object](https://www.npmjs.com/package/dot-object) | ^1.7.1 | ✖
[express-starter-config](https://www.npmjs.com/package/express-starter-config) | ^0.2.1 | ✖
[great-logs](https://www.npmjs.com/package/great-logs) | 0.0.4 | ✖
[prompts](https://www.npmjs.com/package/prompts) | ^2.0.1 | ✖
[shelljs](https://www.npmjs.com/package/shelljs) | ^0.8.3 | ✖
[walkdir](https://www.npmjs.com/package/walkdir) | 0.0.12 | ✖
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/express](https://www.npmjs.com/package/@types/express) | ^4.16.0 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.4 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Contributing

Please check the [Contributing Guidelines](contributing.md) for more details. Thanks!

## Author

[Wendly Saintil](https://twitter.com/wendlysaintil)

## License

[MIT](LICENSE)
<!-- prettier-ignore-end -->
