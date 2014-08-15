/* utf-8 */

/* ===========================================
 * Original JS
=========================================== */

( function( doc, script ) {
	var js;
	var fjs = doc.getElementsByTagName( script )[0];
	var add = function( url, id, o ) {
		if ( doc.getElementById( id ) ) { return; }
		js = doc.createElement( script );
		js.src = url; js.async = true; js.id = id;
		fjs.parentNode.insertBefore( js, fjs );
		if ( window.ActiveXObject && o != null ) {
			js.onreadystatechange = function() {
				if ( js.readyState == 'complete' ) o();
				if ( js.readyState == 'loaded' ) o();
			};
		} else {
			js.onload = o;
		}
	};
	// Google+1
	window.___gcfg = { lang: "ja" };
	add( 'https://apis.google.com/js/plusone.js' );
	// Facebook
	add( '//connect.facebook.net/ja_JP/all.js', 'facebook-jssdk', function() {
		add( 'http://static.ak.fbcdn.net/connect.php/js/FB.Share', 'facebook-share' );
	});
	// Twitter
	add( '//platform.twitter.com/widgets.js', 'twitter-wjs' );
	// ‚Í‚Ä‚È
	add( 'http://b.st-hatena.com/js/bookmark_button.js', 'hatena-js' );
}( document, 'script' ) );


/* OtherFix
=========================================== */

// IE6,7,8 css
if(!jQuery.support.tbody) document.write('<link rel="stylesheet" href="/share/css/ie8.css" media="screen,print">');

var otherfix = {
	setInit : function(){

		// SNS
		$('#sns_google').socialbutton('google_plusone', {lang:'ja',size:'medium'});
		$('#sns_facebook').socialbutton('facebook_like', {button:'button_count'});
		$('#sns_twitter').socialbutton('twitter', {button:'horizontal'});
		$('#sns_hatena').socialbutton('hatena');

		// first, last-child
		$('#global-nav ul ul>li:last-child').addClass('last-child');
		$('#topic-path>li:last-child').addClass('last-child');
		$('#side-nav ul>li:last-child').addClass('last-child');
		$('#foot-nav ul>li:first-child').addClass('first-child');

		// home
		if($('#home').length){
			$('#home dl.news-list>dt:first-child').addClass('first-child');

			// carousel
			$('#carousel').carouFredSel({
				prev: '#carousel_prev',
				next: '#carousel_next'
			});
		}

		// tour
		if($('#tour').length){
			$('#tour .section-block').each(function(){
				$('>div>:last-child',this).addClass('mb00');
				$('>p',this).addClass('mb00');
			});
		}

		// support
		if($('#support').length){
			// accordion
			$('.section>.accordion').each(function(){
				$('>dd',this).hide();

				$('>dt',this).css('cursor', 'pointer').hover(
					function(){ $(this).addClass('over'); },
					function(){ $(this).removeClass('over'); }
				);

				$('>dt',this).click(function(){
					if($(this).hasClass('open')){
						$(this).removeClass('open');
						$(this).next().slideUp('fast');
					} else {
						$(this).addClass('open');
						$(this).next().slideDown('fast');
					}
				});
			});
		}

		// news
		if($('#news').length){
			$('#news ul.category-nav>li:first-child').addClass('first-child');
			$('#news .contact>dl:not(:last-child)').addClass('not-last-child');

			// contact-block
			var c1 = $('#news .contact').eq(0).height();
			var c2 = $('#news .contact').eq(1).height();
			if(c2){
				var c = (c1 > c2)? c1 : c2;
				$('#news .contact').css('height', c);
			}
		}

		// IE6,7,8 margin
		if(!jQuery.support.tbody){
			$('.section>:last-child').addClass('mb00');
			$('.section-01>:last-child').addClass('mb00');
			$('.section-02>:last-child').addClass('mb00');
		}

	}
}



/* DropDown
=========================================== */

var dropdown = {
	setInit : function(){
		// stay
		var id = $('body').attr('id');
		$('#nav_'+id+'>a>img').each(function(){
			$(this).addClass('stay');
			this.src = this.src.replace('_n.', '_o.');
		});

		// drop
		$('#global-nav>ul>li:has(ul)').each(function(){
			$(this).hover(function(){
				$('>ul:not(:animated)',this).slideDown('fast');
				$('>a>img',this).each(function(){
					$(this).addClass('hover');
					this.src = this.src.replace('_n.', '_o.');
				});
			}, function(){
				$('>ul',this).slideUp(100);
				$('>a>img',this).each(function(){
					$(this).removeClass('hover');
					if(!$(this).hasClass('stay')) this.src = this.src.replace('_o.', '_n.');
				});
			});
		});
	}
}



/* RollOver
=========================================== */

var rollover = {
	setInit : function(){
		rollover.p = new Object();
		$("img[src*='_n.'],input[src*='_n.']").each(function(){
			var n = this.src;
			var o = n.replace('_n.', '_o.');
			if(!rollover.p[n]){
				rollover.p[n] = new Image();
				rollover.p[n].src = n;
				rollover.p[o] = new Image();
				rollover.p[o].src = o;
			}
			$(this).hover(
				function(){ if(!$(this).hasClass('hover') && this.src.lastIndexOf('_n.') > -1) this.src = rollover.p[o].src; },
				function(){ if(!$(this).hasClass('hover') && this.src.lastIndexOf('_o.') > -1) this.src = rollover.p[n].src; }
			);
		});
	}
}



/* AnimeScroll
=========================================== */

jQuery.easing.quart = function(x, t, b, c, d){
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

var aniscroll = {
	setInit : function(){
		$('a[href*=#],area[href*=#]').click(function(){
			if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name='+this.hash.slice(1)+']');
				if($target.length){
					var targetOffset = $target.offset().top;
					var targetTag = navigator.appName.match(/Opera/)? 'html' : 'html,body';
					$(targetTag).animate({scrollTop: targetOffset}, 'quart');
					return false;
				}
			}
		});
	}
}



/* ===========================================
 * START
=========================================== */

$(document).ready(function(){

	// OtherFix
	otherfix.setInit();

	// DropDown
	dropdown.setInit();

	// RollOver
	rollover.setInit();

	// AnimeScroll
	aniscroll.setInit();

});
