
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
    


(function() {
  'use strict';
  window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.getElementById('signupForm');
  // prevent submission
    form.addEventListener('submit', function (event) {

      const contactName = $('#contactName').val();
      const contactState = $('#contactState').val();
      const contactEmail = $('#contactEmail').val();
      const contactPhone = $('#contactPhone').val();
      const contactInterested = $('#contactInterested').val();
      const contactSelling = $('#contactSelling').val();


    console.log('submit')
  if (form.checkValidity() === false) {
  event.preventDefault();
    event.stopPropagation();

    // console.log('validated')    
  } 
  form.classList.add('was-validated');
      // console.log('dated')
      if (form.checkValidity() === true) { 
        event.preventDefault();
        event.stopPropagation();
        $('.submit-btn').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Submitting...').addClass('disabled');
        $.post("https://api.declutter.ng/website-form",
        {
           name : contactName? contactName : "" ,
          state : contactState? contactState : "",
          email : contactEmail? contactEmail : "" ,
          phone : contactPhone? contactPhone : "",
          items_interested : contactInterested? contactInterested : "",
          items_to_sell : contactSelling? contactSelling : ""
      },
        function (data, status) {
            if (data.success) {
              $(".hero-title h2").fadeToggle(300);
              $('.form-content').fadeOut(300);
              $(".hero-title h2").html("We would be in touch with you very soon");
              $(".hero-title").addClass('mx-auto');
              $(".hero-title h2").fadeToggle(300);
           
          }
            else {
              $(".hero-title h2").fadeToggle(300);
              $('.form-content').fadeOut(300);
              $(".hero-title h2").html("Oops! Something went wrong.");
              $(".hero-title").addClass('mx-auto');
              $(".hero-title h2").fadeToggle(300);
           
          }
          
        });
      }

  }, false);

  }, false);
  })();
