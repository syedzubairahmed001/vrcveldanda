

$(document).ready(function(){
  // scroll animation

    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });


    //navigation

    $(".menu-icon").on('click', function(){
      $(".nav__sec-main ul").slideToggle();
    });

    $(window).on('scroll', function(){
      if($(window).scrollTop()){
        $('nav').addClass('scroll');
      }
      else{
        $('nav').removeClass('scroll');
      }
    })
});
