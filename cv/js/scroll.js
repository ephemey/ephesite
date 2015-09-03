$(document).ready(function () {
	var data = [{
	    value: 35,
	    color: "#F38630",
	    label : 'Placeholder',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}, {
	    value: 12,
	    color: "#E0E4CC",
	    label : 'Placeholder',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}, {
	    value: 23,
	    color: "#69D2E7",
	    label : 'Placeholder',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'

    }, {
	    value: 30,
	    color: "#6666FF",
	    label : 'Placeholder',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}];
	
	var data2 = [{
	    value: 35,
	    color: "#F38630",
	    label : 'Section 4',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}, {
	    value: 30,
	    color: "#E0E4CC",
	    label : 'Section 5',
        labelColor : 'white',
        labelFontSize : '10',
        labelAlign : 'left'
	}, {
	    value: 35,
	    color: "#69D2E7",
	    label : 'Section 6',
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