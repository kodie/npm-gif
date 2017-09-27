'use strict'

const ProgressImg = require('progress-img')

ProgressImg.prototype.disable = function() {
  return this
}

ProgressImg.prototype.enable = function() {
  return this
}

ProgressImg.prototype.getWidth = function() {
  return this
}

ProgressImg.prototype.hide = function(cb) {
  return this
}

ProgressImg.prototype.isEnabled = function() {
  return this
}

ProgressImg.prototype.pulse = function(subsection) {
  return this
}

ProgressImg.prototype.setTheme = function(theme) {
  return this
}

ProgressImg.prototype.setTemplate = function(themes) {
  return this
}

ProgressImg.prototype.setThemeset = function(themes) {
  return this
}

ProgressImg.prototype.setWriteTo = function(writeTo, tty) {
  return this
}

ProgressImg.prototype.show = function(section, completed) {
  this._showing = true

  var opts = {}

  if (typeof section === 'string') {
    opts.textTop = section
  } else if (typeof section === 'object') {
    if (!completed) completed = section.completed
    if (section.section) opts.textTop = section.section
    if (section.subsection) opts.textBottom = section.subsection
    if (section.logline) opts.textBottom += ' ' + section.logline
  }

  if (completed != null) opts.set = Math.round(completed * 100) + '%'

  return this.set(opts)
}

var GaugeGif = function (stream, options) {
  if (!options) { options = {} }

  var opts = {}

  if (options.updateInterval) opts.frameThrottle = options.updateInterval + 'ms'
  if (options.fixedFramerate) opts.frameThrottle = options.fixedFramerate + 'ms'
  if (stream) opts.output = stream
  if (options.tty) opts.output = options.tty

  if (process.env.NPM_GIF_FRAME_THROTTLE) opts.frameThrottle = process.env.NPM_GIF_FRAME_THROTTLE
  if (process.env.NPM_GIF) opts.image = process.env.NPM_GIF

  return new ProgressImg(opts)
}

module.exports = GaugeGif
