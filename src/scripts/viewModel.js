/* globals localStorage*/

'use strict';

import BaseProperty from './baseProperty.js';

export default class ViewModel {
	constructor() {
		this.iterationDays = new BaseProperty('daysPerIteration');
		this.workHours = new BaseProperty('workHoursPerDay');
		this.holidays = new BaseProperty('holidaysThisIteration');
		this.pto = new BaseProperty('ptoThisIteration');
		this.allocation = new BaseProperty('allocationPercentage');
		this.capacity = new BaseProperty('capacityResult');
		this.isLoaded = false;
	}		
	save() {
		localStorage.setItem('iterationDays', this.iterationDays.get());
		localStorage.setItem('holidays', this.holidays.get());
		localStorage.setItem('pto', this.pto.get());
		localStorage.setItem('workHours', this.workHours.get());
		localStorage.setItem('allocation', this.allocation.get());
	}
	calculate() {
		var itDays = this.iterationDays.get();
		var holidays = this.holidays.get();
		var pto = this.pto.get();
		var workingIterationDays = (itDays - holidays - pto);
		workingIterationDays = workingIterationDays > 0 ? workingIterationDays : 0;
		var workHours = this.workHours.get();
		var workingHours = workingIterationDays * workHours;
		var allocation = this.allocation.get();
		var capacityAvailable = (workingHours * allocation) / 100;
		this.capacity.set(capacityAvailable + 'hrs');
	}
	initialize() {
		this.iterationDays.set(localStorage.getItem('iterationDays') || '10');
		this.holidays.set(localStorage.getItem('holidays') || '0');
		this.pto.set(localStorage.getItem('pto') || '0');
		this.workHours.set(localStorage.getItem('workHours') || '6');
		this.allocation.set(localStorage.getItem('allocation') || '100');
	}
}