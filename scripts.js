/*$("up_button").on("click mousedown touchstart", function() {
    //prevents page refresh
  event.preventDefault();
  addClass('active')
});
*/


$(document).ready(function(){
  var set_time = 30;
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
  alert( "configuration set");
});

$("#up_button").on("click",function() {
  //prevents page refresh
  event.preventDefault();
  //increments set time
  set_time = set_time + increment_amount;
  document.getElementById("timer_value").innerHTML = set_time;
});

$("#down_button").on("click",function() {
  //prevents page refresh
  event.preventDefault();
  //function stub, increment set time
});