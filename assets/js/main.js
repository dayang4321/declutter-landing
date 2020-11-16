
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
  

const assetSrc = "/assets/img/png/";

const imgSrcArr = ['laptop.png','heels.png','light.png','iphone.png','car.png','sofa.png','ps4.png', 'washing machine.png', 'lamp.png']
const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

const shuffledImgArr = shuffleArray(imgSrcArr);
const shuffledNumArr = shuffleArray(numArr);



const imgCount = 4 + Math.floor(Math.random() * 6)

console.log(imgCount);

for (let i = 1; i < imgCount ; i++) {
  $(`.pos${shuffledNumArr[i]}`).attr("src",assetSrc+shuffledImgArr[i])
}

// register the effect with GSAP:
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration, opacity: 0,
      onComplete: () => {
        $(targets).attr("src", "/assets/img/svg/naira.svg");
        gsap.to(targets,{duration:1, opacity: 1})
      }, ...config
    });
   
  },
  defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
  extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

//gsap.effects.fade(".box");

    let timeline = gsap.timeline()
timeline.fade('.pos1', { duration: 2, delay: 1.5, })
timeline.fade('.pos2', { duration: 2, delay: 1.5, })
timeline.fade('.pos3', { duration: 2, delay: 1.5, })
timeline.fade('.pos4', { duration: 2, delay: 1.5, })
timeline.fade('.pos5', { duration: 2, delay: 1.5, })
timeline.fade('.pos6', { duration: 2, delay: 1.5, })
timeline.fade('.pos7',  {duration: 2, delay: 1.5,})
timeline.fade('.pos8',  {duration: 2, delay: 1.5,})


  // .from('.pos2', { y: '-100%', ease: 'bounce' })
  // .from('.pos3', { y: '-100%', ease: 'bounce' })
  // .from('.pos4', { y: '-100%', ease: 'bounce' })
  // .from('.pos5', { y: '-100%', ease: 'bounce' })
  // .from('.pos6', { y: '-100%', ease: 'bounce' })
  // .from('.pos7', { y: '-100%', ease: 'bounce' })




  // .from('.link', { opacity: 0, stagger: .5 })
  // .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
  // .from('.left', { x: '-100%' }, '<.5')
  // .to('.footer', {  y: 0, ease: 'elastic' })
  // .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })
