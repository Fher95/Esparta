$(document).ready(function(){

	$('#btn-menu').click(function(){

		if( $('.btn-menu span').attr('class') == 'fa fa-university' ){

			$('.btn-menu span').removeClass('fa fa-university').addClass('fa fa-close').css({'color':'#c6961d'});
			$('.full-menu').css({'left':'0'});

		}else{
			$('.btn-menu span').removeClass('fa fa-close').addClass('fa fa-university').css({'color':'#c6961d'});
			$('.full-menu').css({'left':'-100%'});
		}

	});

});