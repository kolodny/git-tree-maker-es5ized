"use strict";
require('traceur/bin/traceur-runtime');
var $__6 = $traceurRuntime.initGeneratorFunction(gitTreeMaker),
    $__11 = $traceurRuntime.initGeneratorFunction(ensureValidGitDir),
    $__12 = $traceurRuntime.initGeneratorFunction(createTree);
var $__co__,
    $__co_45_exec__,
    $__thunkify__,
    $__path__,
    $__mkdirp__,
    $__fs__;
var co = ($__co__ = require("co"), $__co__ && $__co__.__esModule && $__co__ || {default: $__co__}).default;
var exec = ($__co_45_exec__ = require("co-exec"), $__co_45_exec__ && $__co_45_exec__.__esModule && $__co_45_exec__ || {default: $__co_45_exec__}).default;
var thunkify = ($__thunkify__ = require("thunkify"), $__thunkify__ && $__thunkify__.__esModule && $__thunkify__ || {default: $__thunkify__}).default;
var path = ($__path__ = require("path"), $__path__ && $__path__.__esModule && $__path__ || {default: $__path__}).default;
var mkdirp = ($__mkdirp__ = require("mkdirp"), $__mkdirp__ && $__mkdirp__.__esModule && $__mkdirp__ || {default: $__mkdirp__}).default;
var fs = ($__fs__ = require("fs"), $__fs__ && $__fs__.__esModule && $__fs__ || {default: $__fs__}).default;
var stat = thunkify(fs.stat);
var append = thunkify(fs.appendFile);
var mkdirp = thunkify(mkdirp);
function gitTreeMaker(workingDir, tree) {
  var $__7,
      $__8,
      $__9,
      $__10;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $__7 = ensureValidGitDir(workingDir)[Symbol.iterator]();
          $ctx.sent = void 0;
          $ctx.action = 'next';
          $ctx.state = 12;
          break;
        case 12:
          $__8 = $__7[$ctx.action]($ctx.sentIgnoreThrow);
          $ctx.state = 9;
          break;
        case 9:
          $ctx.state = ($__8.done) ? 3 : 2;
          break;
        case 3:
          $ctx.sent = $__8.value;
          $ctx.state = 10;
          break;
        case 2:
          $ctx.state = 12;
          return $__8.value;
        case 10:
          workingDir = $ctx.sentIgnoreThrow;
          $ctx.state = 14;
          break;
        case 14:
          $__9 = createTree(tree)[Symbol.iterator]();
          $ctx.sent = void 0;
          $ctx.action = 'next';
          $ctx.state = 26;
          break;
        case 26:
          $__10 = $__9[$ctx.action]($ctx.sentIgnoreThrow);
          $ctx.state = 23;
          break;
        case 23:
          $ctx.state = ($__10.done) ? 17 : 16;
          break;
        case 17:
          $ctx.sent = $__10.value;
          $ctx.state = -2;
          break;
        case 16:
          $ctx.state = 26;
          return $__10.value;
        default:
          return $ctx.end();
      }
  }, $__6, this);
}
module.exports = gitTreeMaker;
function ensureValidGitDir(dir) {
  var e;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          dir = dir ? path.resolve(dir) : process.cwd();
          $ctx.state = 25;
          break;
        case 25:
          $ctx.pushTry(11, null);
          $ctx.state = 14;
          break;
        case 14:
          $ctx.state = 2;
          return stat(dir);
        case 2:
          stats = $ctx.sent;
          $ctx.state = 4;
          break;
        case 4:
          if (!stats.isDirectory()) {
            throw new Error(dir + " is a file");
          }
          $ctx.state = 6;
          break;
        case 6:
          $ctx.popTry();
          $ctx.state = 16;
          break;
        case 11:
          $ctx.popTry();
          e = $ctx.storedException;
          $ctx.state = 7;
          break;
        case 7:
          $ctx.state = 8;
          return mkdirp(dir);
        case 8:
          $ctx.maybeThrow();
          $ctx.state = 16;
          break;
        case 16:
          process.chdir(dir);
          $ctx.state = 27;
          break;
        case 27:
          $ctx.state = 19;
          return exec('git init');
        case 19:
          $ctx.maybeThrow();
          $ctx.state = 21;
          break;
        case 21:
          $ctx.returnValue = dir;
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__11, this);
}
function createTree(tree, lastHash) {
  var $__13,
      $__14,
      $__15,
      $__16,
      commit,
      subTree,
      branchName,
      currentBranch,
      hash,
      $__17,
      $__18;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $__13 = [];
          $__14 = tree;
          for ($__15 in $__14)
            $__13.push($__15);
          $ctx.state = 56;
          break;
        case 56:
          $__16 = 0;
          $ctx.state = 54;
          break;
        case 54:
          $ctx.state = ($__16 < $__13.length) ? 46 : -2;
          break;
        case 40:
          $__16++;
          $ctx.state = 54;
          break;
        case 46:
          commit = $__13[$__16];
          $ctx.state = 47;
          break;
        case 47:
          $ctx.state = (!(commit in $__14)) ? 40 : 44;
          break;
        case 44:
          subTree = tree[commit];
          $ctx.state = 49;
          break;
        case 49:
          $ctx.state = (/\./.test(commit)) ? 5 : 4;
          break;
        case 5:
          branchName = commit.split('.')[1] || commit;
          $ctx.state = 6;
          break;
        case 6:
          $ctx.state = 2;
          return exec('git checkout -b ' + branchName + ' ' + (lastHash || ''));
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = (Object.keys(tree).length > 1 && !/\./.test(commit)) ? 8 : 13;
          break;
        case 8:
          $ctx.state = 9;
          return exec('git rev-parse --abbrev-ref HEAD');
        case 9:
          currentBranch = $ctx.sent;
          $ctx.state = 11;
          break;
        case 11:
          if (!currentBranch) {
            console.warn('you may lose ' + commit);
          }
          $ctx.state = 13;
          break;
        case 13:
          commit = commit.split('.')[0];
          $ctx.state = 51;
          break;
        case 51:
          $ctx.state = 16;
          return append(commit, commit + '\n');
        case 16:
          $ctx.maybeThrow();
          $ctx.state = 18;
          break;
        case 18:
          $ctx.state = 20;
          return exec('git add .');
        case 20:
          $ctx.maybeThrow();
          $ctx.state = 22;
          break;
        case 22:
          $ctx.state = 24;
          return exec('git commit -m "' + commit + '"');
        case 24:
          $ctx.maybeThrow();
          $ctx.state = 26;
          break;
        case 26:
          $ctx.state = 28;
          return exec('git rev-parse HEAD');
        case 28:
          hash = $ctx.sent;
          $ctx.state = 30;
          break;
        case 30:
          $__17 = createTree(subTree, hash)[Symbol.iterator]();
          $ctx.sent = void 0;
          $ctx.action = 'next';
          $ctx.state = 42;
          break;
        case 42:
          $__18 = $__17[$ctx.action]($ctx.sentIgnoreThrow);
          $ctx.state = 39;
          break;
        case 39:
          $ctx.state = ($__18.done) ? 33 : 32;
          break;
        case 33:
          $ctx.sent = $__18.value;
          $ctx.state = 40;
          break;
        case 32:
          $ctx.state = 42;
          return $__18.value;
        default:
          return $ctx.end();
      }
  }, $__12, this);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYlxcaW5kZXguanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTYiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci84IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzkiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTAiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTEiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTciLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTIiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMjAiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTgiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMjEiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMjIiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTkiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7U0NBQSxDQUFBLGVBQWMsc0JBQXNCLEFBQUMsY0FBa0I7VUFBdkQsQ0FBQSxlQUFjLHNCQUFzQixBQUFDLG1CQUFrQjtVQUF2RCxDQUFBLGVBQWMsc0JBQXNCLEFBQUMsWUFBa0I7Ozs7Ozs7RURBaEQsR0FBQyxFRUFSLEVBQUMsU0FBb0IsQ0FBQSxPQUFNLEFBQUMsTUFBa0IsQ0FDdEMsQ0FBQSxVQUFxQixtQkFBMkIsQ0FBQSxVQUFxQixHQUFLLEVBQUMsT0FBTSxTQUFt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QztBQUNBIiwiZmlsZSI6ImxpYlxcaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY28gZnJvbSAnY28nO1xyXG5pbXBvcnQgZXhlYyBmcm9tICdjby1leGVjJztcclxuaW1wb3J0IHRodW5raWZ5IGZyb20gJ3RodW5raWZ5JztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBta2RpcnAgZnJvbSAnbWtkaXJwJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuXHJcbnZhciBzdGF0ID0gdGh1bmtpZnkoZnMuc3RhdCk7XHJcbnZhciBhcHBlbmQgPSB0aHVua2lmeShmcy5hcHBlbmRGaWxlKTtcclxudmFyIG1rZGlycCA9IHRodW5raWZ5KG1rZGlycCk7XHJcblxyXG5mdW5jdGlvbiAqZ2l0VHJlZU1ha2VyKHdvcmtpbmdEaXIsIHRyZWUpIHtcclxuXHR3b3JraW5nRGlyID0geWllbGQgKmVuc3VyZVZhbGlkR2l0RGlyKHdvcmtpbmdEaXIpO1xyXG5cdHlpZWxkICpjcmVhdGVUcmVlKHRyZWUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdpdFRyZWVNYWtlcjtcclxuXHJcbmZ1bmN0aW9uICplbnN1cmVWYWxpZEdpdERpcihkaXIpIHtcclxuXHRkaXIgPSBkaXIgPyBwYXRoLnJlc29sdmUoZGlyKSA6IHByb2Nlc3MuY3dkKCk7XHJcblx0dHJ5IHtcclxuXHRcdHN0YXRzID0geWllbGQgc3RhdChkaXIpO1xyXG5cdFx0aWYgKCFzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihkaXIgKyBcIiBpcyBhIGZpbGVcIik7XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0eWllbGQgbWtkaXJwKGRpcik7XHJcblx0fVxyXG5cdHByb2Nlc3MuY2hkaXIoZGlyKTtcclxuXHR5aWVsZCBleGVjKCdnaXQgaW5pdCcpO1xyXG5cdHJldHVybiBkaXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uICpjcmVhdGVUcmVlKHRyZWUsIGxhc3RIYXNoKSB7XHJcblx0Zm9yICh2YXIgY29tbWl0IGluIHRyZWUpIHtcclxuXHRcdHZhciBzdWJUcmVlID0gdHJlZVtjb21taXRdO1xyXG5cdFx0aWYgKC9cXC4vLnRlc3QoY29tbWl0KSkge1xyXG5cdFx0XHR2YXIgYnJhbmNoTmFtZSA9IGNvbW1pdC5zcGxpdCgnLicpWzFdIHx8IGNvbW1pdDtcclxuXHRcdFx0eWllbGQgZXhlYygnZ2l0IGNoZWNrb3V0IC1iICcgKyBicmFuY2hOYW1lICsgJyAnICsgKGxhc3RIYXNoIHx8ICcnKSk7XHJcblx0XHR9XHJcblx0XHRpZiAoT2JqZWN0LmtleXModHJlZSkubGVuZ3RoID4gMSAmJiAhL1xcLi8udGVzdChjb21taXQpKSB7XHJcblx0XHRcdHZhciBjdXJyZW50QnJhbmNoID0geWllbGQgZXhlYygnZ2l0IHJldi1wYXJzZSAtLWFiYnJldi1yZWYgSEVBRCcpO1xyXG5cdFx0XHRpZiAoIWN1cnJlbnRCcmFuY2gpIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ3lvdSBtYXkgbG9zZSAnICsgY29tbWl0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29tbWl0ID0gY29tbWl0LnNwbGl0KCcuJylbMF07XHJcblx0XHR5aWVsZCBhcHBlbmQoY29tbWl0LCBjb21taXQgKyAnXFxuJyk7XHJcblx0XHR5aWVsZCBleGVjKCdnaXQgYWRkIC4nKTtcclxuXHRcdHlpZWxkIGV4ZWMoJ2dpdCBjb21taXQgLW0gXCInICsgY29tbWl0ICsgJ1wiJyk7XHJcblx0XHR2YXIgaGFzaCA9IHlpZWxkIGV4ZWMoJ2dpdCByZXYtcGFyc2UgSEVBRCcpO1xyXG5cdFx0eWllbGQgKmNyZWF0ZVRyZWUoc3ViVHJlZSwgaGFzaCk7XHJcblx0fVxyXG59XHJcbiIsIiR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24oJF9fcGxhY2Vob2xkZXJfXzApIiwiKCRfX3BsYWNlaG9sZGVyX18wID0gcmVxdWlyZSgkX19wbGFjZWhvbGRlcl9fMSksIFxuICAgICAgICAkX19wbGFjZWhvbGRlcl9fMiAmJiAkX19wbGFjZWhvbGRlcl9fMy5fX2VzTW9kdWxlICYmICRfX3BsYWNlaG9sZGVyX180IHx8IHtkZWZhdWx0OiAkX19wbGFjZWhvbGRlcl9fNX0pIiwicmV0dXJuICRfX3BsYWNlaG9sZGVyX18wKFxuICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMSxcbiAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzIsIHRoaXMpOyIsIiR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZSIsImZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgIHdoaWxlICh0cnVlKSAkX19wbGFjZWhvbGRlcl9fMFxuICAgIH0iLCJcbiAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIC8vIHJlY2VpdmVkID0gdm9pZCAwO1xuICAgICAgICAkY3R4LnNlbnQgPSB2b2lkIDA7XG4gICAgICAgIC8vIHNlbmQgPSB0cnVlOyAvLyByb3VnaGx5IGVxdWl2YWxlbnRcbiAgICAgICAgJGN0eC5hY3Rpb24gPSAnbmV4dCc7XG5cbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18yID0gJF9fcGxhY2Vob2xkZXJfXzNbJGN0eC5hY3Rpb25dKCRjdHguc2VudElnbm9yZVRocm93KTtcbiAgICAgICAgICBpZiAoJF9fcGxhY2Vob2xkZXJfXzQuZG9uZSkge1xuICAgICAgICAgICAgJGN0eC5zZW50ID0gJF9fcGxhY2Vob2xkZXJfXzUudmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzY7XG4gICAgICAgIH0iLCIkY3R4LnN0YXRlID0gKCRfX3BsYWNlaG9sZGVyX18wKSA/ICRfX3BsYWNlaG9sZGVyX18xIDogJF9fcGxhY2Vob2xkZXJfXzI7XG4gICAgICAgIGJyZWFrIiwicmV0dXJuICRfX3BsYWNlaG9sZGVyX18wIiwiJGN0eC5zZW50SWdub3JlVGhyb3ciLCJyZXR1cm4gJGN0eC5lbmQoKSIsIiRjdHgucHVzaFRyeShcbiAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18wLFxuICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzEpOyIsIiRjdHguc2VudCIsIiRjdHgucG9wVHJ5KCk7IiwiXG4gICAgICAgICAgICAgICRjdHgucG9wVHJ5KCk7XG4gICAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18wID0gJGN0eC5zdG9yZWRFeGNlcHRpb247IiwiJGN0eC5tYXliZVRocm93KCkiLCIkY3R4LnJldHVyblZhbHVlID0gJF9fcGxhY2Vob2xkZXJfXzAiXX0=