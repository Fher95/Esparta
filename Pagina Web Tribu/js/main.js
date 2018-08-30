$(document).ready(function(){

	$('#btn-menu').click(function(){

		if( $('.btn-menu span').attr('class') == 'icon-library' ){

			$('.btn-menu span').removeClass('icon-library').addClass('icon-arrow-left2').css({'color':'#c6961d'});
			$('.full-menu').css({'left':'0'});

		}else{
			$('.btn-menu span').removeClass('icon-arrow-left2').addClass('icon-library').css({'color':'#c6961d'});
			$('.full-menu').css({'left':'-100%'});
		}
	});

});