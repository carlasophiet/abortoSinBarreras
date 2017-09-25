var tempX = 0;
var tempY = 0;
jQuery(document).ready(function() {
				
				//MAPA
				jQuery('path, circle').hover(function(e) {
				  console.log('trabaja');
				  jQuery('#info-box').css('display','block');
				  jQuery('#info-box').html(jQuery(this).data('info'));
				});
				jQuery('path, circle').mouseleave(function(e) {
				  jQuery('#info-box').css('display','none');
				});
				jQuery(document).mousemove(function(e) {
   					var parentOffset = $('#info-box').parent().offset(); 
  					var relX = e.pageX - parentOffset.left-50;
   					var relY = e.pageY - parentOffset.top-50;

					console.log(relX, relY);
  					jQuery('#info-box').css('top', relY);
 				    jQuery('#info-box').css('left', relX);
				}).mouseover();
				/*jQuery('path').mousemove(function(e){
					var parentOffset= $(this).parent().offset();
					var X = e.pageX-parentOffset.left;
					var Y = e.pageY-parentOffset.top;
					console.log(X);
					console.log(Y);
					jQuery('#info-box').css('top', Y-50);
 				    jQuery('#info-box').css('left',X-20);
				}).mouseover();
				/*jQuery(document).mousemove(function(e) {
  					jQuery('#info-box').css('top',e.pageY-jQuery('#info-box').height()-30);
 				    jQuery('#info-box').css('left',e.pageX-(jQuery('#info-box').width())/2);
				}).mouseover();*/


		//scroll hacia abajo
			jQuery(".mov").on("click", function(){
			//e.preventDefault();
				idA= jQuery(this).data('id');
				id='#'+ idA;
				jQuery("html,body").animate({scrollTop:$(id).offset().top},800)
		});

			jQuery(".verMas").on("click",function(){
				var vid= jQuery(this).data('id');
				var id= '#escondido'+ vid;
				if(jQuery(id).css('display')==="none"){
					jQuery('.escondido').hide();
					jQuery(id).css('display','block');
					jQuery("html,body").animate({scrollTop:$(id).offset().top},800)
				}else{
					if(jQuery(id).css('display')==="block"){
					jQuery(id).css('display','none');
				}
		}
	});
				jQuery('.chiquita').on('click', function(){	
					id = jQuery(this).data('id');
					img = id;
					console.log('estoy');
					jQuery('#imagenGrande').attr('src', img);
			});
				jQuery('#cerrar').on('click',function(){
					jQuery('#myModal').modal('hide')
				});
				
				

});

