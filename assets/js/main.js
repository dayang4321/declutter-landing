
  $('.cd100').countdown100({
    /*Set Endtime here*/
    /*Endtime must be > current time*/
    endtimeYear: 2020,
    endtimeMonth: 11,
    endtimeDate: 26,
    endtimeHours: 18,
    endtimeMinutes: 0,
    endtimeSeconds: 0,
    timeZone: "" 
    // ex:  timeZone: "America/New_York"
    //go to " http://momentjs.com/timezone/ " to get timezone
  });


// if ($('#formCheck')[0].checked) { $('.custom-checkbox').fadeOut() }
  

$("#formCheck").click(function(){
    if ($('#formCheck')[0].checked) {
        $('.custom-checkbox').fadeOut(100);
        $('.itemsForSale').fadeIn(800);
    }
    
    });
