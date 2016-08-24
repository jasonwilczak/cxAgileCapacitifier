'use strict';

import Utility from './utility';

export default class BaseProperty {
	constructor(elementId) {
		let element = Utility.getElement(elementId);
		this.get = () => {return parseInt(element.value);};
		this.set = (value) => {element.value= value;};
	}
}