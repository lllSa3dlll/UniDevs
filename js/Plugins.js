$( document ).ready(function() {

    
    /*Start of Header plugins*/ 
      // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2200, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }


});

    $('.js-scroll-trigger').click(function()
    {
     $('.navbar-collapse').collapse('hide');
   });
   
    $(window).on("scroll",function(){
        if($(window).scrollTop()){
          $('.navbar').addClass('effect');
        }
        else
        {
          $('.navbar').removeClass('effect');
        }
      })
 
    /*End of Header plugins*/ 
   
    $(function(){
      new WOW().init(); 
    });

   

  $(".block3").fadeOut(2000,
    function()
    {
      $(this).parent().fadeOut(1500,
        function()
        {
          $(this).remove();
        });
    });

});