(function() {
	var hasTouch = 'ontouchstart' in window;
	var anchors = document.querySelectorAll('a');

	for (var i = 0; i < anchors.length; i++) {
		(hasTouch ? anchors[i].classList.add('touch') : anchors[i].classList.add('hover'))
	}
})();