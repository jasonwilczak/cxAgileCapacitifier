!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,u=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var l=0;l<i.dependencies.length;++l)i.dependencies[l]===o&&i.setters[l](a)}return o.locked=!1,r},r.name);o.setters=u.setters,o.execute=u.execute;for(var s=0,d=r.normalizedDeps.length;d>s;s++){var f,c=r.normalizedDeps[s],v=l[c],m=p[c];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=i(c),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[s]&&o.setters[s](f)}}}function o(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(d)for(var n in r)"default"!==n&&a(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,c(t,"__useDefault",{value:!0}),t}function a(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&c(e,t,n)}catch(o){return e[t]=r[t],!1}}function u(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(l[d]?u(d,t):i(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function i(e){if(m[e])return m[e];if("@node/"==e.substr(0,6))return m[e]=o(v(e.substr(6)));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),u(e,[]),l[e]=void 0,r.declarative&&c(r.module.exports,"__esModule",{value:!0}),m[e]=r.declarative?r.module.exports:r.esModule}var l={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},d=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(f){d=!1}var c;!function(){try{Object.defineProperty({},"a",{})&&(c=Object.defineProperty)}catch(e){c=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var p={},v="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,m={"@empty":{}};return function(e,t,n,a){return function(u){u(function(u){for(var l=0;l<t.length;l++)(function(e,r){r&&r.__esModule?m[e]=r:m[e]=o(r)})(t[l],arguments[l]);a({register:r});var s=i(e[0]);if(e.length>1)for(var l=1;l<e.length;l++)i(e[l]);return n?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      });
    }
  };
});
$__System.register("3", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }());
    }
  };
});
/* globals document */
'use strict';

$__System.register('4', ['2', '3'], function (_export, _context) {
	"use strict";

	var _classCallCheck, _createClass, Utility;

	return {
		setters: [function (_) {
			_classCallCheck = _.default;
		}, function (_2) {
			_createClass = _2.default;
		}],
		execute: function () {
			Utility = function () {
				function Utility() {
					_classCallCheck(this, Utility);
				}

				_createClass(Utility, null, [{
					key: 'getElement',
					value: function getElement(elementId) {
						return document.getElementById(elementId);
					}
				}]);

				return Utility;
			}();

			_export('default', Utility);
		}
	};
});
'use strict';

$__System.register('5', ['2', '4'], function (_export, _context) {
	"use strict";

	var _classCallCheck, Utility, BaseProperty;

	return {
		setters: [function (_) {
			_classCallCheck = _.default;
		}, function (_2) {
			Utility = _2.default;
		}],
		execute: function () {
			BaseProperty = function BaseProperty(elementId) {
				_classCallCheck(this, BaseProperty);

				var element = Utility.getElement(elementId);
				this.get = function () {
					return parseInt(element.value);
				};
				this.set = function (value) {
					element.value = value;
				};
			};

			_export('default', BaseProperty);
		}
	};
});
/* globals localStorage*/

'use strict';

$__System.register('6', ['2', '3', '5'], function (_export, _context) {
	"use strict";

	var _classCallCheck, _createClass, BaseProperty, ViewModel;

	return {
		setters: [function (_) {
			_classCallCheck = _.default;
		}, function (_2) {
			_createClass = _2.default;
		}, function (_3) {
			BaseProperty = _3.default;
		}],
		execute: function () {
			ViewModel = function () {
				function ViewModel() {
					_classCallCheck(this, ViewModel);

					this.iterationDays = new BaseProperty('daysPerIteration');
					this.workHours = new BaseProperty('workHoursPerDay');
					this.holidays = new BaseProperty('holidaysThisIteration');
					this.pto = new BaseProperty('ptoThisIteration');
					this.allocation = new BaseProperty('allocationPercentage');
					this.capacity = new BaseProperty('capacityResult');
					this.isLoaded = false;
				}

				_createClass(ViewModel, [{
					key: 'save',
					value: function save() {
						localStorage.setItem('iterationDays', this.iterationDays.get());
						localStorage.setItem('holidays', this.holidays.get());
						localStorage.setItem('pto', this.pto.get());
						localStorage.setItem('workHours', this.workHours.get());
						localStorage.setItem('allocation', this.allocation.get());
					}
				}, {
					key: 'calculate',
					value: function calculate() {
						var itDays = this.iterationDays.get();
						var holidays = this.holidays.get();
						var pto = this.pto.get();
						var workingIterationDays = itDays - holidays - pto;
						workingIterationDays = workingIterationDays > 0 ? workingIterationDays : 0;
						var workHours = this.workHours.get();
						var workingHours = workingIterationDays * workHours;
						var allocation = this.allocation.get();
						var capacityAvailable = workingHours * allocation / 100;
						this.capacity.set(capacityAvailable + 'hrs');
					}
				}, {
					key: 'initialize',
					value: function initialize() {
						this.iterationDays.set(localStorage.getItem('iterationDays') || '10');
						this.holidays.set(localStorage.getItem('holidays') || '0');
						this.pto.set(localStorage.getItem('pto') || '0');
						this.workHours.set(localStorage.getItem('workHours') || '6');
						this.allocation.set(localStorage.getItem('allocation') || '100');
					}
				}]);

				return ViewModel;
			}();

			_export('default', ViewModel);
		}
	};
});
'use strict';

$__System.register('1', ['4', '6'], function (_export, _context) {
	"use strict";

	var Utility, ViewModel;


	function popup() {
		var viewModel = new ViewModel();
		function onCalculateClick() {
			viewModel.calculate();
			viewModel.save();
			return false;
		}
		function setStartingInputs() {
			if (viewModel.isLoaded) return;
			viewModel.initialize();
			onCalculateClick();
			viewModel.isLoaded = true;
		}
		function init() {
			setStartingInputs();
			var calculateButton = Utility.getElement('calculate');
			calculateButton.addEventListener('click', onCalculateClick, false);
		}
		init();
	}

	return {
		setters: [function (_) {
			Utility = _.default;
		}, function (_2) {
			ViewModel = _2.default;
		}],
		execute: function () {
			_export('default', popup());
		}
	};
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=popup.js.map