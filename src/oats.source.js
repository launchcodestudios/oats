window.OATS = {};

(function(){
	"use strict";
	
	function setupAutoExpandTextareas () {
		document.querySelectorAll('.oats-common-autotextarea').forEach(function (el) {
			var height =  el.scrollHeight + 2,
				maxHeight = el.dataset.maxHeight;

			if (height < 50) {
				height = 50;
			}
			
			// Set height according to any content in it already.
			el.style.height = (Math.min(maxHeight, height) + 2) + 'px';
			
			el.addEventListener('input', function () {
				var height = el.scrollHeight;
				el.style.height = (Math.min(maxHeight, height) + 2) + 'px';
			});
		});
	}
	
	function onReady (fn) {
		if (document.readyState !== 'loading') {
			fn();
			return;
		}
		document.addEventListener('DOMContentLoaded', fn);
	}
	window.OATS.onReady = onReady;


	window.OATS.onReady(function () {
		setupAutoExpandTextareas();
	});
	
})();