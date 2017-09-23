jQuery(document).ready(function(){
				//MAPA//	
				jQuery("path, circle").hover(function(e) {
					console.log('working');
				  jQuery('#info-box').css('display','block');
				  jQuery('#info-box').html(jQuery(this).data('info'));
				});
				jQuery("path, circle").mouseleave(function(e) {
				  jQuery('#info-box').css('display','none');
				});
				jQuery(document).on('mousemove',function(e){
					jQuery('#info-box').css('top',e.pageY-$('#info-box').height()-30);
					console.log(e.pageY);
  					jQuery('#info-box').css('left',e.pageX-($('#info-box').width())/2);
				}).mouseover()

				/*jQuery(document).mousemove(function(e) {
  					jQuery('#info-box').css('top',e.pageY-$('#info-box').height()-100);
  					jQuery('#info-box').css('left',e.pageX-($('#info-box').width())/2);
				}).mouseover();*/

});