(function() {
	var hasTouch = 'ontouchstart' in window;
	var anchors = document.querySelectorAll('a');
	var lazyLoadQueue = document.querySelectorAll('.lazy-load');
	var lazyLoadCache = {};

	for (var i = 0; i < anchors.length; i++) {
		(hasTouch ? anchors[i].classList.add('touch') : anchors[i].classList.add('hover'))
	}

	for (var i = 0; i < lazyLoadQueue.length; i++) {
		lazyLoadCache[lazyLoadQueue[i].getAttribute('data-original')] = lazyLoadQueue[i];
	}

	for (var i in lazyLoadCache) {
		var image = new Image();
		image.addEventListener('load', function() {
			lazyLoadCache[this.getAttribute('src')].classList.add('lazy-loaded');
		});
		image.src = i;
	}

	var angleX, 
		angleY,
		angleXNormalised,
		angleYNormalised,
		image = document.querySelector('.sp-background__wrapper'),
		maxDistance = (hasTouch ? 10 : 5),
    	maxRotation = 40;

    window.addEventListener('mousemove', function(event) {
        angleX = (window.innerWidth/2) - event.clientX;
        angleY = (window.innerHeight/2) - event.clientY;

        angleXNormalised = (angleX / (window.innerWidth/maxDistance));
        angleYNormalised = (angleY / (window.innerHeight/maxDistance));

        image.style.transform = 'translate3d(' + (angleXNormalised) + '%, ' + (angleYNormalised) + '%, 0)';   
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

        image.style.transform = 'translate3d(' + (angleXNormalised) + '%, ' + (0) + '%, 0)';     
	}.bind(this));    
})();