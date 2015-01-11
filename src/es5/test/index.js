"use strict";
var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

require("core-js/shim");
require("regenerator/runtime");
var assert = _interopRequire(require("assert"));

var gitTreeMaker = _interopRequire(require("../lib/"));

var co = _interopRequire(require("co"));

var exec = _interopRequire(require("co-exec"));

var thunkify = _interopRequire(require("thunkify"));

var tmp = _interopRequire(require("tmp"));

var rimraf = _interopRequire(require("rimraf"));

var dir = thunkify(tmp.dir);
rimraf = thunkify(rimraf);


describe("git-tree-maker", function () {
  var tempDir;

  beforeEach(function (next) {
    co(regeneratorRuntime.mark(function callee$2$0() {
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return dir();
          case 2:
            tempDir = context$3$0.sent[0];
            process.chdir(tempDir);
            next();
          case 5:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this);
    }))();
  });
  afterEach(function (next) {
    co(regeneratorRuntime.mark(function callee$2$0() {
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return rimraf(tempDir);
          case 2:
            next();
          case 3:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this);
    }))();
  });

  describe("single path tree", function () {
    it("should have a determinstic tree", function (next) {
      co(regeneratorRuntime.mark(function callee$3$0() {
        var tree, log;
        return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              tree = {
                1: {
                  2: {
                    3: {}
                  }
                }
              };
              return context$4$0.delegateYield(gitTreeMaker(tempDir, tree), "t7", 2);
            case 2:
              context$4$0.next = 4;
              return exec("git log --pretty=\"%s\"");
            case 4:
              log = context$4$0.sent;
              assert.equal(log, "3\n2\n1\n");
              next();
            case 7:
            case "end":
              return context$4$0.stop();
          }
        }, callee$3$0, this);
      }))();
    });

    it("should have the complex tree", function (next) {
      co(regeneratorRuntime.mark(function callee$3$0() {
        var tree, log, i;
        return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              tree = {
                1: {
                  2: {
                    3: {}
                  },
                  4: {
                    5: {}
                  }
                }
              };
              return context$4$0.delegateYield(gitTreeMaker(tempDir, tree), "t8", 2);
            case 2:
              context$4$0.next = 4;
              return exec("git log --all --pretty=\"%s\"");
            case 4:
              log = context$4$0.sent;
              for (i = 1; i < 5; i++) {
                assert(new RegExp(i + "\\n").test(log));
              }
              next();
            case 7:
            case "end":
              return context$4$0.stop();
          }
        }, callee$3$0, this);
      }))();
    });

  });
});
//# sourceMappingURL=../test/index.js.map