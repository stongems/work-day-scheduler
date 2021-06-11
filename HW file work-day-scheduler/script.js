// ********* BROKEN SAVE FUNCTION************//




console.log("test");
//Using Momentjs is how we are getting the current hour
const currentHour = +moment().format("H");
console.log(currentHour);
//We are slecting all elements with the class of time-block and executing a function for each one
// $(".time-block").each(function(){
//"this" is refering to .time-block
//".attr" gets the element id
//".split" used to split a string into an array
//     //".pop" Removes the last element of the newly created array
// const hour = $(this).attr("id").split("-")


$(".time-block").each(function () {
  const hour = $(this).attr("id").split("-").pop();
  console.log(".time-block");
  console.log(this);
  
  if (currentHour === hour) {
    //"present" css class name
    $(this).addClass("present");
  } else if (currentHour < hour) {
    //future css class name
    $(this).addClass("future");
  } else { //past css class name
    $(this).addClass("past");   
  }
  
});

// ^^^^^^^^^THE TEXT WILL NOT SAVE POST REFRESH^^^^^^^^^^^^
// JS need a DOM traversal to and from the text box********

