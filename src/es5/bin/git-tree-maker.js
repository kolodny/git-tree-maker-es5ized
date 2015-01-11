#!/usr/bin/env node

"use strict";
var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

require("core-js/shim");
require("regenerator/runtime");

var program = _interopRequire(require("commander"));

var fs = _interopRequire(require("fs"));

var gitTreeMaker = _interopRequire(require("../lib/"));

var co = _interopRequire(require("co"));

var pkg = _interopRequire(require("../../../package.json"));

program.name = "git-tree-maker";
program.version(pkg.version).usage("<directory> <tree>");

program.on("--help", function () {
  var name = this._name;
  var exampleTree = JSON.stringify({ a: { b: { "c.feature1": {}, "d.feature2": {} } } }, null, "    ").replace(/\n/g, "\n\t");

  console.log("  Examples:");
  console.log("");
  console.log("    $ " + name + " /tmp/gittree '" + exampleTree + "'");
  console.log("");
});

program.parse(process.argv);

var args = program.args;

co(regeneratorRuntime.mark(function callee$0$0() {
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield(gitTreeMaker(args[0], JSON.parse(args[1])), "t0", 1);
      case 1:
      case "end":
        return context$1$0.stop();
    }
  }, callee$0$0, this);
}))();
//# sourceMappingURL=../bin/git-tree-maker.js.map