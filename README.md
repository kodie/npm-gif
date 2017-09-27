# npm-gif
[![npm package version](https://img.shields.io/npm/v/npm-gif.svg?style=flat-square)](https://www.npmjs.com/package/npm-gif) [![Travis build status](https://img.shields.io/travis/kodie/npm-gif.svg?style=flat-square)](https://travis-ci.org/kodie/npm-gif) [![npm package downloads](https://img.shields.io/npm/dt/npm-gif.svg?style=flat-square)](https://www.npmjs.com/package/npm-gif) [![code style](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://github.com/standard/standard) [![license](https://img.shields.io/github/license/kodie/npm-gif.svg?style=flat-square)](LICENSE.md)

![](https://raw.githubusercontent.com/kodie/npm-gif/master/preview.gif?raw=true)

Replace NPM install's progress bar with a GIF!

*Currently only supported on [iTerm >=3](https://www.iterm2.com/downloads.html).*

**NOTE: This package should be considered experimental.**

## Installation
```shell
npm install --global npm-gif
```

### Bonus Points
Add this line to your `~/.bash_profile`, `~/.bashrc`, or `~/.zshrc` file so that you can experience awesomeness with the `npm install` command:

```
alias npm=npm-gif
```

## Configure
You can change the loading GIF by setting the `NPM_GIF` environment variable to a file path or URL.

## How?
When npm-gif is first ran, it checks to see if it was passed the `install` or `i` arguments indicating that the user wishes to install an npm package. If neither of those arguments were passed, it simply spawns a new process of npm, passing the supplied arguments and options to it. If we are dealing with an install, it pretends that we have already required the [gauge](https://www.npmjs.com/package/gauge) package but really, using [mock-require](https://www.npmjs.com/package/mock-require), we have required [gauge-gif.js](gauge-gif.js) which is just [progress-img](https://www.npmjs.com/package/progress-img) pretending to be gauge. We then require your local version of npm using [global-npm](https://www.npmjs.com/package/global-npm) (which won't reload gauge) and then use it's internal functions to run the install command, passing arguments and options to it.

## Why?
When I first saw [@sindresorhus](https://github.com/sindresorhus)'s [term-img](https://www.npmjs.com/package/term-img) package I was inspired to create [giph](https://github.com/kodie/giph) and then [progress-img](https://github.com/kodie/progress-img). I then saw [@vadimdemedes](https://github.com/vadimdemedes)'s [gifi](https://github.com/vadimdemedes/gifi) package and wondered if there was a way I could implement progress-img into npm.

In short, this was basically just an experiment for fun. :)

## License
MIT. See the [License file](LICENSE.md) for more info.
