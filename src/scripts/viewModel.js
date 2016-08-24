'use strict';

import BaseProperty from './baseProperty';

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
}