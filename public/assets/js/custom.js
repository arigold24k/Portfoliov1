//import { Email } from 'smtp.js';
(function($){



	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})

        
        /* ---------------------------------------------- /*
		 * Skills
        /* ---------------------------------------------- */    
        //var color = $('#home').css('backgroundColor');

        $('.skills').waypoint(function(){
            $('.chart').each(function(){
            $(this).easyPieChart({
                    size:140,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#FF5252',
                    trackColor: 'transparent',
                    lineWidth: 10
                });
            });
        },{offset:'80%'});
        
        
        /* ---------------------------------------------- /*
		 * Quote Rotator
		/* ---------------------------------------------- */
       
			$( function() {
				/*
				- how to call the plugin:
				$( selector ).cbpQTRotator( [options] );
				- options:
				{
					// default transition speed (ms)
					speed : 700,
					// default transition easing
					easing : 'ease',
					// rotator interval (ms)
					interval : 8000
				}
				- destroy:
				$( selector ).cbpQTRotator( 'destroy' );
				*/

				$( '#cbp-qtrotator' ).cbpQTRotator();

			} );
		
        
		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

        $("#response").hide();
		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */
        $('#contact-form').submit('click', (e) => {
			e.preventDefault();

			if($("#c_email").val() != ""){
				const data = {
					name: $("#c_name").val(),
					email: $("#c_email").val(),
					message: $("#c_message").val()

				};
			//console.log(dataString);
			// 68def8c0-6c99-418e-8f47-99b2d6ce5508
                //location.href = "mailto:"+ String("ariel.m.vidal^gmail.com").replace("^", "@") +'&subject=Please contact '+ data.name +'&body='+data.message;
                //var emailWindow = window.open("mailto:"+ d_email.replace("^", "@") + "?cc=" + data.email + "&subject=Please contact "+ data.name +'&body='+data.message, '_self');
                // Email.send({
                //     SecureToken : "68def8c0-6c99-418e-8f47-99b2d6ce5508",
					// port: 587,
                //     To : 'ariel.m.vidal@gmail.com',
                //     From : "ariel.m.vidal@gmail.com ",
                //     Subject : `Please Contact ${data.name}.`,
                //     Body : `Please contact ${data.name}, at ${data.email}. Message: ${data.message}`
                // }).then((message) => {if(message === "OK"){$("#response").show(); $("#c_name, #c_email, #c_message").val("");}else{ alert(message);$("#response").hide(); console.log("This is the message, ", message);}})
                // ;
                // if (emailWindow) {
                 //    $("#response").show();
                 //    $("#c_name, #c_email, #c_message").val("");
				// }else {
                 //    $("#response").hide();
				// }
                var currentURL = window.location.origin;
				$.ajax({
					url: `${currentURL}/densliame`,
					method: "POST",
					//data: $("#contact-form").serialize(),
					data: data,

				})
					.done((res)=>{
					if(res = 'success'){
						console.log(res);
                        $('#response').html('Your submission was successful !<br> If you do not hear back with in 24 hours please contact me directly at ariel.m.vidal@gmail.com');
						$("#response").show();
                        $("#c_message, #c_email, #c_name").val("");
					}else{
						$('#response').html('There was an error sending the message. <br> Please email me directly at ariel.m.vidal@gmail.com');
                        $("#response").show();
					}
				})
			}


		});
		
	

		
		// $('#contact-form').submit('click', function(e) {
		// e.preventDefault();
    	//
    	// $(".btn").button('loading');
    	// setTimeout(function() {
    	//
    	// // var $this = $(this);
       //  $(".btn").button('reset');
    	// }, 3000);
       //
    	//  setTimeout(function() {
       //
       // $("#response").show();
 		// $("#c_message, #c_email, #c_name").val("");
       //
		// }, 4000);
       //
		// });

	

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test('ariel.m.vidal@gmail.com');
		};

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

			
		
			
		

		// 	var c_name = $('#c_name').val();
		// 	var c_email = $('#c_email').val();
		// 	var c_message = $('#c_message ').val();
		// 	var response = $('#contact-form .ajax-response');
			
		// 	var formData = {
		// 		'name'       : c_name,
		// 		'email'      : c_email,
		// 		'message'    : c_message
		// 	};

		// 	if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
		// 		response.fadeIn(500);
		// 		response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
		// 		console.log(form);
		// 	}

		// 	else {
		// 			 $.ajax({
		// 					type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
		// 					url         : 'assets/php/contact.php', // the url where we want to POST
		// 					data        : formData, // our data object
		// 					dataType    : 'json', // what type of data do we expect back from the server
		// 					encode      : true,
		// 					success		: function(res){
		// 									var ret = $.parseJSON(JSON.stringify(res));
		// 									response.html(ret.message).fadeIn(500);
		// 									console.log(ret);
		// 					}
		// 				});
		// 		}           
  //           	return false;
		// 	});

	});

})(jQuery);