   // slider 1

   $('#slider1').owlCarousel({
    items:1,
    loop: false,
    dotsEach: true,
    smartSpeed: 800,
    nav: false,
    dots: true,  
    autoplayTimeout:3000,

})

// accordian section
$('.headeing').click(function(e) {
    e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('.accordian-parag').removeClass('show');
      $this.parent().parent().find('.accordian-parag').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});


    // header

    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
    
        if (scroll >= 150) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

     // start top to bottom section

     $(function(){

        //Scroll event
        $(window).scroll(function(){
          var scrolled = $(window).scrollTop();
          if (scrolled > 200) $('.go-top').fadeIn('slow');
          if (scrolled < 200) $('.go-top').fadeOut('slow');
        });
        
        //Click event
        $('.go-top').click(function () {
          $("html, body").animate({ scrollTop: "0" },  500);
        });
      
      });
