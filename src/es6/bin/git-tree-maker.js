//#!/usr/bin/env node --harmony

import program from 'commander';
import fs from 'fs';
import gitTreeMaker from '../lib/';
import co from 'co';
import pkg from '../../../package.json';

program.name = 'git-tree-maker';
program
  .version(pkg.version)
  .usage('<directory> <tree>');

program.on('--help', function() {
  var name = this._name;
  var exampleTree = JSON.stringify({a:{b:{"c.feature1": {}, "d.feature2": {}}}}, null, '    ').replace(/\n/g, '\n\t');

  console.log('  Examples:');
  console.log('');
  console.log('    $ ' + name + ' /tmp/gittree \'' + exampleTree + '\'');
  console.log('');
});

program.parse(process.argv);

var args = program.args;

co(function *() {
  yield *gitTreeMaker(args[0], JSON.parse(args[1]));
})();
