//Save Events for each hour of the day
//Display standard business hours (9am - 5pm)
//Each time slot should represent 1 hour and contain
//  The Time
//  A field to hold user input
//  A save button
//      Stores time and user input in  'localstorage'
//Top of Cal shoud display current date and time
//Each hour should be color coded to reflect if time slot is in the past, present, or future
//
$(document).ready(function() {
  var currentTime = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentTime);
  //timeSlots = (declare time)
  for (var i = 0; i < 8; i++) {
    var hourBlock = $("<div>");
    hourBlock.addClass("row");
    //
    var timeDiv = $("<div>");
    //change text
    //add styles
    //
    hourBlock.append(timeDiv);
    //
    var inputDiv = $("<div>");
    //add input box
    //change input style
    //add color/logic (outside of forloop)
    hourBlock.append(inputDiv);
    //
    var btnDiv = $("<div>");
    //make it a submit button
    //add id to button
    //code function to listen for click event to lock
    hourBlock.add(btnDiv);

    var input = $("<input>");

    $("#timeBlock").append(hourBlock);
  }

  //We want this called every hour block
  function colorLogic(time) {
    //function is passed currentTime
    //Hour blocks are check against current time (hours specifically)
    //Any hour blocks before current hour get past color class
    //Any hour blocks greater than current hour get future color class
    //else get current color class
  }
});
