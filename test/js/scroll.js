$(document).ready(function () {
	var data = [{
	    value: 55,
	    color: "#F38630",
	    label : 'PHP, MVC & Backend',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}, {
	    value: 30,
	    color: "#E0E4CC",
	    label : 'HTML and CSS',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}, {
	    value: 15,
	    color: "#69D2E7",
	    label : 'Javascript',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}];
	
	var data2 = [{
	    value: 35,
	    color: "#F38630",
	    label : 'Ruby on rails',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}, {
	    value: 30,
	    color: "#E0E4CC",
	    label : 'HTML5 and CSS3',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}, {
	    value: 35,
	    color: "#69D2E7",
	    label : 'CSS3 and jQuery animations',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}];
	var webinView = false;
	var newinView = false;
	$(window).scroll(function(){
		 if(isElementInViewport("#web")) {
		 	if (webinView) { return; }
        	webinView = true;
		 	new Chart(document.getElementById("web").getContext("2d")).Doughnut(data);
		 } else {
        	webinView = false;  
    	}
	});
	function isElementInViewport(elem) {
	    var $elem = $(elem);
	
	    // Get the scroll position of the page.
	    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
	    var viewportTop = $(scrollElem).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();
	
	    // Get the position of the element on the page.
	    var elemTop = Math.round( $elem.offset().top );
	    var elemBottom = elemTop + $elem.height();
	
	    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
	}
	
});