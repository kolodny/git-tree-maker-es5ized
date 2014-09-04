import assert from 'assert'
import gitTreeMaker from '../lib/';
import co from 'co';
import exec from 'co-exec';
import thunkify from 'thunkify';
import tmp from 'tmp';
import rimraf from 'rimraf';

var dir = thunkify(tmp.dir);
rimraf = thunkify(rimraf);


describe('git-tree-maker', function() {
  var tempDir;

  beforeEach(function(next) {
    co(function *() {
      tempDir = (yield dir())[0];
      process.chdir(tempDir);
      next();
    })();
  });
  afterEach(function(next) {
    co(function *(){
      yield rimraf(tempDir);
      next();
    })();
  });

  describe('single path tree', function() {
    it("should have a determinstic tree", function(next) {
      co(function *(){
        var tree = {
          1: {
            2: {
              3: {}
            }
          }
        };
        yield *gitTreeMaker(tempDir, tree);
        var log = yield exec('git log --pretty="%s"');
        assert.equal(log, '3\n2\n1\n');
        next();
      })();
    });

    it("should have the complex tree", function(next) {
      co(function *(){
        var tree = {
          1: {
            2: {
              3: {}
            },
            4: {
              5: {}
            }
          }
        };
        yield *gitTreeMaker(tempDir, tree);
        var log = yield exec('git log --all --pretty="%s"');
        for (var i = 1; i < 5; i++) {
          assert((new RegExp(i + '\\n')).test(log))
        }
        next();
      })();
    });


  });
});
