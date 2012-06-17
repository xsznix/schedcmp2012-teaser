// Facebook
(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

// Google+
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// Hyphenation
Hyphenator.config({
	displaytogglebox : false,
	minwordlength : 4
});
Hyphenator.run();

// show social reminder when user comes back
function showSocRem() {
	// set focus event
	$(window).bind('focus', _socRemHighlightFadeOut);
}

// fade out social reminder highlight
function _socRemHighlightFadeOut() {
	// scroll down to show social bar
	$('html,body').delay(200)
		.animate({scrollTop: Math.min($('#social').offset().top - 40, $(document).height() - $(window).height())}, 1000);
	// show social reminder
	$('#soc-reminder').delay(210).fadeIn(2000);
	// show and then hide highlight
	$('#social').delay(210).animate({backgroundColor: 'rgba(255, 255, 68, 1)'}, 200)
		.delay(1000).animate({backgroundColor: 'rgba(255, 255, 68, 0)'}, 2000);
	// unset focus event
	$(window).unbind('focus', _socRemHighlightFadeOut);
}

// if necessary, scroll down to show email entry area
function _scrollToEmail() {
	var offset = $('#disc').offset().top + $('#disc').height() - $(window).height() - $(window).scrollTop();
	if (offset > 0) {
		$('html, body').animate({scrollTop: offset}, 1000);
	}
}
$(function(){
	window.setTimeout(_scrollToEmail, 1000);
});
