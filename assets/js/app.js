const ccña = new fullpage ("#fullpage", {

    autoScrolling: true, 
    fitToSection: false, 
	fitToSectionDelay: 300, 
	easing: 'easeInOutCubic', 
	scrollingSpeed: 200, 
	css3: true, 
	easingcss3: 'ease-out', 
    loopBottom: true, 
    

    sectionsColor : ['#000', '#000000', '#000'],
    

    
});

//adding the action to the button
$(document).on('click', '#moveDown', function(){
    fullpage_api.moveSectionDown();
  });