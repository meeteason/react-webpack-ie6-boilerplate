React(Anujs)-webpack-boilerplate
---

A simple Webpack boilerplate with Anujs.

## Features

* Theoretically [Polyfill](https://github.com/RubyLouvre/anu/blob/master/lib/polyfill.js) for IE6+ support !
* Multiple pages support!
* [Webpack](https://github.com/webpack/webpack) 1.13.0 based
* es3ifyPlugin based (good for sourcemap)
* React Router 2.3.0 support
* JSX support
* LCSS support
* [Babel](https://github.com/babel/babel) with [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
* Precommit hooks:
    * StyleLint with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) rules
    * ESLint with [eslint-config-standard](https://github.com/standard/eslint-config-standard) rules
    * Automatically fix code style using [Postcss](https://github.com/postcss/postcss)

## Usage

* Install:
    `npm install`

* Run dev server:
    `npm run dev`

* Run IE dev server:
   `npm run iedev`

* Create page:
   `npm run createpage -- --n='your page name'`

* Build:
    `npm run build`