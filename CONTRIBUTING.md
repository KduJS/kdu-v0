# Kdu.js Contributing Guide

Hi! I’m really excited that you are interested in contributing to Kdu.js. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

## Issue Reporting Guidelines

- The issue list of this repo is **exclusively** for bug reports and feature requests.

- Try to search for your issue, it may have already been answered or even fixed in the development branch.

- Check if the issue is reproducible with the latest stable version of Kdu. If you are using a pre-release, please indicate the specific version you are using.

- It is **required** that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged. If an issue labeled "need repro" receives no further input from the issue author for more than 5 days, it will be closed.

- It is recommended that you make a JSFiddle to demonstrate your issue.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

## Pull Request Guidelines

- Checkout a topic branch from `dev` and merge back against `dev`.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- Squash the commit if there are too many small ones.

- Follow the [code style](#code-style).

- Make sure the default grunt task passes. (see [development setup](#development-setup))

- If adding new feature:
    - Add accompanying test case.
    - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
    - Provide detailed description of the bug in the PR. Live demo preferred.
    - Add appropriate test coverage if applicable.

## Code Style

- [No semicolons unless necessary](http://inimino.org/~inimino/blog/javascript_semicolons).
- Follow JSDoc.
- 2 spaces indentation.
- multiple var declarations.
- align equal signs where appropriate.
- Return early.
- 1 space after `function`
- 1 space between arguments, but not between parentheses.
- When in doubt, read the source code.
- Break long ternary conditionals like this:

  ``` js
  var a = superLongConditionalStatement
    ? 'yep'
    : 'nope'
  ```

## Development Setup

You will need [Node.js](http://nodejs.org) & [Grunt](http://gruntjs.com).

``` bash
# npm install -g grunt-cli
$ npm install
```

To watch and auto-build `dist/kdu.js` during development:

``` bash
$ npm run dev
```

To lint:

``` bash
$ grunt eslint
```

To build:

``` bash
$ grunt build
```

To test:

``` bash
$ grunt test
```

The default task (by simply running `grunt`) will do the following: lint -> build -> unit tests -> e2e tests. It is required to have this pass successfully for a PR to be considered.

The unit tests are written with Jasmine and run with Karma. The e2e tests are written for and run with CasperJS.
