"use strict";
var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var gitTreeMaker = regeneratorRuntime.mark(function gitTreeMaker(workingDir, tree) {
  return regeneratorRuntime.wrap(function gitTreeMaker$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield(ensureValidGitDir(workingDir), "t1", 1);
      case 1:
        workingDir = context$1$0.t1;
        return context$1$0.delegateYield(createTree(tree), "t2", 3);
      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, gitTreeMaker, this);
});

var ensureValidGitDir = regeneratorRuntime.mark(function ensureValidGitDir(dir) {
  return regeneratorRuntime.wrap(function ensureValidGitDir$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        dir = dir ? path.resolve(dir) : process.cwd();
        context$1$0.prev = 1;
        context$1$0.next = 4;
        return stat(dir);
      case 4:
        stats = context$1$0.sent;
        if (stats.isDirectory()) {
          context$1$0.next = 7;
          break;
        }
        throw new Error(dir + " is a file");
      case 7:
        context$1$0.next = 13;
        break;
      case 9:
        context$1$0.prev = 9;
        context$1$0.t3 = context$1$0["catch"](1);
        context$1$0.next = 13;
        return mkdirp(dir);
      case 13:
        process.chdir(dir);
        context$1$0.next = 16;
        return exec("git init");
      case 16:
        return context$1$0.abrupt("return", dir);
      case 17:
      case "end":
        return context$1$0.stop();
    }
  }, ensureValidGitDir, this, [[1, 9]]);
});

var createTree = regeneratorRuntime.mark(function createTree(tree, lastHash) {
  var commit, subTree, branchName, currentBranch, hash;
  return regeneratorRuntime.wrap(function createTree$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.t4 = regeneratorRuntime.keys(tree);
      case 1:
        if ((context$1$0.t5 = context$1$0.t4()).done) {
          context$1$0.next = 26;
          break;
        }
        commit = context$1$0.t5.value;
        subTree = tree[commit];
        if (!/\./.test(commit)) {
          context$1$0.next = 8;
          break;
        }
        branchName = commit.split(".")[1] || commit;
        context$1$0.next = 8;
        return exec("git checkout -b " + branchName + " " + (lastHash || ""));
      case 8:
        if (!(Object.keys(tree).length > 1 && !/\./.test(commit))) {
          context$1$0.next = 13;
          break;
        }
        context$1$0.next = 11;
        return exec("git rev-parse --abbrev-ref HEAD");
      case 11:
        currentBranch = context$1$0.sent;
        if (!currentBranch) {
          console.warn("you may lose " + commit);
        }
      case 13:
        commit = commit.split(".")[0];
        context$1$0.next = 16;
        return append(commit, commit + "\n");
      case 16:
        context$1$0.next = 18;
        return exec("git add .");
      case 18:
        context$1$0.next = 20;
        return exec("git commit -m \"" + commit + "\"");
      case 20:
        context$1$0.next = 22;
        return exec("git rev-parse HEAD");
      case 22:
        hash = context$1$0.sent;
        return context$1$0.delegateYield(createTree(subTree, hash), "t6", 24);
      case 24:
        context$1$0.next = 1;
        break;
      case 26:
      case "end":
        return context$1$0.stop();
    }
  }, createTree, this);
});

require("core-js/shim");
require("regenerator/runtime");
var co = _interopRequire(require("co"));

var exec = _interopRequire(require("co-exec"));

var thunkify = _interopRequire(require("thunkify"));

var path = _interopRequire(require("path"));

var mkdirp = _interopRequire(require("mkdirp"));

var fs = _interopRequire(require("fs"));

var stat = thunkify(fs.stat);
var append = thunkify(fs.appendFile);
var mkdirp = thunkify(mkdirp);

module.exports = gitTreeMaker;
//# sourceMappingURL=../lib/index.js.map