#!/usr/bin/env node
'use strict'
const pkg = require('pkg')
const pkgi = require('pkgi')

var prompt = pkgi(pkg)
prompt()
