(function(){
  var viewModel = {
    iterationDays: getBasePropertyType('daysPerIteration'),
    workHours: getBasePropertyType('workHoursPerDay'),
    holidays: getBasePropertyType('holidaysThisIteration'),
    pto: getBasePropertyType('ptoThisIteration'),
    allocation: getBasePropertyType('allocatoinPercentage'),
    capacity: getBasePropertyType('capacityHours')
  };
  function getBasePropertyType(elementId) {
    return {
      get: function () {
        var element = getElement(elementId);
        return ParseInt(element.value);
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
    var workingIterationDays = (viewModel.iterationDays.get() - viewModel.holidays.get() - viewModel.pto.get());
    workingIterationDays = workingIterationDays > 0 ? workingIterationDays : 0;
    var workingHours = workingIterationDays * viewModel.workHours.get();
    var percentageAvailable = (workingHours * viewModel.allocation.get()) / 100;
    viewModel.capacity.set(percentageAvailable);
  }
document.addEventListener('DOMContentLoaded', function () {
  
  function init() {
    var calculateButton = getElement('calculate');
    calculateButton.addEventListener('click', onCalculateClick, false);
  }
  init();
}, false);
})();

