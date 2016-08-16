(function () {
  var isLoaded = false;
  var viewModel = {
    iterationDays: getBasePropertyType('daysPerIteration'),
    workHours: getBasePropertyType('workHoursPerDay'),
    holidays: getBasePropertyType('holidaysThisIteration'),
    pto: getBasePropertyType('ptoThisIteration'),
    allocation: getBasePropertyType('allocationPercentage'),
    capacity: getBasePropertyType('capacityResult')
  };
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
    }
  }
  function getElement(elementId) {
    return document.getElementById(elementId);
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
  }
  function setStartingInputs() {
    if (isLoaded) return;
    //check localstorage
    viewModel.iterationDays.set('10');
    viewModel.holidays.set('0');
    viewModel.pto.set('0');
    viewModel.workHours.set('6');
    viewModel.allocation.set('100');
    onCalculateClick();
    isLoaded = true;
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

