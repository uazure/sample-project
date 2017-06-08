var app = angular.module('app', []);

// app component
app.component('app', {
	template: '\
	<controls target-temperature="$ctrl.targetTemperature">Loading...</controls> \
	<target target-temperature="$ctrl.targetTemperature">Loading...</target>',
	controller: function() {
		this.targetTemperature = 22;
	}
});

app.component('controls', {
	templateUrl: 'partial/controls.html',
	bindings: {
		targetTemperature: '='
	},
	controller: function() {
		this.change = function(step) {
			this.targetTemperature += step;
		}
	}
});

app.component('target', {
	templateUrl: 'partial/currentTemperature.html',
	bindings: {
		targetTemperature: '<'
	},
	controller: ['$scope', '$interval', function($scope, $interval) {
		var P = Math.PI;

		$scope.$watch('$ctrl.targetTemperature', function(newVal, oldVal) {
			console.log('targetChanged', newVal, 'was', oldVal);
			if (oldVal == newVal) {
				this.currentTemperature = newVal;
			}
		}.bind(this));

		$interval(update.bind(this), 1000);

		function update() {
			var delta = this.targetTemperature - this.currentTemperature;
			var adjustment = delta / P;
			this.currentTemperature += adjustment;
		}


	}]
});
