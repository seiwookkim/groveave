$(document).foundation();

$(window).on('load', function(){
		
				
				$('.gallery-nav li').each(function(){
					var src = $(this).find('img').attr('src');
					$(this).css('background-image', 'url("'+src+'")');
					$(this).find('img').remove();
					$(this).addClass('gallery-cell');
				})
				
				$('.main-gallery').css('height', $('.main-gallery').width())
		
				var main_gallery = new Flickity( '.main-gallery', {
					prevNextButtons: false,
					pageDots: false, 
					imagesLoaded: true,
					setGallerySize: false
				} );
		
				var gallery_nav = new Flickity( '.gallery-nav', {
					asNavFor:'.main-gallery',
					prevNextButtons: false,
					pageDots: false,
					contain: true,
					imagesLoaded: true
				} );
		
				
				
				
	
		})