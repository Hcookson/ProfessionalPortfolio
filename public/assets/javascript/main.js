$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#test',
		duration: '90%',
        triggerHook: .79,
	})
	.setClassToggle('#test', 'fade-in') // add class to project01
	// .addIndicators({
	// 	name: 'fade scene',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) // this requires a plugin
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#test-2',
		duration: '90%',
        triggerHook: .79,
	})
	.setClassToggle('#test-2', 'fade-in') // add class to project01
	// .addIndicators({
	// 	name: 'fade scene',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) // this requires a plugin
	.addTo(controller);
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#test-3',
		duration: '90%',
        triggerHook: .79,
	})
	.setClassToggle('#test-3', 'fade-in') // add class to project01
	// .addIndicators({
	// 	name: 'fade scene',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// }) // this requires a plugin
    .addTo(controller);
    
});







