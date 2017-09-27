#!/usr/bin/env node
'use strict'

var args = process.argv.slice(2)
var argv = require('minimist')(args)
var install = false

if (args.length) {
  var arg = args[0].toLowerCase()

  if (arg === 'install' || arg === 'i') install = true
}

if (install) {
  const mock = require('mock-require')

  if (!process.env.NPM_GIF_FRAME_THROTTLE) process.env.NPM_GIF_FRAME_THROTTLE = '500ms'

  mock('gauge', require('./gauge-gif'))

  const npm = require('global-npm')

  var globalInstall = false
  var noSave = false
  var save = false
  var saveBundle = false
  var saveDev = false
  var saveExact = false
  var saveOpt = false
  var saveProd = false

  if (argv['global'] || argv['g']) globalInstall = true
  if (argv['no-save']) noSave = true
  if (argv['save'] || argv['S']) save = true
  if (argv['save-bundle'] || argv['B']) saveBundle = true
  if (argv['save-dev'] || argv['D']) saveDev = true
  if (argv['save-exact'] || argv['E']) saveExact = true
  if (argv['save-optional'] || argv['O']) saveOpt = true
  if (argv['save-production'] || argv['P']) saveOpt = true

  argv._.shift()

  npm.load({
    'loglevel': 'silent',
    'global': globalInstall,
    'no-save': noSave,
    'save': save,
    'save-bundle': saveBundle,
    'save-dev': saveDev,
    'save-exact': saveExact,
    'save-optional': saveOpt,
    'save-production': saveProd
  }, err => {
    if (err) {
      console.error(err)
    } else {
      npm.commands.install(argv._, (err, data) => {
        if (err) console.error(err)
      })
    }
  })
} else {
  const spawn = require('cross-spawn-async')

  spawn('npm', args, {
    cwd: process.cwd(),
    stdio: 'inherit'
  })
}
