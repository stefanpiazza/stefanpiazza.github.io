var css = require('../scss/styles.scss');
var gsap = require('gsap');

var timeline = new TimelineMax({ paused: true, onComplete: function() {
	this.kill();
	timeline = null;
} });

timeline
	.staggerFrom('.text-1 .letter', 0.75, { opacity: 0, yPercent: 150, ease: Elastic.easeOut.config(1, 0.75) }, 0.08 )
	.staggerTo('.text-1 .letter', 0.75, { opacity: 0, yPercent: 150, ease: Elastic.easeIn.config(1, 0.75) }, 0.08 )

	.staggerFrom('.text-2 .letter', 0.75, { opacity: 0, yPercent: -150, ease: Elastic.easeOut.config(1, 0.75) }, 0.08)
	.staggerFrom('.text-3 .letter', 0.75, { opacity: 0, xPercent: -150, rotationZ: -45, ease: Elastic.easeOut.config(1, 0.75) }, -0.08)

	.add('content-2-exit', '+=0.1')

	.staggerTo('.text-2 .letter', 0.5, { opacity: 0, xPercent: -150, ease: Power4.easeIn }, 0.04, 'content-2-exit')
	.staggerTo('.text-3 .letter', 0.5, { opacity: 0, xPercent: 150, ease: Power4.easeIn }, -0.04, 'content-2-exit')

	.add('content-3-enter', '+=0.1')

	.staggerFrom('.text-4 .letter', 0.75, { opacity: 0, xPercent: 150, skewX: -45, ease: Elastic.easeOut.config(1, 0.75) }, 0.08, 'content-3-enter' )
	.staggerFrom('.text-5 .letter', 0.75, { opacity: 0, yPercent: 150, ease: Elastic.easeOut.config(1, 0.75) }, 0.04, 'content-3-enter' )
	.staggerFrom('.text-6 .letter', 0.75, { opacity: 0, yPercent: -150, ease: Elastic.easeOut.config(1, 0.75) }, 0.04, 'content-3-enter' )

	.add('content-3-exit', '+=0.1')

	.to('.text-6 .letter', 0.75, { opacity: 0, yPercent: 150, ease: Power4.easeIn }, 'content-3-exit' )
	.to('.text-5 .letter', 0.75, { opacity: 0, yPercent: 150, ease: Power4.easeIn }, '-=0.6' )
	.to('.text-4 .letter', 0.75, { opacity: 0, yPercent: 150, ease: Power4.easeIn }, '-=0.6' )

	.add('content-4-enter', '+=0.2')

	.set('.content-4', { css: { perspective: window.innerWidth/2 + 'px' } } )

	.from('.text-7', 0.75, { opacity: 0, rotationY: -90, transformOrigin: 'left', ease: Power4.easeOut }, 'content-4-enter' )
	.from('.text-8', 0.75, { opacity: 0, rotationY: 90, transformOrigin: 'right', ease: Power4.easeOut }, '-=0.65' )
	.from('.text-9', 0.75, { opacity: 0, rotationY: 90, transformOrigin: 'right', ease: Power4.easeOut }, '-=0.65' )
	.from('.text-10', 0.75, { opacity: 0, rotationY: -90, transformOrigin: 'left', ease: Power4.easeOut }, '-=0.65' )

	.add('content-4-exit', '+=1')

	.to('.text-7', 0.75, { opacity: 0, xPercent: 50, ease: Power4.easeIn }, 'content-4-exit' )
	.to('.text-8', 0.75, { opacity: 0, xPercent: -50, ease: Power4.easeIn }, '-=0.65' )
	.to('.text-9', 0.75, { opacity: 0, xPercent: 50, ease: Power4.easeIn }, '-=0.65' )
	.to('.text-10', 0.75, { opacity: 0, xPercent: -50, ease: Power4.easeIn }, '-=0.65' )

	.add('content-5-enter', '+=0.1')

	.staggerFrom('.text-11 .letter', 0.75, { opacity: 0, ease: Power4.easeInOut }, 0.04, 'content-5-enter' )
	.staggerFrom('.text-12 .letter', 0.75, { opacity: 0, ease: Power4.easeInOut }, 0.04, '-=0.65' )
	.staggerFrom('.text-13 .letter', 0.75, { opacity: 0, ease: Power4.easeInOut }, 0.04, '-=0.65' )

	.add('content-5-exit', '+=0.5')

	.to('.section', 1.75, { yPercent: -100, ease: Power4.easeInOut }, 'content-5-exit' )

	.from('.ring', 1.75, { opacity: 0, ease: Power4.easeInOut } )
	.from(['.circle-wrapper-2', '.circle-wrapper-3', '.circle-wrapper-4'], 1.75, { opacity: 0, rotationZ: 180, ease: Power4.easeInOut, clearProps: 'all' }, '-=1.75' )

window.addEventListener('load', function() {
	document.body.classList.remove('is-loading');
	timeline.play(0);
});