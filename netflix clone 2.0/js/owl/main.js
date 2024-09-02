var owl = $('.owl-carousel');
owl.owlCarousel({
    margin:20,
    loop:false,
    autoWidth:true,
    items:3,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})