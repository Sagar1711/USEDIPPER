$(document).ready(function(){

$('.cart').on('click', function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parent('.item').find("img").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '100px',
                    'width': '100px',
                    'z-index': '100'
            })
            .appendTo("body")
            .animate({
               top: cart.offset().top + 10,
               left: cart.offset().left + 10,
               width: 75,
               height: 75
            });

            imgclone.animate({
                  'width': 0,
                  'height': 0
            }, function () {
                $(this).detach()
            });

        }
    });
});
