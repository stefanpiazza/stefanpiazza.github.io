(function() {
	var hasTouch = 'ontouchstart' in window;
	var anchors = document.querySelectorAll('a');
	var lazyLoad = document.querySelectorAll('.lazy-load');
	var hidden = document.querySelectorAll('.hidden');

	for (var i = 0; i < anchors.length; i++) {
		(hasTouch ? anchors[i].classList.add('touch') : anchors[i].classList.add('hover'))
	}

	var angleX, 
		angleY,
		angleXNormalised,
		angleYNormalised,
		image = document.querySelector('.sp-background__wrapper'),
		parallax_layers = document.querySelectorAll('.sp-parallax__layer'),
		maxDistance = (hasTouch ? 10 : 5),
    	maxRotation = 40;

    window.addEventListener('mousemove', function(event) {
        angleX = (window.innerWidth/2) - event.clientX;
        angleY = (window.innerHeight/2) - event.clientY;

        angleXNormalised = (angleX / (window.innerWidth/maxDistance));
        angleYNormalised = (angleY / (window.innerHeight/maxDistance));

        vendorPrefix(image, 'Transform', 'translate3d(' + (angleXNormalised/3) + '%, ' + (angleYNormalised/4) + '%, 0)');
        vendorPrefix(parallax_layers[2], 'Transform', 'translate3d(' + (angleXNormalised/3) + '%, ' + (angleYNormalised/3) + '%, 0)');
        vendorPrefix(parallax_layers[1], 'Transform', 'translate3d(' + (angleXNormalised/2) + '%, ' + (angleYNormalised/2) + '%, 0)');
        vendorPrefix(parallax_layers[0], 'Transform', 'translate3d(' + (angleXNormalised) + '%, ' + (angleYNormalised) + '%, 0)');
    }.bind(this));

    window.addEventListener('deviceorientation', function(event) {
		angleX = (window.innerWidth > window.innerHeight ? event.beta : event.gamma);
        angleY = (window.innerWidth > window.innerHeight ? event.gamma : event.beta);

    	if (window.orientation === -90) { angleX = angleX * -1; }		
    	if (window.orientation === 90) { angleY = angleY * -1; }		
       
        if (angleX <= -maxRotation) { angleX = -maxRotation; }  
        else if (angleX >= maxRotation) { angleX = maxRotation; }
        
        if (angleY <= -maxRotation) { angleY = -maxRotation; }   
        else if (angleY >= maxRotation) { angleY = maxRotation; }

        angleXNormalised = angleX / (maxRotation/maxDistance*2);
        angleYNormalised = angleY / (maxRotation/maxDistance*2);
        
        vendorPrefix(image, 'Transform', 'translate3d(' + (angleXNormalised/3) + '%, ' + (angleYNormalised/4) + '%, 0)');
        vendorPrefix(parallax_layers[2], 'Transform', 'translate3d(' + (angleXNormalised/3) + '%, ' + (angleYNormalised/3) + '%, 0)');
        vendorPrefix(parallax_layers[1], 'Transform', 'translate3d(' + (angleXNormalised/2) + '%, ' + (angleYNormalised/2) + '%, 0)');
        vendorPrefix(parallax_layers[0], 'Transform', 'translate3d(' + (angleXNormalised) + '%, ' + (angleYNormalised) + '%, 0)');
	}.bind(this));  

	window.addEventListener('load', function() {
		for (var i = 0; i < lazyLoad.length; i++) {
			lazyLoad[i].classList.add('lazy-loaded');
		}

		for (var i = 0; i < hidden.length; i++) {
			hidden[i].classList.remove('hidden');
		}
	}.bind(this));
})();

function vendorPrefix(element, property, value) {
	element.style[property] = value;
	element.style["webkit" + property] = value;
	element.style["moz" + property] = value;
	element.style["ms" + property] = value;
	element.style["o" + property] = value;
}