function MainSetNavigationLinksDatePeriod(Class, Method, DateFrom, DateTo) {   
    //Set current date period on left menu urls, same for new and lost
    var Types = ['new', 'lost']; 
    for (var i = 0; i < Types.length; i++) {
    	var URL = $("#nav-left-site-explorer").find("a[data-nav-type='se_"+Class+"_"+Types[i]+"']").attr("href");
    	var URLArray = URL.split("/");
    	if (Class == 'backlinks') {
        	URLArray[8] = DateFrom;
        	URLArray[9] = DateTo;
    	}
    	else {
        	URLArray[7] = DateFrom;
        	URLArray[8] = DateTo;
        }
    	URL = URLArray.join("/");
    	$("#nav-left-site-explorer").find("a[data-nav-type='se_"+Class+"_"+Types[i]+"']").attr("href", URL);
    }
}
