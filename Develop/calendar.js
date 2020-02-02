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

    //
    var timeDiv = $("<div>");
    //add styles
    if (i < 3) {
      $(timeDiv).text(i + 9 + "AM");
    } else if (i === 3) {
      $(timeDiv).text(12 + "PM");
    } else {
      $(timeDiv).text(i - 3 + "PM");
    }
    timeDiv.addClass("hour");
    hourBlock.append(timeDiv);
    //
    var inputDiv = $("<div>");
    var input = $("<input>");
    inputDiv.append(input);
    //add input box
    //change input style
    //add color/logic (outside of forloop)
    hourBlock.append(inputDiv);
    //
    var btnDiv = $("<div>");
    var saveBtn = $("<button/>");
    saveBtn.text("Lock");
    btnDiv.append(saveBtn);
    //make it a submit button
    //add id to button
    //code function to listen for click event to lock
    hourBlock.append(btnDiv);

    hourBlock.addClass("row");
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
