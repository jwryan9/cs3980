"use strict";

var priceMap = new Map();
priceMap.set('espresso', 1.95);
priceMap.set('latte', 2.95);
priceMap.set('cappuccino', 3.45);
priceMap.set('coffee', 1.75);
priceMap.set('biscotti', 1.95);
priceMap.set('scone', 2.95);

$(document).ready(function() {
    var total = 0;
    
// add hover handler and click handler to each image in table
    $("ul img").each(function() {
        var oldURL = $(this).attr("src");
        var newURL = $(this).attr("id");

        // preload rollover image
        var rolloverImage = new Image();
        rolloverImage.src = newURL;
              
  // set up event handlers for each image, on hover  
        $(this).hover(
            function () {
                $(this).attr("src", newURL);
            },
            function () {
                $(this).attr("src", oldURL);
            }
        ); // end hover

  // set up event handlers for each image, when clicked  
        $(this).click(function(evt) {
            var product = $(this).attr("alt");
            var price = priceMap.get(product);

            var selection = document.createElement("option");
            selection.text = price.toFixed(2) + " - " + product;

            // add selection to text area and update total
            $("#order").append(selection);
            total += price;

            // display order and total
           $("#total").text("$ " + total.toFixed(2));

            // cancel default event of the clicked link
            evt.preventDefault();
            
        }); // end click
    }); // end each
    
    // add click event handler for check out button  
    $("#place_order").click(function() {
        window.location.href = "checkout.html";
    }); // end click
    
    // add click event handler for clear button  
    $("#clear_order").click(function() {
        total = 0;
        $("#total").text("");

        $("#order").text("");
    }); // end click
    
}); // end ready