'use strict';

import Utility from './utility.js';
import ViewModel from './viewModel.js';

function popup() {
	var viewModel = new ViewModel();
	function onCalculateClick() {
		viewModel.calculate();
		viewModel.save();
		return false;
	}
	function setStartingInputs() {
		if (viewModel.isLoaded) return;
		viewModel.initialize();
		onCalculateClick();
		viewModel.isLoaded = true;
	}
	function init() {
		setStartingInputs();
		var calculateButton = Utility.getElement('calculate');
		calculateButton.addEventListener('click', onCalculateClick, false);
	}
	init();
}

export default popup();

