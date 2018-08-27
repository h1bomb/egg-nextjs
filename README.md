# egg-nextjs

Next.js plugin for Egg.js

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/egg-nextjs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-nextjs
[travis-image]: https://travis-ci.org/h1bomb/egg-nextjs.svg?branch=master
[travis-url]: https://travis-ci.org/h1bomb/egg-nextjs
[codecov-image]: https://img.shields.io/codecov/c/github/h1bomb/egg-nextjs.svg?style=flat-square
[codecov-url]: https://codecov.io/github/h1bomb/egg-nextjs?branch=master
[david-image]: https://img.shields.io/david/h1bomb/egg-nextjs.svg?style=flat-square
[david-url]: https://david-dm.org/h1bomb/egg-nextjs
[snyk-image]: https://snyk.io/test/npm/egg-nextjs/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nextjs



## Install

```bash
$ npm i egg-nextjs --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.nextjs = {
  enable: true,
  package: 'egg-nextjs',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.nextjs = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
