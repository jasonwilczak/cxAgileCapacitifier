/* globals document */
'use strict';

export default class Utility {
	static getElement(elementId) {
		console.log(elementId);
		return document.getElementById(elementId);
	}    
}