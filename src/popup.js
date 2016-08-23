(function () {
	var viewModel = buildViewModel();
	function getBasePropertyType(elementId) {
		return {
			get: function () {
				var element = getElement(elementId);
				return parseInt(element.value);
			},
			set: function (value) {
				var element = getElement(elementId);
				element.value = value;
			}
		};
	}
	function getElement(elementId) {
		return document.getElementById(elementId);
	}
	function buildViewModel() {
		return {
			iterationDays: getBasePropertyType('daysPerIteration'),
			workHours: getBasePropertyType('workHoursPerDay'),
			holidays: getBasePropertyType('holidaysThisIteration'),
			pto: getBasePropertyType('ptoThisIteration'),
			allocation: getBasePropertyType('allocationPercentage'),
			capacity: getBasePropertyType('capacityResult'),
			isLoaded: false
		};
	}
	function onCalculateClick() {
		var itDays = viewModel.iterationDays.get();
		var holidays = viewModel.holidays.get();
		var pto = viewModel.pto.get();
		var workingIterationDays = (itDays - holidays - pto);
		workingIterationDays = workingIterationDays > 0 ? workingIterationDays : 0;
		var workHours = viewModel.workHours.get();
		var workingHours = workingIterationDays * workHours;
		var allocation = viewModel.allocation.get();
		var capacityAvailable = (workingHours * allocation) / 100;
		viewModel.capacity.set(capacityAvailable + 'hrs');
		saveDataToLocalStorage();
		return false;
	}
	function saveDataToLocalStorage() {
		localStorage.setItem('iterationDays', viewModel.iterationDays.get());
		localStorage.setItem('holidays', viewModel.holidays.get());
		localStorage.setItem('pto', viewModel.pto.get());
		localStorage.setItem('workHours', viewModel.workHours.get());
		localStorage.setItem('allocation', viewModel.allocation.get());
	}
	function setStartingInputs() {
		if (viewModel.isLoaded) return;
		viewModel.iterationDays.set(localStorage.getItem('iterationDays') || '10');
		viewModel.holidays.set(localStorage.getItem('holidays') || '0');
		viewModel.pto.set(localStorage.getItem('pto') || '0');
		viewModel.workHours.set(localStorage.getItem('workHours') || '6');
		viewModel.allocation.set(localStorage.getItem('allocation') || '100');
		onCalculateClick();
		viewModel.isLoaded = true;
	}
	function init() {
		document.addEventListener('DOMContentLoaded', function () {
			setStartingInputs();
			var calculateButton = getElement('calculate');
			calculateButton.addEventListener('click', onCalculateClick, false);
		}, false);
	}
	init();
})();

