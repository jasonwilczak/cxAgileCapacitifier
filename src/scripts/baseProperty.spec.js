/* globals describe, beforeEach, it, expect, afterEach */

'use strict';
import BaseProperty from './baseProperty.js';

describe('BaseProperty class', function() {
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
	});
});