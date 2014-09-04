"use strict";
require('traceur/bin/traceur-runtime');
var $__commander__,
    $__fs__,
    $___46__46__47_lib_47___,
    $__co__,
    $___46__46__47__46__46__47__46__46__47_package_46_json__;
var program = ($__commander__ = require("commander"), $__commander__ && $__commander__.__esModule && $__commander__ || {default: $__commander__}).default;
var fs = ($__fs__ = require("fs"), $__fs__ && $__fs__.__esModule && $__fs__ || {default: $__fs__}).default;
var gitTreeMaker = ($___46__46__47_lib_47___ = require("../lib/"), $___46__46__47_lib_47___ && $___46__46__47_lib_47___.__esModule && $___46__46__47_lib_47___ || {default: $___46__46__47_lib_47___}).default;
var co = ($__co__ = require("co"), $__co__ && $__co__.__esModule && $__co__ || {default: $__co__}).default;
var pkg = ($___46__46__47__46__46__47__46__46__47_package_46_json__ = require("../../../package.json"), $___46__46__47__46__46__47__46__46__47_package_46_json__ && $___46__46__47__46__46__47__46__46__47_package_46_json__.__esModule && $___46__46__47__46__46__47__46__46__47_package_46_json__ || {default: $___46__46__47__46__46__47__46__46__47_package_46_json__}).default;
program.name = 'git-tree-maker';
program.version(pkg.version).usage('<directory> <tree>');
program.on('--help', function() {
  var name = this._name;
  var exampleTree = JSON.stringify({a: {b: {
        "c.feature1": {},
        "d.feature2": {}
      }}}, null, '    ').replace(/\n/g, '\n\t');
  console.log('  Examples:');
  console.log('');
  console.log('    $ ' + name + ' /tmp/gittree \'' + exampleTree + '\'');
  console.log('');
});
program.parse(process.argv);
var args = program.args;
co($traceurRuntime.initGeneratorFunction(function $__5() {
  var $__6,
      $__7;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $__6 = gitTreeMaker(args[0], JSON.parse(args[1]))[Symbol.iterator]();
          $ctx.sent = void 0;
          $ctx.action = 'next';
          $ctx.state = 12;
          break;
        case 12:
          $__7 = $__6[$ctx.action]($ctx.sentIgnoreThrow);
          $ctx.state = 9;
          break;
        case 9:
          $ctx.state = ($__7.done) ? 3 : 2;
          break;
        case 3:
          $ctx.sent = $__7.value;
          $ctx.state = -2;
          break;
        case 2:
          $ctx.state = 12;
          return $__7.value;
        default:
          return $ctx.end();
      }
  }, $__5, this);
}))();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpblxcZ2l0LXRyZWUtbWFrZXIuanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xNSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci84IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzkiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTAiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTEiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7Ozs7OztFQUFPLFFBQU0sRUNGYixFQUFDLGdCQUFvQixDQUFBLE9BQU0sQUFBQyxhQUFrQixDQUN0QyxDQUFBLGlCQUFxQiwwQkFBMkIsQ0FBQSxpQkFBcUIsR0FBSyxFQUFDLE9BQU0sZ0JBQW1CLENBRDlELEFBQytELENBQUM7RURFdkcsR0FBQyxFQ0hSLEVBQUMsU0FBb0IsQ0FBQSxPQUFNLEFBQUMsTUFBa0IsQ0FDdEMsQ0FBQSxVQUFxQixtQkFBMkIsQ0FBQSxVQUFxQixHQUFLLEVBQUMsT0FBTSxTQUFtQixDQUQ5RCxBQUMrRCxDQUFDO0VER3ZHLGFBQVcsRUNKbEIsRUFBQywwQkFBb0IsQ0FBQSxPQUFNLEFBQUMsV0FBa0IsQ0FDdEMsQ0FBQSwyQkFBcUIsb0NBQTJCLENBQUEsMkJBQXFCLEdBQUssRUFBQyxPQUFNLDBCQUFtQixDQUQ5RCxBQUMrRCxDQUFDO0VESXZHLEdBQUMsRUNMUixFQUFDLFNBQW9CLENBQUEsT0FBTSxBQUFDLE1BQWtCLENBQ3RDLENBQUEsVUFBcUIsbUJBQTJCLENBQUEsVUFBcUIsR0FBSyxFQUFDLE9BQU0sU0FBbUIsQ0FEOUQsQUFDK0QsQ0FBQztFREt2RyxJQUFFLEVDTlQsRUFBQywwREFBb0IsQ0FBQSxPQUFNLEFBQUMseUJBQWtCLENBQ3RDLENBQUEsMkRBQXFCLG9FQUEyQixDQUFBLDJEQUFxQixHQUFLLEVBQUMsT0FBTSwwREFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztBRE85RyxNQUFNLEtBQUssRUFBSSxpQkFBZSxDQUFDO0FBQy9CLE1BQU0sUUFDRyxBQUFDLENBQUMsR0FBRSxRQUFRLENBQUMsTUFDZixBQUFDLENBQUMsb0JBQW1CLENBQUMsQ0FBQztBQUU5QixNQUFNLEdBQUcsQUFBQyxDQUFDLFFBQU8sQ0FBRyxVQUFRLEFBQUMsQ0FBRTtBQUM5QixBQUFJLElBQUEsQ0FBQSxJQUFHLEVBQUksQ0FBQSxJQUFHLE1BQU0sQ0FBQztBQUNyQixBQUFJLElBQUEsQ0FBQSxXQUFVLEVBQUksQ0FBQSxJQUFHLFVBQVUsQUFBQyxDQUFDLENBQUMsQ0FBQSxDQUFFLEVBQUMsQ0FBQSxDQUFFO0FBQUMsbUJBQVcsQ0FBRyxHQUFDO0FBQUcsbUJBQVcsQ0FBRyxHQUFDO0FBQUEsTUFBQyxDQUFDLENBQUMsQ0FBRyxLQUFHLENBQUcsT0FBSyxDQUFDLFFBQVEsQUFBQyxDQUFDLEtBQUksQ0FBRyxPQUFLLENBQUMsQ0FBQztBQUVuSCxRQUFNLElBQUksQUFBQyxDQUFDLGFBQVksQ0FBQyxDQUFDO0FBQzFCLFFBQU0sSUFBSSxBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDZixRQUFNLElBQUksQUFBQyxDQUFDLFFBQU8sRUFBSSxLQUFHLENBQUEsQ0FBSSxtQkFBaUIsQ0FBQSxDQUFJLFlBQVUsQ0FBQSxDQUFJLEtBQUcsQ0FBQyxDQUFDO0FBQ3RFLFFBQU0sSUFBSSxBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxNQUFNLEFBQUMsQ0FBQyxPQUFNLEtBQUssQ0FBQyxDQUFDO0FBRTNCLEFBQUksRUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLE9BQU0sS0FBSyxDQUFDO0FBRXZCLENBQUMsQUFBQyxDRTNCRixlQUFjLHNCQUFzQixBQUFDLENGMkJsQyxjQUFVLEFBQUM7OztBRzNCZCxPQUFPLENDQVAsZUFBYyx3QkRBVSxBQ0FjLENDQXRDLFNBQVMsSUFBRyxDQUFHO0FBQ1QsVUFBTyxJQUFHOzs7QUNBUixlQUFvQixDTjJCbkIsWUFBVyxBQUFDLENBQUMsSUFBRyxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsSUFBRyxNQUFNLEFBQUMsQ0FBQyxJQUFHLENBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDTTNCSixNQUFLLFNBQVMsQ0FBQyxBQUFDLEVBQUMsQ0FBQztBQUV4RCxhQUFHLEtBQUssRUFBSSxLQUFLLEVBQUEsQ0FBQztBQUVsQixhQUFHLE9BQU8sRUFBSSxPQUFLLENBQUM7Ozs7QUFHbEIsZUFBb0IsQ0FBQSxLQUFrQixJQUFHLE9BQU8sQ0FBQyxBQUFDLENBQUMsSUFBRyxnQkFBZ0IsQ0FBQyxDQUFDOzs7O0FDUmxGLGFBQUcsTUFBTSxFQUFJLENBQUEsQ0RTQyxTQUFxQixDQ1RKLFFBQXdDLENBQUM7QUFDaEUsZUFBSTs7QURTQSxhQUFHLEtBQUssRUFBSSxXQUFzQixDQUFDOzs7OztBRVYvQywyQkFBdUI7O0FDQXZCLGVBQU8sQ0FBQSxJQUFHLElBQUksQUFBQyxFQUFDLENBQUE7O0FKQ21CLEVBQy9CLE9GQTZCLEtBQUcsQ0FBQyxDQUFDO0FIMkJ0QyxDRTdCdUQsQ0Y2QnRELEFBQUMsRUFBQyxDQUFDO0FBQ0oiLCJmaWxlIjoiYmluXFxnaXQtdHJlZS1tYWtlci5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXNDb250ZW50IjpbIi8vIyEvdXNyL2Jpbi9lbnYgbm9kZSAtLWhhcm1vbnlcclxuXHJcbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBnaXRUcmVlTWFrZXIgZnJvbSAnLi4vbGliLyc7XHJcbmltcG9ydCBjbyBmcm9tICdjbyc7XHJcbmltcG9ydCBwa2cgZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcclxuXHJcbnByb2dyYW0ubmFtZSA9ICdnaXQtdHJlZS1tYWtlcic7XHJcbnByb2dyYW1cclxuICAudmVyc2lvbihwa2cudmVyc2lvbilcclxuICAudXNhZ2UoJzxkaXJlY3Rvcnk+IDx0cmVlPicpO1xyXG5cclxucHJvZ3JhbS5vbignLS1oZWxwJywgZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lO1xyXG4gIHZhciBleGFtcGxlVHJlZSA9IEpTT04uc3RyaW5naWZ5KHthOntiOntcImMuZmVhdHVyZTFcIjoge30sIFwiZC5mZWF0dXJlMlwiOiB7fX19fSwgbnVsbCwgJyAgICAnKS5yZXBsYWNlKC9cXG4vZywgJ1xcblxcdCcpO1xyXG5cclxuICBjb25zb2xlLmxvZygnICBFeGFtcGxlczonKTtcclxuICBjb25zb2xlLmxvZygnJyk7XHJcbiAgY29uc29sZS5sb2coJyAgICAkICcgKyBuYW1lICsgJyAvdG1wL2dpdHRyZWUgXFwnJyArIGV4YW1wbGVUcmVlICsgJ1xcJycpO1xyXG4gIGNvbnNvbGUubG9nKCcnKTtcclxufSk7XHJcblxyXG5wcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndik7XHJcblxyXG52YXIgYXJncyA9IHByb2dyYW0uYXJncztcclxuXHJcbmNvKGZ1bmN0aW9uICooKSB7XHJcbiAgeWllbGQgKmdpdFRyZWVNYWtlcihhcmdzWzBdLCBKU09OLnBhcnNlKGFyZ3NbMV0pKTtcclxufSkoKTtcclxuIiwiKCRfX3BsYWNlaG9sZGVyX18wID0gcmVxdWlyZSgkX19wbGFjZWhvbGRlcl9fMSksIFxuICAgICAgICAkX19wbGFjZWhvbGRlcl9fMiAmJiAkX19wbGFjZWhvbGRlcl9fMy5fX2VzTW9kdWxlICYmICRfX3BsYWNlaG9sZGVyX180IHx8IHtkZWZhdWx0OiAkX19wbGFjZWhvbGRlcl9fNX0pIiwiJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbigkX19wbGFjZWhvbGRlcl9fMCkiLCJyZXR1cm4gJF9fcGxhY2Vob2xkZXJfXzAoXG4gICAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18xLFxuICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMiwgdGhpcyk7IiwiJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlIiwiZnVuY3Rpb24oJGN0eCkge1xuICAgICAgd2hpbGUgKHRydWUpICRfX3BsYWNlaG9sZGVyX18wXG4gICAgfSIsIlxuICAgICAgICAkX19wbGFjZWhvbGRlcl9fMCA9ICRfX3BsYWNlaG9sZGVyX18xW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgLy8gcmVjZWl2ZWQgPSB2b2lkIDA7XG4gICAgICAgICRjdHguc2VudCA9IHZvaWQgMDtcbiAgICAgICAgLy8gc2VuZCA9IHRydWU7IC8vIHJvdWdobHkgZXF1aXZhbGVudFxuICAgICAgICAkY3R4LmFjdGlvbiA9ICduZXh0JztcblxuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzIgPSAkX19wbGFjZWhvbGRlcl9fM1skY3R4LmFjdGlvbl0oJGN0eC5zZW50SWdub3JlVGhyb3cpO1xuICAgICAgICAgIGlmICgkX19wbGFjZWhvbGRlcl9fNC5kb25lKSB7XG4gICAgICAgICAgICAkY3R4LnNlbnQgPSAkX19wbGFjZWhvbGRlcl9fNS52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fNjtcbiAgICAgICAgfSIsIiRjdHguc3RhdGUgPSAoJF9fcGxhY2Vob2xkZXJfXzApID8gJF9fcGxhY2Vob2xkZXJfXzEgOiAkX19wbGFjZWhvbGRlcl9fMjtcbiAgICAgICAgYnJlYWsiLCJyZXR1cm4gJF9fcGxhY2Vob2xkZXJfXzAiLCJyZXR1cm4gJGN0eC5lbmQoKSJdfQ==