/* globals describe, beforeEach, it, expect, afterEach */

'use strict';
import BaseProperty from './baseProperty.js';

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
		const basePropertyInstance = new BaseProperty('test1');
		expect(basePropertyInstance).toBeDefined();
		expect(basePropertyInstance.get()).toBe(1);
		basePropertyInstance.set(2);
		expect(basePropertyInstance.get()).toBe(2);
	});
	it('should be update the getter on setting', function() {
      //spec body
		const basePropertyInstance = new BaseProperty('test1');
		basePropertyInstance.set(2);
		expect(basePropertyInstance.get()).toBe(2);
	});
});