
'use strict';

export default class Utility {
	static getElement(elementId) {
		switch(elementId) {
		case 'daysPerIteration':
			return {id:elementId,value:10};
		case 'workHoursPerDay':
			return {id:elementId,value:6};
		case 'holidaysThisIteration':
			return {id:elementId,value:0};
		case 'ptoThisIteration':
			return {id:elementId,value:0};
		case 'allocationPercentage':
			return {id:elementId,value:100};
		case 'capacityResult':
			return {id:elementId,value:60};
		default:
			return {id:elementId,value:1};
		}
		
	}    
}