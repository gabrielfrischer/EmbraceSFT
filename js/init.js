(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
        
var path = document.querySelector('.timer circle');
var length = path.getTotalLength();
var seconds = 30;
var step = 0;
var t_start = 1;
var t_stop = 1;
var playing = true;
var myTimer;

console.log(length);

function buildTimerDisplay(){
  if (seconds < 0){
    secString = '0' + seconds;
  } else {
    secString = seconds;
  }
  $('#timerText').text(secString);
}
buildTimerDisplay();

function countdown() {
  buildTimerDisplay();
  myTimer = setTimeout(countdown, 1000);
  //seconds = 30
  console.log('countdown', seconds );
  seconds--;
  if (seconds < 0 ){
  	seconds = 0;
    console.log('clearing timeout')
    reset();
  }
} 

/*
$('.range-slider--range').on('input', function(){
  reset();
  seconds = parseInt($('.range-slider--range').val());
  console.log($('.range-slider--range').val());
  buildTimerDisplay();
});
*/



function pauseAll(){
  clearTimeout(myTimer);
  $('.playPause i').removeClass('fa-pause');
    $('.playPause i').addClass('fa-play');
    $(".timer circle")
      .css('animation-play-state', 'paused');
    playing = false;
}
function reset(){
  clearTimeout(myTimer);
  buildTimerDisplay();
  
  $('.playPause i').removeClass('fa-pause');
    $('.playPause i').addClass('fa-play');
    $(".timer circle")
      .css('animation-play-state', 'paused');
    playing = false;
  $(".timer circle").removeClass("animation");
  $('.playPause i').removeClass('fa-pause');
  $('.playPause i').addClass('fa-play');
}

$('.playPause').click(function(){
  $(this).siblings('.range-slider--range').prop( "disabled", true );
  if (playing){
    console.log('Starting the step!!!');

    t_start = Math.floor(Date.now());
    countdown();
    $('.playPause i').removeClass('fa-play');
    $('.playPause i').addClass('fa-pause');
    //seconds = parseInt($('.range-slider--range').val());
    $(".timer circle")
      .addClass("animation")
      .css('animation-play-state', 'running')
      .css('animation-duration', 30 +'s')
      .bind('oanimationend animationend webkitAnimationEnd', function() { 
        $(this).removeClass("animation");
        $('.playPause i').removeClass('fa-pause');
        $('.playPause i').addClass('fa-play');
      });
    $('#timerText').attr('class','started');
    playing = false;
  } else {
  	t_stop = Math.floor(Date.now());
  	step++;
  	console.log(step,t_start,t_stop);
    console.log('pause');
    pauseAll();
 	playing = true;
  }
  
});



 $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });

   $(document).ready(function(){
    $('ul.tabs').tabs();
  });
     


   $(document).ready(function() {
  $('ul.tabs').tabs();
  $("#SFTbtnContinue1").click(function() {
    $('ul.tabs').tabs('select_tab', 'test2');
  });
   $("#SFTbtnContinue2").click(function() {
    $('ul.tabs').tabs('select_tab', 'test3');
  });
    $("#SFTbtnContinue3").click(function() {
    $('ul.tabs').tabs('select_tab', 'test4');
  });
     $("#SFTbtnContinue4").click(function() {
    $('ul.tabs').tabs('select_tab', 'test5');
  });
      $("#SFTbtnContinue5").click(function() {
    $('ul.tabs').tabs('select_tab', 'test6');
  });
});


$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
        

