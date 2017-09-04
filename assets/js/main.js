$(function(){
        // scroll nav
        $(window).on('scroll', function (e) {
            if($(window).scrollTop() > 200){
                $('nav').addClass('bg-primary');
            }else{
                $('nav').removeClass('bg-primary');
            }
        })

        // collapse project pages
        $('.collapse').on('show.bs.collapse', function () {
            $('.collapse').collapse('hide');
        })
    })
    // scroll reveal
    window.sr = ScrollReveal();

    // as a DOM node...
    sr.reveal('section');
    sr.reveal('#competence', { afterReveal: function () {
        _html.animate(0.70);  // Number from 0.0 to 1.0 // progressbarjs
		_css.animate(0.6);
		_js.animate(0.50);
		_php.animate(0.40);
    }});
    sr.reveal('.card', 100);
	sr.reveal('.tools', 100);

    // circle js
    var _html = new ProgressBar.Circle(html, {
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 900,
    easing: 'easeOutBack',
    strokeWidth: 6,
    text: {
        value: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png" width="100" >'
    },
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
    }
    });
	
	var _css = new ProgressBar.Circle(css, {
    strokeWidth: 6,
	trailColor: '#eee',
    trailWidth: 1,
	color: '#0170ba',
	duration: 900,
	easing: 'easeOutBack',
	text: {
		value: '<img src="http://www.astuces-webmaster.ch/tutos/css/css3.png" width="80" >'
	}
	});
	
	var _js = new ProgressBar.Circle(js, {
    strokeWidth: 6,
	trailColor: '#eee',
    trailWidth: 1,
	color: '#e5a228',
	duration: 900,
	easing: 'easeOutBack',
	text: {
		value: '<img src="https://wiki-geek.xyz/wp-content/gallery/developpement-web/javascript-logo-officiel-js.png" width="120" >'
	}
	});
	
	var _php = new ProgressBar.Circle(php, {
    strokeWidth: 6,
	trailColor: '#eee',
    trailWidth: 1,
	color: '#8ba0e1',
	duration: 900,
	easing: 'easeOutBack',
	text: {
		value: '<img src="http://blog.yann.info/wp-content/uploads/2010/04/elephant-elephant-php-logo.png" width="140" >'
	}
	});