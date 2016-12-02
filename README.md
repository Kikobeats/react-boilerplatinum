# react-boilerplatinum

![Last version](https://img.shields.io/github/tag/Kikobeats/react-boilerplatinum.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/react-boilerplatinum/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/react-boilerplatinum)
[![Dependency status](http://img.shields.io/david/Kikobeats/react-boilerplatinum.svg?style=flat-square)](https://david-dm.org/Kikobeats/react-boilerplatinum)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/react-boilerplatinum.svg?style=flat-square)](https://david-dm.org/Kikobeats/react-boilerplatinum#info=devDependencies)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)
> A Platinum React Boilerplate.

The premise of this scaffold is to provide both the best production build possible and the best development experience.
In **development**, this configuration:

- Uses [standard](https://github.com/feross/standard) as linter.
- Uses [BrowserSync](https://www.browsersync.io) for device synchronization
- Transpiles JavaScript using [Babel](https://babeljs.io) and latest preset.
- Transpiles stylesheets using [PostCSS](http://postcss.org).
- Allows to load `node_modules` as CSS `@imports`.
- Allows live edition using HMR for JS & CSS.
- Provides full screen console error feedback.
- Autogenerates HTML main file.

But also, in **production**:

- Minifies JS, CSS & HTML.
- Splits final JS build into `vendor` and `main`.
- Adds autoprefix CSS vendor.
- Extracts fonts or images which size is `>10kb`.
- Removes unused CSS using [PurifyCSS](https://github.com/PurifyCSS/purifycss).

It's inspired by [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate).

## License

MIT © [Kiko Beats](https://github.com/kikobeats).
