
  $('.cd100').countdown100({
    /*Set Endtime here*/
    /*Endtime must be > current time*/
    endtimeYear: 2020,
    endtimeMonth: 11,
    endtimeDate: 26,
    endtimeHours: 9,
    endtimeMinutes: 0,
    endtimeSeconds: 0,
    timeZone: "Africa/Lagos" 
    // ex:  timeZone: "America/New_York"
    //go to " http://momentjs.com/timezone/ " to get timezone
  });

  

$(document).ready(function () {
    $('.testimonial-slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
        variableWidth: true,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
    });
  });   


// if ($('#formCheck')[0].checked) { $('.custom-checkbox').fadeOut() }
  

$("#formCheck").click(function(){
    if ($('#formCheck')[0].checked) {
        $('.custom-checkbox').fadeOut(100);
        $('.itemsForSale').fadeIn(800);
    }
    
    });


    const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from('.header', { y: '-100%', ease: 'bounce' })
  .from('.link', { opacity: 0, stagger: .5 })
  .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
  .from('.left', { x: '-100%' }, '<.5')
  .to('.footer', {  y: 0, ease: 'elastic' })
  .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })
