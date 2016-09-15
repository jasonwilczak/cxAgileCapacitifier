/* globals describe, beforeEach, it, expect, afterEach */

'use strict';
import ViewModel from './viewModel.js';

describe('BaseProperty class', ()=> {

	//let BaseProperty;
	beforeEach(()=>{
        //need to be able to mock out imports
	});

	afterEach(() => {
		//cleanup
	});

	it('should be defined on new instance', function() {
      //spec body
		const vmInstance = new ViewModel();
		expect(vmInstance).toBeDefined();
		expect(vmInstance.iterationDays).toBeDefined();
		expect(vmInstance.workHours).toBeDefined();
		expect(vmInstance.holidays).toBeDefined();
		expect(vmInstance.pto).toBeDefined();
		expect(vmInstance.allocation).toBeDefined();
		expect(vmInstance.capacity).toBeDefined();
		expect(vmInstance.isLoaded).toBeDefined();
	});
	it('should be have the correct default values new instance', function() {
      //spec body
		const vmInstance = new ViewModel();
		expect(vmInstance.iterationDays.get()).toBe(10);
		expect(vmInstance.workHours.get()).toBe(6);
		expect(vmInstance.holidays.get()).toBe(0);
		expect(vmInstance.pto.get()).toBe(0);
		expect(vmInstance.allocation.get()).toBe(100);
		expect(vmInstance.capacity.get()).toBe(60);
		expect(vmInstance.isLoaded).toBe(false);
	});
	it('should calculate the correct capacity', function() {
      //spec body
		const vmInstance = new ViewModel();
		vmInstance.capacity.set(0);
		expect(vmInstance.capacity.get()).toBe(0);
		vmInstance.calculate();
		expect(vmInstance.capacity.get()).toBe(60);		
	});
});