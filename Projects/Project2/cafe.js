"use strict";
$(document).ready(function() {
    var total = 0;
    
// add hover handler and click handler to each image in table
    $("ul img").each(function() {
        
              
  // set up event handlers for each image, on hover  
        $(this).hover(
            





        ); // end hover

  // set up event handlers for each image, when clicked  
        $(this).click(function(evt) {       
            
            // add selection to textarea and update total

           



            // display order and total
           



            // cancel default event of the clicked link
            evt.preventDefault();
            
        }); // end click
    }); // end each
    
    // add click event handler for check out button  
    $("#place_order").click(function() {
       


    }); // end click
    
    // add click event handler for clear button  
    $("#clear_order").click(function() {
        


    }); // end click
    
}); // end ready