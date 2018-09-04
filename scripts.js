/*$("up_button").on("click mousedown touchstart", function() {
    //prevents page refresh
  event.preventDefault();
  addClass('active')
});
*/
var set_time = 100;
var single_click_time =.2;
var change_speed =.2;
var increment_amount =10;
var delay_before_warp =30;
var change_warp_speed =30;

$(document).ready(function(){
 
  document.getElementById("timer_value").innerHTML = set_time;
});

$("#submit").on("click",function() {
  //prevents page refresh
  event.preventDefault();
  //sets variables
  var single_click_time = ($("#single_click").val());
  var change_speed = ($("#standard_change_interval").val());
  var increment_amount = ($("#standard_change_amount").val());
  var delay_before_warp = ($("#delay_before_warp_speed").val());
  var change_warp_speed = ($("#warp_increment").val());
  //alert( "configuration set");
});


/*
$("#down_button").on("click",function (){
      //prevents page refresh
  event.preventDefault();
      //var seconds_passed = 0;
      //while (seconds_passed <= delay_before_warp) {
  if (set_time - increment_amount >= 0){
    set_time = (set_time - increment_amount);
    document.getElementById("timer_value").innerHTML = set_time;
}
  else{
    set_time = 0;
  }
});
*/

$("#up_button").on("click",function(){
  if (set_time + increment_amount <= 600){
    set_time = (set_time + increment_amount);
    document.getElementById("timer_value").innerHTML = set_time;
  }
  else{
  
  }
});




$("#down_button").on('mousedown mouseup', function mouseState(e) {
    event.preventDefault;
    if ((e.type == "mousedown") && ((set_time - increment_amount) >= 0)) {
        setTimeout(200);
        set_time = (set_time - increment_amount);
        document.getElementById("timer_value").innerHTML = set_time;
        console.log("hold");
    }
});






    // if (e.type == "mousedown") {
    //     //code triggers on hold
    //     console.log("hold");