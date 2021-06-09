// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

console.log("test")
//Using Momentjs is how we are getting the current hour
const currentHour = +moment().format("H");
console.log(currentHour);
//We are slecting all elements with the class of time-block and executing a function for each one
$(".time-block").each(function(){
    //"this" is refering to .time-block 
    //".attr" gets the element id
    //".split" used to split a string into an array
    //".pop" Removes the last element of the newly created array
const hour = $(this).attr("id").split("-")
console.log(hour)


});

