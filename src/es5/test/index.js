"use strict";
require('traceur/bin/traceur-runtime');
var $__assert__,
    $___46__46__47_lib_47___,
    $__co__,
    $__co_45_exec__,
    $__thunkify__,
    $__tmp__,
    $__rimraf__;
var assert = ($__assert__ = require("assert"), $__assert__ && $__assert__.__esModule && $__assert__ || {default: $__assert__}).default;
var gitTreeMaker = ($___46__46__47_lib_47___ = require("../lib/"), $___46__46__47_lib_47___ && $___46__46__47_lib_47___.__esModule && $___46__46__47_lib_47___ || {default: $___46__46__47_lib_47___}).default;
var co = ($__co__ = require("co"), $__co__ && $__co__.__esModule && $__co__ || {default: $__co__}).default;
var exec = ($__co_45_exec__ = require("co-exec"), $__co_45_exec__ && $__co_45_exec__.__esModule && $__co_45_exec__ || {default: $__co_45_exec__}).default;
var thunkify = ($__thunkify__ = require("thunkify"), $__thunkify__ && $__thunkify__.__esModule && $__thunkify__ || {default: $__thunkify__}).default;
var tmp = ($__tmp__ = require("tmp"), $__tmp__ && $__tmp__.__esModule && $__tmp__ || {default: $__tmp__}).default;
var rimraf = ($__rimraf__ = require("rimraf"), $__rimraf__ && $__rimraf__.__esModule && $__rimraf__ || {default: $__rimraf__}).default;
var dir = thunkify(tmp.dir);
rimraf = thunkify(rimraf);
describe('git-tree-maker', function() {
  var tempDir;
  beforeEach(function(next) {
    co($traceurRuntime.initGeneratorFunction(function $__7() {
      var $__8,
          $__9,
          $__10;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__8 = dir();
              $ctx.state = 6;
              break;
            case 6:
              $ctx.state = 2;
              return $__8;
            case 2:
              $__9 = $ctx.sent;
              $ctx.state = 4;
              break;
            case 4:
              $__10 = $__9[0];
              tempDir = $__10;
              $ctx.state = 8;
              break;
            case 8:
              process.chdir(tempDir);
              next();
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    }))();
  });
  afterEach(function(next) {
    co($traceurRuntime.initGeneratorFunction(function $__7() {
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = 2;
              return rimraf(tempDir);
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            case 4:
              next();
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    }))();
  });
  describe('single path tree', function() {
    it("should have a determinstic tree", function(next) {
      co($traceurRuntime.initGeneratorFunction(function $__7() {
        var tree,
            log,
            $__11,
            $__12;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                tree = {1: {2: {3: {}}}};
                $ctx.state = 18;
                break;
              case 18:
                $__11 = gitTreeMaker(tempDir, tree)[Symbol.iterator]();
                $ctx.sent = void 0;
                $ctx.action = 'next';
                $ctx.state = 12;
                break;
              case 12:
                $__12 = $__11[$ctx.action]($ctx.sentIgnoreThrow);
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = ($__12.done) ? 3 : 2;
                break;
              case 3:
                $ctx.sent = $__12.value;
                $ctx.state = 10;
                break;
              case 2:
                $ctx.state = 12;
                return $__12.value;
              case 10:
                $ctx.state = 14;
                return exec('git log --pretty="%s"');
              case 14:
                log = $ctx.sent;
                $ctx.state = 16;
                break;
              case 16:
                assert.equal(log, '3\n2\n1\n');
                next();
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__7, this);
      }))();
    });
    it("should have the complex tree", function(next) {
      co($traceurRuntime.initGeneratorFunction(function $__7() {
        var tree,
            log,
            i,
            $__13,
            $__14;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                tree = {1: {
                    2: {3: {}},
                    4: {5: {}}
                  }};
                $ctx.state = 18;
                break;
              case 18:
                $__13 = gitTreeMaker(tempDir, tree)[Symbol.iterator]();
                $ctx.sent = void 0;
                $ctx.action = 'next';
                $ctx.state = 12;
                break;
              case 12:
                $__14 = $__13[$ctx.action]($ctx.sentIgnoreThrow);
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = ($__14.done) ? 3 : 2;
                break;
              case 3:
                $ctx.sent = $__14.value;
                $ctx.state = 10;
                break;
              case 2:
                $ctx.state = 12;
                return $__14.value;
              case 10:
                $ctx.state = 14;
                return exec('git log --all --pretty="%s"');
              case 14:
                log = $ctx.sent;
                $ctx.state = 16;
                break;
              case 16:
                for (i = 1; i < 5; i++) {
                  assert((new RegExp(i + '\\n')).test(log));
                }
                next();
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__7, this);
      }))();
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RcXGluZGV4LmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzAiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTUiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTQiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xOCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMiIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xOSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci85IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztFQUFPLE9BQUssRUNBWixFQUFDLGFBQW9CLENBQUEsT0FBTSxBQUFDLFVBQWtCLENBQ3RDLENBQUEsY0FBcUIsdUJBQTJCLENBQUEsY0FBcUIsR0FBSyxFQUFDLE9BQU0sYUFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztFREF2RyxhQUFXLEVDRGxCLEVBQUMsMEJBQW9CLENBQUEsT0FBTSxBQUFDLFdBQWtCLENBQ3RDLENBQUEsMkJBQXFCLG9DQUEyQixDQUFBLDJCQUFxQixHQUFLLEVBQUMsT0FBTSwwQkFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztFREN2RyxHQUFDLEVDRlIsRUFBQyxTQUFvQixDQUFBLE9BQU0sQUFBQyxNQUFrQixDQUN0QyxDQUFBLFVBQXFCLG1CQUEyQixDQUFBLFVBQXFCLEdBQUssRUFBQyxPQUFNLFNBQW1CLENBRDlELEFBQytELENBQUM7RURFdkcsS0FBRyxFQ0hWLEVBQUMsaUJBQW9CLENB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OiIuLiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0J1xyXG5pbXBvcnQgZ2l0VHJlZU1ha2VyIGZyb20gJy4uL2xpYi8nO1xyXG5pbXBvcnQgY28gZnJvbSAnY28nO1xyXG5pbXBvcnQgZXhlYyBmcm9tICdjby1leGVjJztcclxuaW1wb3J0IHRodW5raWZ5IGZyb20gJ3RodW5raWZ5JztcclxuaW1wb3J0IHRtcCBmcm9tICd0bXAnO1xyXG5pbXBvcnQgcmltcmFmIGZyb20gJ3JpbXJhZic7XHJcblxyXG52YXIgZGlyID0gdGh1bmtpZnkodG1wLmRpcik7XHJcbnJpbXJhZiA9IHRodW5raWZ5KHJpbXJhZik7XHJcblxyXG5cclxuZGVzY3JpYmUoJ2dpdC10cmVlLW1ha2VyJywgZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHRlbXBEaXI7XHJcblxyXG4gIGJlZm9yZUVhY2goZnVuY3Rpb24obmV4dCkge1xyXG4gICAgY28oZnVuY3Rpb24gKigpIHtcclxuICAgICAgdGVtcERpciA9ICh5aWVsZCBkaXIoKSlbMF07XHJcbiAgICAgIHByb2Nlc3MuY2hkaXIodGVtcERpcik7XHJcbiAgICAgIG5leHQoKTtcclxuICAgIH0pKCk7XHJcbiAgfSk7XHJcbiAgYWZ0ZXJFYWNoKGZ1bmN0aW9uKG5leHQpIHtcclxuICAgIGNvKGZ1bmN0aW9uICooKXtcclxuICAgICAgeWllbGQgcmltcmFmKHRlbXBEaXIpO1xyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9KSgpO1xyXG4gIH0pO1xyXG5cclxuICBkZXNjcmliZSgnc2luZ2xlIHBhdGggdHJlZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgaXQoXCJzaG91bGQgaGF2ZSBhIGRldGVybWluc3RpYyB0cmVlXCIsIGZ1bmN0aW9uKG5leHQpIHtcclxuICAgICAgY28oZnVuY3Rpb24gKigpe1xyXG4gICAgICAgIHZhciB0cmVlID0ge1xyXG4gICAgICAgICAgMToge1xyXG4gICAgICAgICAgICAyOiB7XHJcbiAgICAgICAgICAgICAgMzoge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeWllbGQgKmdpdFRyZWVNYWtlcih0ZW1wRGlyLCB0cmVlKTtcclxuICAgICAgICB2YXIgbG9nID0geWllbGQgZXhlYygnZ2l0IGxvZyAtLXByZXR0eT1cIiVzXCInKTtcclxuICAgICAgICBhc3NlcnQuZXF1YWwobG9nLCAnM1xcbjJcXG4xXFxuJyk7XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9KSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJzaG91bGQgaGF2ZSB0aGUgY29tcGxleCB0cmVlXCIsIGZ1bmN0aW9uKG5leHQpIHtcclxuICAgICAgY28oZnVuY3Rpb24gKigpe1xyXG4gICAgICAgIHZhciB0cmVlID0ge1xyXG4gICAgICAgICAgMToge1xyXG4gICAgICAgICAgICAyOiB7XHJcbiAgICAgICAgICAgICAgMzoge31cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDoge1xyXG4gICAgICAgICAgICAgIDU6IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHlpZWxkICpnaXRUcmVlTWFrZXIodGVtcERpciwgdHJlZSk7XHJcbiAgICAgICAgdmFyIGxvZyA9IHlpZWxkIGV4ZWMoJ2dpdCBsb2cgLS1hbGwgLS1wcmV0dHk9XCIlc1wiJyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgIGFzc2VydCgobmV3IFJlZ0V4cChpICsgJ1xcXFxuJykpLnRlc3QobG9nKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9KSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICB9KTtcclxufSk7XHJcbiIsIigkX19wbGFjZWhvbGRlcl9fMCA9IHJlcXVpcmUoJF9fcGxhY2Vob2xkZXJfXzEpLCBcbiAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzIgJiYgJF9fcGxhY2Vob2xkZXJfXzMuX19lc01vZHVsZSAmJiAkX19wbGFjZWhvbGRlcl9fNCB8fCB7ZGVmYXVsdDogJF9fcGxhY2Vob2xkZXJfXzV9KSIsIiR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24oJF9fcGxhY2Vob2xkZXJfXzApIiwicmV0dXJuICRfX3BsYWNlaG9sZGVyX18wKFxuICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMSxcbiAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzIsIHRoaXMpOyIsIiR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZSIsImZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgIHdoaWxlICh0cnVlKSAkX19wbGFjZWhvbGRlcl9fMFxuICAgIH0iLCJyZXR1cm4gJF9fcGxhY2Vob2xkZXJfXzAiLCIkY3R4LnNlbnQiLCJyZXR1cm4gJGN0eC5lbmQoKSIsIiRjdHgubWF5YmVUaHJvdygpIiwiXG4gICAgICAgICRfX3BsYWNlaG9sZGVyX18wID0gJF9fcGxhY2Vob2xkZXJfXzFbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICAvLyByZWNlaXZlZCA9IHZvaWQgMDtcbiAgICAgICAgJGN0eC5zZW50ID0gdm9pZCAwO1xuICAgICAgICAvLyBzZW5kID0gdHJ1ZTsgLy8gcm91Z2hseSBlcXVpdmFsZW50XG4gICAgICAgICRjdHguYWN0aW9uID0gJ25leHQnO1xuXG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMiA9ICRfX3BsYWNlaG9sZGVyX18zWyRjdHguYWN0aW9uXSgkY3R4LnNlbnRJZ25vcmVUaHJvdyk7XG4gICAgICAgICAgaWYgKCRfX3BsYWNlaG9sZGVyX180LmRvbmUpIHtcbiAgICAgICAgICAgICRjdHguc2VudCA9ICRfX3BsYWNlaG9sZGVyX181LnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgICRfX3BsYWNlaG9sZGVyX182O1xuICAgICAgICB9IiwiJGN0eC5zdGF0ZSA9ICgkX19wbGFjZWhvbGRlcl9fMCkgPyAkX19wbGFjZWhvbGRlcl9fMSA6ICRfX3BsYWNlaG9sZGVyX18yO1xuICAgICAgICBicmVhayJdfQ==