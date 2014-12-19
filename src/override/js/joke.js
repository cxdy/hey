var is_fc_loaded = 0;
(function() {

// Localize jQuery variable
var jqxhr;
var jQuery;
var get_joke = 'http://www.laughfactory.com/';
/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.8.3') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
			  if($.ui === undefined || $.ui.version !== '1.8.18'){
				 var script_tag_ui = document.createElement('script');
				script_tag_ui.setAttribute("type","text/javascript");
				script_tag_ui.setAttribute("src",
					"https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js");
				if (script_tag_ui.readyState) {
				  script_tag_ui.onreadystatechange = function () { // For old versions of IE
					  if (this.readyState == 'complete' || this.readyState == 'loaded') {
						  //scriptLoadHandler();
						  alert($.ui.version);
					  }
				  };
				} else {
				  //script_tag.onload = scriptLoadHandler;
				}
				// Try to find the head, otherwise default to the documentElement
				(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag_ui);
			  }
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
	
	if($.ui === undefined || $.ui.version !== '1.8.18'){
		 var script_tag = document.createElement('script');
		script_tag.setAttribute("type","text/javascript");
		script_tag.setAttribute("src",
			"https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js");
		if (script_tag.readyState) {
		  script_tag.onreadystatechange = function () { // For old versions of IE
			  if (this.readyState == 'complete' || this.readyState == 'loaded') {
				  //scriptLoadHandler();
				  alert($.ui.version);
			  }
		  };
		} else {
		  //script_tag.onload = scriptLoadHandler;
		}
		// Try to find the head, otherwise default to the documentElement
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	}
	
    jQuery = window.jQuery;
	var script_tag_fc = document.createElement('script');
		script_tag_fc.setAttribute("type","text/javascript");
		script_tag_fc.setAttribute("src",
			get_joke+"js/facescroll.js");
		if (script_tag_fc.readyState) {
		  script_tag_fc.onreadystatechange = function () { // For old versions of IE
			  if (this.readyState == 'complete' || this.readyState == 'loaded') {
				  //scriptLoadHandler();
				  //alert($.ui.version);
			  }
		  };
		} else {
		  //script_tag.onload = scriptLoadHandler;
		}
		// Try to find the head, otherwise default to the documentElement
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag_fc);
    getJokeOfTheDay();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    getJokeOfTheDay(); 
}

/******** Our main function ********/
function getJokeOfTheDay() {
	  
    jQuery(document).ready(function($) {
		 
		$("#joke-widget-container").html('');
        /******* Load HTML *******/
        var jsonp_url = get_joke+"home/getJokeoftheDay/?callback=?";
        jqxhr = $.getJSON(jsonp_url, function(data) {
			var html = '';
			if(data){
				html = '<span class="joke"><p>'+data.joke_text+'</p></span>';
			}
          $('#joke-widget-container').html(html);
        }).done(function() {});
    });
}
setTimeout('updateScr()',50);
})(); // We call our anonymous function immediately
