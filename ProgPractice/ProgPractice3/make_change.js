"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

function processEntry() {
    $("quarters").value = "";
    $("dimes").value = "";
    $("nickels").value = "";
    $("pennies").value = "";

    var cents = parseInt($("cents").value);

    if (cents >= 0 && cents <= 99) {
        makeChange(cents);
    } else {
        alert("Error: Invalid Entry");
    }
}

function makeChange(cents) {
    var quarters = 0;
    var dimes = 0;
    var nickles = 0;
    var pennies = 0;

    while (cents >= 25) {
        quarters++;
        cents -= 25;
    }

    while (cents >= 10) {
        dimes++;
        cents -= 10;
    }

    while (cents >= 5) {
        nickles++;
        cents -= 5;
    }

    while (cents >= 1) {
        pennies++;
        cents -= 1;
    }

    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickles;
    $("pennies").value = pennies;
}

window.onload = function() {
    $("calculate").addEventListener("click", processEntry);
};